import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.partner1 || !body.partner2 || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
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
      subject: `New Consultation Request: ${body.partner1} & ${body.partner2}`,
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
    return NextResponse.json(
      {
        success: true,
        message: "Consultation request received",
        emailId: data?.id,
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
    partner1,
    partner2,
    email,
    phone,
    role,
    plannerName,
    plannerEmail,
    plannerPhone,
    plannerCompany,
    parentName,
    parentEmail,
    parentPhone,
    parentRelation,
    parentContactPreference,
    location,
    traditionResolved,
    eventType,
    date,
    guestCount,
    venueName,
    venueLink,
    isMultiDay,
    howYouMet,
    filmFeel,
    budgetRange,
    contactPreference,
    pinterestBoardUrl,
    pinterestBoardTitle,
    otherInspirationLinks,
    additionalNotes,
  } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Request</title>
  <style>
    body {
      font-family: Georgia, 'Playfair Display', serif;
      line-height: 1.7;
      color: #1C1A18;
      background: linear-gradient(to bottom, #FAF7F2 0%, #F5EFE7 100%);
      margin: 0;
      padding: 0;
    }
    .outer-envelope {
      max-width: 680px;
      margin: 20px auto;
      padding: 20px;
    }
    .container {
      max-width: 640px;
      margin: 0 auto;
      background: #FFFFFF;
      box-shadow: 0 10px 40px rgba(161, 76, 65, 0.15);
      border: 1px solid #E9DDD2;
      border-radius: 2px;
      overflow: hidden;
    }

    /* Elegant Header - Like opening a letter */
    .header {
      background: linear-gradient(135deg, #A14C41 0%, #8B5A50 50%, #7B6A5A 100%);
      padding: 50px 40px 40px;
      text-align: center;
      position: relative;
      border-bottom: 3px solid #D4A574;
    }
    .header::before {
      content: "✦";
      display: block;
      font-size: 24px;
      color: #FAF7F2;
      opacity: 0.6;
      margin-bottom: 10px;
    }
    .header h1 {
      margin: 0 0 10px 0;
      color: #FFFFFF;
      font-size: 32px;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: 'Playfair Display', Georgia, serif;
    }
    .header .couple-names {
      font-size: 26px;
      color: #FAF7F2;
      font-style: italic;
      margin: 15px 0 0 0;
      font-weight: 300;
      letter-spacing: 0.05em;
    }
    .header .date-stamp {
      font-size: 12px;
      color: #FAF7F2;
      opacity: 0.8;
      margin-top: 20px;
      font-family: -apple-system, sans-serif;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* Content */
    .content {
      padding: 45px 40px;
    }

    /* Info Cards - organized blocks */
    .info-card {
      background: linear-gradient(to bottom, #FFFCF7, #FFFFFF);
      border: 2px solid #E9DDD2;
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(123, 106, 90, 0.08);
    }
    .info-card:last-child {
      margin-bottom: 0;
    }

    .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #A14C41;
    }
    .card-icon {
      font-size: 24px;
      margin-right: 12px;
    }
    .card-title {
      font-size: 20px;
      font-weight: 600;
      color: #A14C41;
      margin: 0;
      letter-spacing: 0.05em;
      font-family: 'Playfair Display', Georgia, serif;
    }

    /* Fields - key/value pairs */
    .field-row {
      display: table;
      width: 100%;
      margin-bottom: 14px;
    }
    .field-row:last-child {
      margin-bottom: 0;
    }
    .field-label {
      font-size: 11px;
      font-weight: 700;
      color: #7B6A5A;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 5px;
      font-family: -apple-system, sans-serif;
    }
    .field-value {
      font-size: 16px;
      color: #1C1A18;
      line-height: 1.6;
    }
    .field-value a {
      color: #A14C41;
      text-decoration: none;
      border-bottom: 1px solid #E9DDD2;
      transition: border-color 0.3s;
    }
    .field-value a:hover {
      border-bottom-color: #A14C41;
    }
    .field-value.highlight {
      font-size: 18px;
      font-weight: 600;
      color: #A14C41;
    }

    /* Special tags/badges */
    .tag {
      display: inline-block;
      background: #A14C41;
      color: #FFFFFF;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin: 4px 6px 4px 0;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-family: -apple-system, sans-serif;
    }
    .tag.secondary {
      background: #E9DDD2;
      color: #7B6A5A;
    }

    /* Priority/Special boxes */
    .special-note {
      background: linear-gradient(135deg, #FFF9F0 0%, #FFF5E8 100%);
      border-left: 5px solid #D4A574;
      border-radius: 6px;
      padding: 20px 24px;
      margin: 20px 0;
      box-shadow: 0 2px 12px rgba(212, 165, 116, 0.15);
    }
    .special-note-title {
      font-size: 16px;
      font-weight: 700;
      color: #A14C41;
      margin: 0 0 12px 0;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-family: -apple-system, sans-serif;
    }
    .special-note-content {
      font-size: 15px;
      color: #1C1A18;
      line-height: 1.7;
    }

    /* Story section - more elegant */
    .story-box {
      background: #FFFCF7;
      border: 2px dashed #E9DDD2;
      border-radius: 8px;
      padding: 24px;
      margin: 20px 0;
      font-style: italic;
      color: #5A4A42;
      line-height: 1.8;
    }

    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #E9DDD2, transparent);
      margin: 32px 0;
    }

    /* Footer */
    .footer {
      background: linear-gradient(to bottom, #F5EFE7, #E9DDD2);
      padding: 30px 40px;
      text-align: center;
      border-top: 3px solid #D4A574;
    }
    .footer-logo {
      font-size: 20px;
      font-weight: 600;
      color: #A14C41;
      margin-bottom: 8px;
      letter-spacing: 0.1em;
      font-family: 'Playfair Display', Georgia, serif;
    }
    .footer-tagline {
      font-size: 13px;
      color: #7B6A5A;
      font-style: italic;
      margin-bottom: 15px;
    }
    .footer-meta {
      font-size: 11px;
      color: #7B6A5A;
      opacity: 0.7;
      font-family: -apple-system, sans-serif;
    }
  </style>
</head>
<body>
  <div class="outer-envelope">
    <div class="container">
      <!-- Elegant Header -->
      <div class="header">
        <h1>New Consultation</h1>
        <div class="couple-names">${partner1} & ${partner2}</div>
        <div class="date-stamp">Submitted ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      </div>

    <!-- Content -->
    <div class="content">
      <!-- Contact Information -->
      <div class="section">
        <h2 class="section-title">Contact Information</h2>

        <div class="field">
          <div class="field-label">Couple's Names</div>
          <div class="field-value">${partner1} & ${partner2}</div>
        </div>

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

        ${role === "planner" ? `
        <div class="priority-box">
          <strong>👔 Wedding Planner Inquiry</strong>
          ${plannerName ? `<div style="margin-top: 8px;"><strong>Name:</strong> ${plannerName}</div>` : ''}
          ${plannerEmail ? `<div><strong>Email:</strong> <a href="mailto:${plannerEmail}">${plannerEmail}</a></div>` : ''}
          ${plannerPhone ? `<div><strong>Phone:</strong> <a href="tel:${plannerPhone}">${plannerPhone}</a></div>` : ''}
          ${plannerCompany ? `<div><strong>Company:</strong> ${plannerCompany}</div>` : ''}
        </div>
        ` : ''}

        ${role === "parent" ? `
        <div class="priority-box">
          <strong>👨‍👩‍👧 Parent/Family Inquiry</strong>
          ${parentName ? `<div style="margin-top: 8px;"><strong>Name:</strong> ${parentName}</div>` : ''}
          ${parentRelation ? `<div><strong>Relation:</strong> ${parentRelation}</div>` : ''}
          ${parentEmail ? `<div><strong>Email:</strong> <a href="mailto:${parentEmail}">${parentEmail}</a></div>` : ''}
          ${parentPhone ? `<div><strong>Phone:</strong> <a href="tel:${parentPhone}">${parentPhone}</a></div>` : ''}
          ${parentContactPreference ? `<div><strong>Preferred Contact:</strong> ${parentContactPreference}</div>` : ''}
        </div>
        ` : ''}

        <div class="field">
          <div class="field-label">Preferred Contact Method</div>
          <div class="field-value">${contactPreference || 'Not specified'}</div>
        </div>
      </div>

      <!-- Event Details -->
      <div class="section">
        <h2 class="section-title">Event Details</h2>

        ${eventType ? `
        <div class="field">
          <div class="field-label">Event Type</div>
          <div class="field-value">${formatEventType(eventType)}${isMultiDay ? ' (Multi-day celebration)' : ''}</div>
        </div>
        ` : ''}

        ${date ? `
        <div class="field">
          <div class="field-label">Event Date</div>
          <div class="field-value">${formatDate(date)}</div>
        </div>
        ` : ''}

        ${traditionResolved ? `
        <div class="field">
          <div class="field-label">Tradition / Cultural Context</div>
          <div class="field-value">${traditionResolved}</div>
        </div>
        ` : ''}

        ${location ? `
        <div class="field">
          <div class="field-label">Location</div>
          <div class="field-value">${location}</div>
        </div>
        ` : ''}

        ${guestCount ? `
        <div class="field">
          <div class="field-label">Guest Count</div>
          <div class="field-value">${guestCount}</div>
        </div>
        ` : ''}

        ${venueName || venueLink ? `
        <div class="field">
          <div class="field-label">Venue</div>
          <div class="field-value">
            ${venueName || 'Not specified'}
            ${venueLink ? `<br><a href="${venueLink}" target="_blank">${venueLink}</a>` : ''}
          </div>
        </div>
        ` : ''}
      </div>

      <!-- Their Story -->
      ${howYouMet || (filmFeel && filmFeel.length > 0) ? `
      <div class="section">
        <h2 class="section-title">Their Story & Vision</h2>

        ${howYouMet ? `
        <div class="field">
          <div class="field-label">How They Met</div>
          <div class="field-value">${howYouMet}</div>
        </div>
        ` : ''}

        ${filmFeel && filmFeel.length > 0 ? `
        <div class="field">
          <div class="field-label">Film Feel</div>
          <div class="field-value">
            ${filmFeel.map((feel: string) => `<span class="badge">${feel}</span>`).join('')}
          </div>
        </div>
        ` : ''}
      </div>
      ` : ''}

      <!-- Inspiration -->
      ${pinterestBoardUrl || otherInspirationLinks ? `
      <div class="section">
        <h2 class="section-title">Inspiration</h2>

        ${pinterestBoardUrl ? `
        <div class="field">
          <div class="field-label">Pinterest Board</div>
          <div class="field-value">
            ${pinterestBoardTitle ? `${pinterestBoardTitle}<br>` : ''}
            <a href="${pinterestBoardUrl}" target="_blank">${pinterestBoardUrl}</a>
          </div>
        </div>
        ` : ''}

        ${otherInspirationLinks ? `
        <div class="field">
          <div class="field-label">Other Inspiration Links</div>
          <div class="field-value">${otherInspirationLinks}</div>
        </div>
        ` : ''}
      </div>
      ` : ''}

      <!-- Budget & Notes -->
      <div class="section">
        <h2 class="section-title">Investment & Notes</h2>

        ${budgetRange ? `
        <div class="field">
          <div class="field-label">Budget Range</div>
          <div class="field-value">$${budgetRange}</div>
        </div>
        ` : ''}

        ${additionalNotes ? `
        <div class="field">
          <div class="field-label">Additional Notes</div>
          <div class="field-value">${additionalNotes}</div>
        </div>
        ` : ''}
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Love, Violeta Rose — Luxury Wedding Films</p>
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
    partner1,
    partner2,
    email,
    phone,
    role,
    plannerName,
    plannerEmail,
    plannerPhone,
    plannerCompany,
    parentName,
    parentEmail,
    parentPhone,
    parentRelation,
    parentContactPreference,
    location,
    traditionResolved,
    eventType,
    date,
    guestCount,
    venueName,
    venueLink,
    isMultiDay,
    howYouMet,
    filmFeel,
    budgetRange,
    contactPreference,
    pinterestBoardUrl,
    pinterestBoardTitle,
    otherInspirationLinks,
    additionalNotes,
  } = data;

  let text = `NEW CONSULTATION REQUEST\n`;
  text += `${partner1} & ${partner2}\n\n`;
  text += `═════════════════════════════════════\n\n`;

  // Contact Information
  text += `CONTACT INFORMATION\n`;
  text += `-----------------------------------\n`;
  text += `Couple: ${partner1} & ${partner2}\n`;
  text += `Email: ${email}\n`;
  if (phone) text += `Phone: ${phone}\n`;

  if (role === "planner") {
    text += `\n👔 WEDDING PLANNER INQUIRY\n`;
    if (plannerName) text += `Planner: ${plannerName}\n`;
    if (plannerEmail) text += `Email: ${plannerEmail}\n`;
    if (plannerPhone) text += `Phone: ${plannerPhone}\n`;
    if (plannerCompany) text += `Company: ${plannerCompany}\n`;
  }

  if (role === "parent") {
    text += `\n👨‍👩‍👧 PARENT/FAMILY INQUIRY\n`;
    if (parentName) text += `Name: ${parentName}\n`;
    if (parentRelation) text += `Relation: ${parentRelation}\n`;
    if (parentEmail) text += `Email: ${parentEmail}\n`;
    if (parentPhone) text += `Phone: ${parentPhone}\n`;
    if (parentContactPreference) text += `Preferred Contact: ${parentContactPreference}\n`;
  }

  text += `Preferred Contact: ${contactPreference || 'Not specified'}\n\n`;

  // Event Details
  text += `EVENT DETAILS\n`;
  text += `-----------------------------------\n`;
  if (eventType) text += `Type: ${formatEventType(eventType)}${isMultiDay ? ' (Multi-day)' : ''}\n`;
  if (date) text += `Date: ${formatDate(date)}\n`;
  if (traditionResolved) text += `Tradition: ${traditionResolved}\n`;
  if (location) text += `Location: ${location}\n`;
  if (guestCount) text += `Guest Count: ${guestCount}\n`;
  if (venueName) text += `Venue: ${venueName}\n`;
  if (venueLink) text += `Venue Link: ${venueLink}\n`;
  text += `\n`;

  // Story & Vision
  if (howYouMet || (filmFeel && filmFeel.length > 0)) {
    text += `THEIR STORY & VISION\n`;
    text += `-----------------------------------\n`;
    if (howYouMet) text += `How They Met:\n${howYouMet}\n\n`;
    if (filmFeel && filmFeel.length > 0) {
      text += `Film Feel: ${filmFeel.join(', ')}\n`;
    }
    text += `\n`;
  }

  // Inspiration
  if (pinterestBoardUrl || otherInspirationLinks) {
    text += `INSPIRATION\n`;
    text += `-----------------------------------\n`;
    if (pinterestBoardUrl) {
      text += `Pinterest Board:\n`;
      if (pinterestBoardTitle) text += `${pinterestBoardTitle}\n`;
      text += `${pinterestBoardUrl}\n\n`;
    }
    if (otherInspirationLinks) text += `Other Links: ${otherInspirationLinks}\n`;
    text += `\n`;
  }

  // Budget & Notes
  text += `INVESTMENT & NOTES\n`;
  text += `-----------------------------------\n`;
  if (budgetRange) text += `Budget Range: $${budgetRange}\n`;
  if (additionalNotes) text += `Additional Notes:\n${additionalNotes}\n`;

  text += `\n═════════════════════════════════════\n`;
  text += `Love, Violeta Rose — Luxury Wedding Films\n`;
  text += `This consultation request was submitted via your website\n`;

  return text;
}

// Helper function to format event type
function formatEventType(eventType: string): string {
  const types: Record<string, string> = {
    elopements: "Elopements & Intimate Gatherings",
    weddingDay: "Wedding Day Films",
    destination: "Destination Wedding Films",
    adventure: "Adventure Sessions & Stories",
    custom: "Not sure yet / Custom",
  };
  return types[eventType] || eventType;
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
