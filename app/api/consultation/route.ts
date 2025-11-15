import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Airtable from "airtable";

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

    let airtableRecordId = null;
    let emailId = null;

    // ==========================================
    // STEP 1: Write to Airtable (if configured)
    // ==========================================
    if (
      process.env.AIRTABLE_API_TOKEN &&
      process.env.AIRTABLE_BASE_ID &&
      process.env.AIRTABLE_TABLE_ID
    ) {
      try {
        const airtable = new Airtable({
          apiKey: process.env.AIRTABLE_API_TOKEN,
        });

        const base = airtable.base(process.env.AIRTABLE_BASE_ID);
        const table = base(process.env.AIRTABLE_TABLE_ID);

        // Create Airtable record
        const record = await table.create({
          "Partner 1": body.partner1,
          "Partner 2": body.partner2,
          Email: body.email,
          Phone: body.phone || "",
          Status: "New Lead",
          Role: body.role || "Couple",
          "Event Type": body.eventType || "",
          "Event Date": body.date || "",
          Location: body.location || "",
          "Guest Count": body.guestCount ? parseInt(body.guestCount) : null,
          "Venue Name": body.venueName || "",
          "Venue Link": body.venueLink || "",
          "Is Multi-Day": body.isMultiDay || false,
          Tradition: body.traditionResolved || "",
          "Planner Name": body.plannerName || "",
          "Planner Email": body.plannerEmail || "",
          "Planner Phone": body.plannerPhone || "",
          "Planner Company": body.plannerCompany || "",
          "Parent Name": body.parentName || "",
          "Parent Email": body.parentEmail || "",
          "Parent Phone": body.parentPhone || "",
          "Parent Relation": body.parentRelation || "",
          "How They Met": body.howYouMet || "",
          "Film Feel": body.filmFeel || [],
          "Budget Range": body.budgetRange || "",
          "Pinterest Board": body.pinterestBoardUrl || "",
          "Pinterest Title": body.pinterestBoardTitle || "",
          "Other Links": body.otherInspirationLinks || "",
          "Additional Notes": body.additionalNotes || "",
          "Contact Preference": body.contactPreference || "",
          Source: "Website Form",
        });

        airtableRecordId = record.id;
        console.log("✅ Airtable record created:", airtableRecordId);
      } catch (airtableError: any) {
        // Log error but don't fail the request
        console.error("❌ Airtable error (continuing anyway):", airtableError.message);
      }
    } else {
      console.log("ℹ️  Airtable not configured, skipping database write");
    }

    // ==========================================
    // STEP 2: Send Email Notification (if configured)
    // ==========================================
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const emailHtml = generateEmailHtml(body);
        const emailText = generateEmailText(body);

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
          // Don't fail if email fails but Airtable succeeded
          if (!airtableRecordId) {
            return NextResponse.json(
              { error: "Failed to send email" },
              { status: 500 }
            );
          }
        } else {
          emailId = data?.id;
          console.log("✅ Email sent:", emailId);
        }
      } catch (emailError: any) {
        console.error("❌ Email sending error:", emailError.message);
        // Don't fail if email fails but Airtable succeeded
        if (!airtableRecordId) {
          return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
          );
        }
      }
    } else {
      console.log("ℹ️  Resend not configured, skipping email notification");
    }

    // ==========================================
    // STEP 3: Return Success Response
    // ==========================================
    return NextResponse.json(
      {
        success: true,
        message: "Consultation request received",
        airtableRecordId,
        emailId,
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
      <p>${partner1} & ${partner2}</p>
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
