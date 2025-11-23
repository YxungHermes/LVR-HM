import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { pricingOverview } from '@/content/pricing';
import { isValidEmail } from '@/lib/sanitize';

export async function POST(request: NextRequest) {
  try {
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

    // Get package details
    const packageDetails = pricingOverview.find(p => p.slug === packageSlug);
    if (!packageDetails) {
      return NextResponse.json(
        { error: 'Invalid package selected' },
        { status: 400 }
      );
    }

    // Calculate amount (use starting price)
    const amount = parseInt(packageDetails.range.split('—')[0].replace('$', '').replace(',', '').trim());

    // ✅ SECURITY: Sanitize client name
    const sanitizedName = clientName.trim().slice(0, 100);

    // Create Stripe checkout session
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const session = await createCheckoutSession({
      amount,
      packageName: packageDetails.name,
      clientEmail,
      clientName: sanitizedName,
      successUrl: `${baseUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${baseUrl}/reserve`,
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      );
    }

    // TODO: Optionally save this to CRM as a new lead with status "payment_pending"

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error('Error in create-checkout:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
