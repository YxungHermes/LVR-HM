// @ts-nocheck - Supabase types not available until database is configured
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import type { ConsultationFormData, N8nWebhookPayload } from "@/types/consultation";
import { sanitizeObject, isValidEmail } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rateLimit";
import { supabaseAdmin } from "@/lib/supabase";
import { sendClientConfirmation, scheduleFollowUp } from "@/lib/email-automation";

// Rate limit: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
});

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.warn("⚠️ TURNSTILE_SECRET_KEY not configured - skipping CAPTCHA verification");
    return true; // Allow submission if CAPTCHA is not configured (for development)
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("❌ Turnstile verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await limiter(request);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'Retry-After': '900', // 15 minutes in seconds
          },
        }
      );
    }

    const rawBody = await request.json();

    // Verify CAPTCHA token
    const { turnstileToken, ...formData } = rawBody;

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "CAPTCHA verification is required" },
        { status: 400 }
      );
    }

    const isCaptchaValid = await verifyTurnstileToken(turnstileToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Sanitize all input to prevent XSS
    const body = sanitizeObject(formData);

    // Validate required fields
    if (!body.partner1Name || !body.partner2Name || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    // Initialize Resend (lazy initialization)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Build email content
    const emailHtml = generateEmailHtml(body);
    const emailText = generateEmailText(body);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || body.email,
      replyTo: body.email,
      subject: `New Consultation: ${body.partner1Name} & ${body.partner2Name}${body.eventType === 'adventure' ? ' (Couples Film)' : ''}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully:", data?.id);

    // ========================================
    // CRM Integration: Save lead to database
    // ========================================
    let leadId: string | undefined;

    try {
      // Map form data to database schema
      const leadData = {
        partner1_name: body.partner1Name,
        partner1_pronouns: body.partner1Pronouns || null,
        partner2_name: body.partner2Name,
        partner2_pronouns: body.partner2Pronouns || null,
        email: body.email,
        phone: body.phone || null,
        wedding_date: body.weddingDate || null,
        location: body.location || null,
        event_type: body.eventType,
        event_subtype: body.eventSubtype || null,
        session_tier: body.sessionTier || null,
        guest_count: body.guestCount || null,
        tradition: body.tradition || null,
        tradition_other: body.traditionOther || null,
        film_style: body.filmStyle || null,
        deliverables: body.deliverables || null,
        budget_range: body.budgetRange || null,
        how_you_met: body.howYouMet || null,
        additional_notes: body.additionalNotes || null,
        how_did_you_hear: body.howDidYouHear || null,
        booking_timeline: body.bookingTimeline || null,
        status: 'new' as const,
        priority: determinePriority(body),
        estimated_value: estimateValue(body),
        source: 'consultation-form',
      };

      // @ts-ignore - Supabase types not available until runtime
      const { data: lead, error: dbError } = await supabaseAdmin
        .from('leads')
        .insert(leadData)
        .select()
        .single();

      if (dbError) {
        console.error("❌ Failed to save lead to database:", dbError);
        // Don't fail the request - email was sent successfully
      } else if (lead) {
        console.log("✅ Lead saved to database:", lead.id);
        leadId = lead.id;

        // Send automated confirmation email to client (fire-and-forget)
        sendClientConfirmation(lead).catch((error) => {
          console.error("⚠️ Failed to send client confirmation email:", error);
        });

        // Schedule 24-hour follow-up (fire-and-forget)
        scheduleFollowUp(lead.id).catch((error) => {
          console.error("⚠️ Failed to schedule follow-up:", error);
        });
      }
    } catch (dbError) {
      console.error("❌ Database error:", dbError);
      // Continue - don't fail the request
    }

    // Send data to n8n webhook (fire-and-forget - don't block response)
    sendToN8nWebhook(body).catch((error) => {
      console.error("⚠️ n8n webhook error (non-blocking):", error.message);
    });

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request received",
        emailId: data?.id,
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting consultation form:", error);
    return NextResponse.json(
      { error: "Failed to submit consultation request" },
      { status: 500 }
    );
  }
}

// Generate HTML email template
function generateEmailHtml(data: any): string {
  const {
    partner1Name,
    partner1Pronouns,
    partner2Name,
    partner2Pronouns,
    additionalPartners,
    email,
    phone,
    weddingDate,
    venueName,
    location,
    locationDetails,
    eventType,
    adventureTier,
    isMultiDay,
    numberOfDays,
    guestCount,
    tradition,
    traditionOther,
    filmStyle,
    keyMoments,
    deliverables,
    budgetRange,
    deliveryTimeline,
    howYouMet,
    inspirationLinks,
    additionalNotes,
    howDidYouHear,
    bookingTimeline,
    contactPreference,
  } = data;

  const traditionResolved = tradition === 'other' ? traditionOther : tradition;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
      line-height: 1.6;
      color: #1C1A18;
      background-color: #FAF7F2;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #FFFFFF;
      border: 1px solid #E9DDD2;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #A14C41 0%, #7B6A5A 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      color: #FFFFFF;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
    .header p {
      margin: 8px 0 0 0;
      color: #FAF7F2;
      font-size: 16px;
      opacity: 0.95;
    }
    .content {
      padding: 40px 30px;
    }
    .section {
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid #E9DDD2;
    }
    .section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #A14C41;
      margin: 0 0 16px 0;
      letter-spacing: 0.03em;
    }
    .field {
      margin-bottom: 12px;
    }
    .field-label {
      font-size: 13px;
      font-weight: 500;
      color: #7B6A5A;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      color: #1C1A18;
    }
    .field-value a {
      color: #A14C41;
      text-decoration: none;
    }
    .field-value a:hover {
      text-decoration: underline;
    }
    .badge {
      display: inline-block;
      background: #E9DDD2;
      color: #7B6A5A;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 500;
      margin: 2px 4px 2px 0;
    }
    .priority-box {
      background: #FFF9F0;
      border-left: 4px solid #A14C41;
      padding: 16px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .footer {
      background: #FAF7F2;
      padding: 24px 30px;
      text-align: center;
      font-size: 13px;
      color: #7B6A5A;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>✨ New Consultation Request</h1>
      <p>${partner1Name} & ${partner2Name}</p>
      ${eventType === 'adventure' && adventureTier ? `
        <p style="margin-top: 8px; font-size: 14px;">
          ${formatAdventureTier(adventureTier)}
        </p>
      ` : ''}
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Contact Information -->
      <div class="section">
        <h2 class="section-title">Contact Information</h2>

        <div class="field">
          <div class="field-label">Partner Names</div>
          <div class="field-value">
            ${partner1Name}${partner1Pronouns ? ` (${partner1Pronouns})` : ''} &
            ${partner2Name}${partner2Pronouns ? ` (${partner2Pronouns})` : ''}
          </div>
        </div>

        ${additionalPartners && additionalPartners.length > 0 ? `
        <div class="field">
          <div class="field-label">Additional Partners</div>
          <div class="field-value">
            ${additionalPartners.map((p: any) =>
              `${p.name}${p.pronouns ? ` (${p.pronouns})` : ''}`
            ).join(', ')}
          </div>
        </div>
        ` : ''}

        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value"><a href="mailto:${email}">${email}</a></div>
        </div>

        ${phone ? `
        <div class="field">
          <div class="field-label">Phone</div>
          <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
        </div>
        ` : ''}

        <div class="field">
          <div class="field-label">Preferred Contact Method</div>
          <div class="field-value">${contactPreference || 'Email'}</div>
        </div>

        ${howDidYouHear ? `
        <div class="field">
          <div class="field-label">How They Found Us</div>
          <div class="field-value">${formatHowDidYouHear(howDidYouHear)}</div>
        </div>
        ` : ''}

        ${bookingTimeline ? `
        <div class="field">
          <div class="field-label">Booking Timeline</div>
          <div class="field-value">${formatBookingTimeline(bookingTimeline)}</div>
        </div>
        ` : ''}
      </div>

      <!-- Event Details -->
      <div class="section">
        <h2 class="section-title">${eventType === 'adventure' ? 'Session Details' : 'Event Details'}</h2>

        ${eventType ? `
        <div class="field">
          <div class="field-label">${eventType === 'adventure' ? 'Session Type' : 'Event Type'}</div>
          <div class="field-value">${formatEventType(eventType)}${isMultiDay && numberOfDays ? ` (${numberOfDays} days)` : ''}</div>
        </div>
        ` : ''}

        ${eventType === 'adventure' && adventureTier ? `
        <div class="priority-box" style="background: #FFF9F0; border-left: 4px solid #A14C41;">
          <strong>📹 ${formatAdventureTier(adventureTier)}</strong>
          <div style="margin-top: 8px; font-size: 14px; color: #7B6A5A;">
            ${getTierDetails(adventureTier)}
          </div>
        </div>
        ` : ''}

        ${weddingDate ? `
        <div class="field">
          <div class="field-label">${eventType === 'adventure' ? 'Session Date' : 'Wedding Date'}</div>
          <div class="field-value">${formatDate(weddingDate)}</div>
        </div>
        ` : ''}

        ${traditionResolved ? `
        <div class="field">
          <div class="field-label">Tradition / Cultural Context</div>
          <div class="field-value">${formatTradition(traditionResolved)}</div>
        </div>
        ` : ''}

        ${location ? `
        <div class="field">
          <div class="field-label">Location</div>
          <div class="field-value">${location}</div>
        </div>
        ` : ''}

        ${locationDetails ? `
        <div class="field">
          <div class="field-label">Location Details</div>
          <div class="field-value">${locationDetails}</div>
        </div>
        ` : ''}

        ${guestCount ? `
        <div class="field">
          <div class="field-label">Guest Count</div>
          <div class="field-value">${guestCount}</div>
        </div>
        ` : ''}

        ${venueName ? `
        <div class="field">
          <div class="field-label">Venue</div>
          <div class="field-value">${venueName}</div>
        </div>
        ` : ''}
      </div>

      <!-- Vision & Style -->
      ${filmStyle || (keyMoments && keyMoments.length > 0) || howYouMet ? `
      <div class="section">
        <h2 class="section-title">Vision & Style</h2>

        ${filmStyle ? `
        <div class="field">
          <div class="field-label">Film Style</div>
          <div class="field-value">${formatFilmStyle(filmStyle)}</div>
        </div>
        ` : ''}

        ${keyMoments && keyMoments.length > 0 ? `
        <div class="field">
          <div class="field-label">Key Moments (${keyMoments.length})</div>
          <div class="field-value">
            ${keyMoments.map((moment: string) => `<span class="badge">${moment}</span>`).join('')}
          </div>
        </div>
        ` : ''}

        ${howYouMet ? `
        <div class="field">
          <div class="field-label">Their Story</div>
          <div class="field-value">${howYouMet}</div>
        </div>
        ` : ''}
      </div>
      ` : ''}

      <!-- Deliverables & Investment -->
      <div class="section">
        <h2 class="section-title">What They're Looking For</h2>

        ${deliverables && deliverables.length > 0 ? `
        <div class="field">
          <div class="field-label">Interested Deliverables</div>
          <div class="field-value">
            ${deliverables.map((id: string) => `<span class="badge">${formatDeliverable(id)}</span>`).join('')}
          </div>
        </div>
        ` : ''}

        ${budgetRange ? `
        <div class="field">
          <div class="field-label">Investment Range</div>
          <div class="field-value">${formatBudgetRange(budgetRange)}</div>
        </div>
        ` : ''}

        ${deliveryTimeline ? `
        <div class="field">
          <div class="field-label">Delivery Timeline</div>
          <div class="field-value">${formatDeliveryTimeline(deliveryTimeline)}</div>
        </div>
        ` : ''}
      </div>

      <!-- Inspiration & Notes -->
      ${inspirationLinks || additionalNotes ? `
      <div class="section">
        <h2 class="section-title">Additional Details</h2>

        ${inspirationLinks ? `
        <div class="field">
          <div class="field-label">Inspiration Links</div>
          <div class="field-value" style="white-space: pre-wrap;">${inspirationLinks}</div>
        </div>
        ` : ''}

        ${additionalNotes ? `
        <div class="field">
          <div class="field-label">Additional Notes</div>
          <div class="field-value" style="white-space: pre-wrap;">${additionalNotes}</div>
        </div>
        ` : ''}
      </div>
      ` : ''}
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Love, Violeta Rose — Cinematic Wedding & Couples Films</p>
      <p style="margin-top: 8px; font-size: 12px; opacity: 0.8;">
        This consultation request was submitted via your website
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Generate plain text email
function generateEmailText(data: any): string {
  const {
    partner1Name,
    partner1Pronouns,
    partner2Name,
    partner2Pronouns,
    additionalPartners,
    email,
    phone,
    weddingDate,
    venueName,
    location,
    locationDetails,
    eventType,
    adventureTier,
    isMultiDay,
    numberOfDays,
    guestCount,
    tradition,
    traditionOther,
    filmStyle,
    keyMoments,
    deliverables,
    budgetRange,
    deliveryTimeline,
    howYouMet,
    inspirationLinks,
    additionalNotes,
    howDidYouHear,
    bookingTimeline,
    contactPreference,
  } = data;

  const traditionResolved = tradition === 'other' ? traditionOther : tradition;

  let text = `NEW CONSULTATION REQUEST\n`;
  text += `${partner1Name} & ${partner2Name}\n`;
  if (eventType === 'adventure' && adventureTier) {
    text += `${formatAdventureTier(adventureTier)}\n`;
  }
  text += `\n═════════════════════════════════════\n\n`;

  // Contact Information
  text += `CONTACT INFORMATION\n`;
  text += `-----------------------------------\n`;
  text += `Partners: ${partner1Name}${partner1Pronouns ? ` (${partner1Pronouns})` : ''} & ${partner2Name}${partner2Pronouns ? ` (${partner2Pronouns})` : ''}\n`;
  if (additionalPartners && additionalPartners.length > 0) {
    text += `Additional Partners: ${additionalPartners.map((p: any) => `${p.name}${p.pronouns ? ` (${p.pronouns})` : ''}`).join(', ')}\n`;
  }
  text += `Email: ${email}\n`;
  if (phone) text += `Phone: ${phone}\n`;
  text += `Preferred Contact: ${contactPreference || 'Email'}\n`;
  if (howDidYouHear) text += `Found Us Via: ${formatHowDidYouHear(howDidYouHear)}\n`;
  if (bookingTimeline) text += `Booking Timeline: ${formatBookingTimeline(bookingTimeline)}\n`;
  text += `\n`;

  // Event/Session Details
  text += `${eventType === 'adventure' ? 'SESSION DETAILS' : 'EVENT DETAILS'}\n`;
  text += `-----------------------------------\n`;
  if (eventType) text += `Type: ${formatEventType(eventType)}${isMultiDay && numberOfDays ? ` (${numberOfDays} days)` : ''}\n`;
  if (eventType === 'adventure' && adventureTier) {
    text += `\n📹 ${formatAdventureTier(adventureTier)}\n`;
    text += `${getTierDetails(adventureTier)}\n\n`;
  }
  if (weddingDate) text += `Date: ${formatDate(weddingDate)}\n`;
  if (traditionResolved) text += `Tradition: ${formatTradition(traditionResolved)}\n`;
  if (location) text += `Location: ${location}\n`;
  if (locationDetails) text += `Location Details: ${locationDetails}\n`;
  if (guestCount) text += `Guest Count: ${guestCount}\n`;
  if (venueName) text += `Venue: ${venueName}\n`;
  text += `\n`;

  // Vision & Style
  if (filmStyle || (keyMoments && keyMoments.length > 0) || howYouMet) {
    text += `VISION & STYLE\n`;
    text += `-----------------------------------\n`;
    if (filmStyle) text += `Film Style: ${formatFilmStyle(filmStyle)}\n`;
    if (keyMoments && keyMoments.length > 0) {
      text += `Key Moments: ${keyMoments.join(', ')}\n`;
    }
    if (howYouMet) text += `Their Story:\n${howYouMet}\n`;
    text += `\n`;
  }

  // What They're Looking For
  text += `WHAT THEY'RE LOOKING FOR\n`;
  text += `-----------------------------------\n`;
  if (deliverables && deliverables.length > 0) {
    text += `Deliverables: ${deliverables.map((id: string) => formatDeliverable(id)).join(', ')}\n`;
  }
  if (budgetRange) text += `Investment Range: ${formatBudgetRange(budgetRange)}\n`;
  if (deliveryTimeline) text += `Delivery Timeline: ${formatDeliveryTimeline(deliveryTimeline)}\n`;
  text += `\n`;

  // Additional Details
  if (inspirationLinks || additionalNotes) {
    text += `ADDITIONAL DETAILS\n`;
    text += `-----------------------------------\n`;
    if (inspirationLinks) text += `Inspiration Links:\n${inspirationLinks}\n\n`;
    if (additionalNotes) text += `Additional Notes:\n${additionalNotes}\n`;
    text += `\n`;
  }

  text += `═════════════════════════════════════\n`;
  text += `Love, Violeta Rose — Cinematic Wedding & Couples Films\n`;
  text += `This consultation request was submitted via your website\n`;

  return text;
}

// Helper function to format event type
function formatEventType(eventType: string): string {
  const types: Record<string, string> = {
    elopement: "Elopement",
    intimate: "Intimate Wedding",
    full: "Full Wedding",
    large: "Large Celebration",
    destination: "Destination Wedding",
    adventure: "Couples Film",
  };
  return types[eventType] || eventType;
}

// Helper function to format adventure tier
function formatAdventureTier(tier: string): string {
  const tiers: Record<string, string> = {
    social: "The Social — $750",
    story: "The Story — $1,200",
    signature: "The Signature — $2,000",
  };
  return tiers[tier] || tier;
}

// Helper function to get tier details
function getTierDetails(tier: string): string {
  const details: Record<string, string> = {
    social: "Up to 2 hours • 1-min social-ready film • Vertical format",
    story: "3 hours • 2-3 min narrative film • Up to 2 locations",
    signature: "4-5 hours • 3-5 min cinematic film • Documentary-style + audio recording",
  };
  return details[tier] || '';
}

// Helper function to format tradition
function formatTradition(tradition: string): string {
  const traditions: Record<string, string> = {
    western: "Western/Non-denominational",
    catholic: "Catholic/Christian",
    jewish: "Jewish",
    hindu: "Hindu",
    muslim: "Muslim",
    "south-asian": "South Asian",
    "east-asian": "East Asian",
    multicultural: "Multicultural/Interfaith",
  };
  return traditions[tradition] || tradition;
}

// Helper function to format film style
function formatFilmStyle(style: string): string {
  const styles: Record<string, string> = {
    cinematic: "Cinematic & Dramatic",
    romantic: "Romantic & Dreamy",
    documentary: "Documentary & Candid",
    editorial: "Editorial & Artistic",
    energetic: "Bold & Energetic",
  };
  return styles[style] || style;
}

// Helper function to format deliverable
function formatDeliverable(id: string): string {
  const deliverables: Record<string, string> = {
    highlight: "Highlight Film",
    ceremony: "Full Ceremony Edit",
    reception: "Full Reception Edit",
    teaser: "Social Media Teaser",
    documentary: "Documentary Edit",
    raw: "Raw Footage Files",
    "cinematic-storytelling": "Cinematic Storytelling",
    "voice-recording": "Voice & Story Recording",
  };
  return deliverables[id] || id;
}

// Helper function to format budget range
function formatBudgetRange(range: string): string {
  if (range === 'flexible') return 'Flexible / Not sure yet';
  if (range.includes('+')) return `$${range}`;
  return `$${range.replace('-', ' - $')}`;
}

// Helper function to format delivery timeline
function formatDeliveryTimeline(timeline: string): string {
  const timelines: Record<string, string> = {
    standard: "Standard (8-12 weeks)",
    rush: "Rush (4-6 weeks)",
    flexible: "Flexible",
  };
  return timelines[timeline] || timeline;
}

// Helper function to format how did you hear
function formatHowDidYouHear(source: string): string {
  const sources: Record<string, string> = {
    instagram: "Instagram/Social Media",
    google: "Google Search",
    planner: "Wedding Planner/Vendor",
    friend: "Friend or Family Referral",
    venue: "Venue Recommendation",
    theknot: "The Knot/WeddingWire",
    other: "Other",
  };
  return sources[source] || source;
}

// Helper function to format booking timeline
function formatBookingTimeline(timeline: string): string {
  const timelines: Record<string, string> = {
    asap: "ASAP - date is coming up!",
    "1-2-weeks": "Within 1-2 weeks",
    "2-4-weeks": "Within 2-4 weeks",
    "1-2-months": "Within 1-2 months",
    researching: "Still browsing/researching",
  };
  return timelines[timeline] || timeline;
}

// Helper function to format date
function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// =============================================================================
// n8n Webhook Integration
// =============================================================================

/**
 * Prepare consultation form data for n8n webhook
 * Includes both raw values and formatted/human-readable versions
 */
function prepareN8nPayload(data: ConsultationFormData): N8nWebhookPayload {
  const traditionResolved = data.tradition === 'other' ? data.traditionOther : data.tradition;

  return {
    // Primary contact info
    partner1Name: data.partner1Name,
    partner1Pronouns: data.partner1Pronouns,
    partner2Name: data.partner2Name,
    partner2Pronouns: data.partner2Pronouns,
    additionalPartners: data.additionalPartners,
    email: data.email,
    phone: data.phone,

    // Event details
    weddingDate: data.weddingDate,
    eventType: data.eventType,
    eventTypeFormatted: formatEventType(data.eventType),
    location: data.location,
    venueName: data.venueName,
    locationDetails: data.locationDetails,
    guestCount: data.guestCount,

    // Adventure session specific
    adventureTier: data.adventureTier,
    adventureTierFormatted: data.adventureTier ? formatAdventureTier(data.adventureTier) : undefined,
    isMultiDay: data.isMultiDay,
    numberOfDays: data.numberOfDays,

    // Cultural context
    tradition: traditionResolved,
    traditionFormatted: traditionResolved ? formatTradition(traditionResolved) : undefined,

    // Vision & preferences
    filmStyle: data.filmStyle,
    filmStyleFormatted: formatFilmStyle(data.filmStyle),
    keyMoments: data.keyMoments,
    keyMomentsCount: data.keyMoments?.length,

    // Deliverables & budget
    deliverables: data.deliverables,
    deliverablesFormatted: data.deliverables?.map(formatDeliverable),
    budgetRange: data.budgetRange,
    budgetRangeFormatted: data.budgetRange ? formatBudgetRange(data.budgetRange) : undefined,
    deliveryTimeline: data.deliveryTimeline,
    deliveryTimelineFormatted: data.deliveryTimeline ? formatDeliveryTimeline(data.deliveryTimeline) : undefined,

    // Story & inspiration
    howYouMet: data.howYouMet,
    inspirationLinks: data.inspirationLinks,
    additionalNotes: data.additionalNotes,

    // Lead source & urgency
    howDidYouHear: data.howDidYouHear,
    howDidYouHearFormatted: data.howDidYouHear ? formatHowDidYouHear(data.howDidYouHear) : undefined,
    bookingTimeline: data.bookingTimeline,
    bookingTimelineFormatted: data.bookingTimeline ? formatBookingTimeline(data.bookingTimeline) : undefined,
    contactPreference: data.contactPreference,

    // Metadata
    submittedAt: new Date().toISOString(),
    source: 'consultation-form',
  };
}

/**
 * Send consultation data to n8n webhook
 * This is fire-and-forget - errors are logged but don't block the form submission
 */
async function sendToN8nWebhook(formData: ConsultationFormData): Promise<void> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  // Skip if webhook URL is not configured
  if (!webhookUrl) {
    console.log("ℹ️ N8N_WEBHOOK_URL not configured - skipping webhook");
    return;
  }

  try {
    const payload = prepareN8nPayload(formData);

    console.log("📤 Sending consultation data to n8n webhook...");

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Don't wait too long - this is non-blocking
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status ${response.status}`);
    }

    console.log("✅ n8n webhook delivered successfully");
  } catch (error) {
    // Log error but don't throw - this shouldn't break the form submission
    if (error instanceof Error) {
      console.error("❌ Failed to send to n8n webhook:", error.message);
    } else {
      console.error("❌ Failed to send to n8n webhook:", error);
    }
    throw error; // Re-throw so the catch in POST handler can log it
  }
}

// =============================================================================
// CRM Helper Functions
// =============================================================================

/**
 * Determine lead priority based on booking timeline and budget
 */
function determinePriority(formData: any): 'low' | 'medium' | 'high' {
  // High priority: booking ASAP or within 1-2 weeks
  if (formData.bookingTimeline === 'asap' || formData.bookingTimeline === '1-month') {
    return 'high';
  }

  // High priority: high budget range
  if (formData.budgetRange === '8k-plus') {
    return 'high';
  }

  // Low priority: just browsing
  if (formData.bookingTimeline === 'just-browsing' || formData.bookingTimeline === '3-plus-months') {
    return 'low';
  }

  // Default: medium
  return 'medium';
}

/**
 * Estimate lead value based on event type and budget range
 */
function estimateValue(formData: any): number {
  // If they provided a budget range, use the midpoint
  const budgetMap: Record<string, number> = {
    'under-3k': 2500,
    '3k-5k': 4000,
    '5k-8k': 6500,
    '8k-plus': 10000,
  };

  if (formData.budgetRange && budgetMap[formData.budgetRange]) {
    return budgetMap[formData.budgetRange];
  }

  // Otherwise estimate based on event type
  const eventTypeMap: Record<string, number> = {
    'elopement': 3500,
    'wedding': 5500,
    'destination': 8500,
    'engagement': 1200,
    'anniversary': 1200,
  };

  return eventTypeMap[formData.eventType] || 4000;
}
