import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { pricingOverview } from '@/content/pricing';
import { isValidEmail, sanitizeHtml } from '@/lib/sanitize';
import { supabaseAdmin } from '@/lib/supabase';
import type { Database } from '@/types/supabase';

// ✅ SECURITY: Rate limiting map (in-memory, use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute per IP

/**
 * ✅ SECURITY: Simple rate limiting
 * In production, use a proper rate limiting solution like Upstash Redis
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up old entries
  if (record && now > record.resetAt) {
    rateLimitMap.delete(ip);
  }

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // ✅ SECURITY: Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // ✅ SECURITY: Verify origin (CSRF protection)
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL,
      'http://localhost:3000',
      'http://localhost:3001',
    ];

    if (origin && !allowedOrigins.some(allowed => origin.startsWith(allowed || ''))) {
      console.warn(`⚠️ Rejected request from unauthorized origin: ${origin}`);
      return NextResponse.json(
        { error: 'Unauthorized origin' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { packageSlug, clientName, clientEmail, weddingDate } = body;

    // ✅ SECURITY: Validate required fields
    if (!packageSlug || !clientName || !clientEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ✅ SECURITY: Validate email format
    if (!isValidEmail(clientEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // ✅ SECURITY: Validate package slug (prevent injection)
    if (typeof packageSlug !== 'string' || !/^[a-z0-9-]+$/.test(packageSlug)) {
      return NextResponse.json(
        { error: 'Invalid package format' },
        { status: 400 }
      );
    }

    // ✅ SECURITY: Validate wedding date (must be in the future)
    if (weddingDate) {
      const date = new Date(weddingDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (isNaN(date.getTime()) || date < today) {
        return NextResponse.json(
          { error: 'Wedding date must be in the future' },
          { status: 400 }
        );
      }

      // Reasonable upper bound (5 years in the future)
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() + 5);
      if (date > maxDate) {
        return NextResponse.json(
          { error: 'Wedding date too far in the future' },
          { status: 400 }
        );
      }
    }

    // Get package details
    const packageDetails = pricingOverview.find(p => p.slug === packageSlug);
    if (!packageDetails) {
      return NextResponse.json(
        { error: 'Invalid package selected' },
        { status: 400 }
      );
    }

    // ✅ SECURITY: Server-side amount calculation with validation
    const priceMatch = packageDetails.range.match(/\$([0-9,]+)/);
    if (!priceMatch) {
      console.error('❌ Invalid price format in package:', packageSlug);
      return NextResponse.json(
        { error: 'Package pricing error' },
        { status: 500 }
      );
    }

    const amount = parseInt(priceMatch[1].replace(/,/g, ''));

    // ✅ SECURITY: Validate amount is reasonable (prevent overflow/underflow)
    if (isNaN(amount) || amount < 100 || amount > 50000) {
      console.error('❌ Invalid amount calculated:', amount);
      return NextResponse.json(
        { error: 'Invalid package amount' },
        { status: 500 }
      );
    }

    // ✅ SECURITY: Sanitize client name (prevent XSS)
    const sanitizedName = sanitizeHtml(clientName.trim()).slice(0, 100);

    // ✅ SECURITY: Validate name is not empty after sanitization
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json(
        { error: 'Invalid name provided' },
        { status: 400 }
      );
    }

    // ✅ Create or update lead in CRM
    let leadId: string | undefined;
    try {
      // Check if lead exists with this email
      const { data: existingLead, error: fetchError } = await supabaseAdmin
        .from('leads')
        .select('id')
        .eq('email', clientEmail)
        .maybeSingle<{ id: string }>();

      if (existingLead && !fetchError) {
        // Update existing lead
        leadId = existingLead.id;
        await (supabaseAdmin
          .from('leads')
          .update({
            updated_at: new Date().toISOString(),
            wedding_date: weddingDate || null,
          } as any)
          .eq('id', leadId));

        // Log activity
        await supabaseAdmin
          .from('lead_activities')
          .insert({
            lead_id: leadId,
            activity_type: 'note_added',
            description: `Started checkout process for ${packageDetails.name}`,
            metadata: {
              package_slug: packageSlug,
              package_name: packageDetails.name,
              amount: amount,
            },
          });
      } else {
        // Create new lead
        const names = sanitizedName.split(/&|,|\sand\s/i).map(n => n.trim());
        const partner1 = names[0] || sanitizedName;
        const partner2 = names[1] || '';

        const { data: newLead, error: leadError } = await supabaseAdmin
          .from('leads')
          .insert({
            partner1_name: partner1,
            partner2_name: partner2,
            email: clientEmail,
            wedding_date: weddingDate || null,
            event_type: 'wedding',
            status: 'new',
            priority: 'high',
            estimated_value: amount,
            source: 'direct_booking',
            budget_range: packageDetails.range,
          })
          .select('id')
          .single();

        if (leadError) {
          console.error('Failed to create lead:', leadError);
        } else if (newLead) {
          leadId = newLead.id;
          console.log(`✅ Created new lead: ${leadId}`);
        }
      }
    } catch (crmError) {
      console.error('CRM error (non-fatal):', crmError);
      // Continue with checkout even if CRM fails
    }

    // Create Stripe checkout session
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const session = await createCheckoutSession({
      amount,
      packageName: packageDetails.name,
      clientEmail,
      clientName: sanitizedName,
      successUrl: `${baseUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${baseUrl}/booking/cancel`,
      leadId,
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error('Error in create-checkout:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
