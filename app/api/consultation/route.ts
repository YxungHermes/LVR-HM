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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAFA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

  <!-- Email Container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FAFAFA;">
    <tr>
      <td style="padding: 40px 20px;">

        <!-- Main Email Card -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 640px; margin: 0 auto; background-color: #FFFFFF; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">

          <!-- Header Section -->
          <tr>
            <td style="padding: 60px 50px 50px; text-align: center; border-bottom: 1px solid #E8E8E8;">
              <h1 style="margin: 0 0 20px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 36px; font-weight: 400; color: #1A1A1A; letter-spacing: -0.02em; line-height: 1.2;">
                Consultation Request
              </h1>
              <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; font-weight: 300; color: #4A4A4A; font-style: italic; line-height: 1.4;">
                ${partner1} & ${partner2}
              </p>
              <p style="margin: 24px 0 0 0; font-size: 13px; font-weight: 500; color: #999999; letter-spacing: 0.1em; text-transform: uppercase;">
                ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </td>
          </tr>

          <!-- Content Section -->
          <tr>
            <td style="padding: 50px;">

              <!-- Contact Information -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 600; color: #2A2A2A; letter-spacing: 0.03em;">
                      Contact Information
                    </h2>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Email</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">
                            <a href="mailto:${email}" style="color: #2A2A2A; text-decoration: none; border-bottom: 1px solid #CCCCCC;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      ${phone ? `
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Phone</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">
                            <a href="tel:${phone}" style="color: #2A2A2A; text-decoration: none; border-bottom: 1px solid #CCCCCC;">${phone}</a>
                          </p>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td>
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Preferred Contact</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">${contactPreference || 'Email'}</p>
                        </td>
                      </tr>
                    </table>

                    ${role === "planner" ? `
                    <div style="margin-top: 24px; padding: 20px; background-color: #F9F9F9; border-left: 3px solid #2A2A2A;">
                      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; color: #2A2A2A; letter-spacing: 0.08em; text-transform: uppercase;">Wedding Planner Inquiry</p>
                      ${plannerName ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Name:</strong> ${plannerName}</p>` : ''}
                      ${plannerCompany ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Company:</strong> ${plannerCompany}</p>` : ''}
                      ${plannerEmail ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Email:</strong> <a href="mailto:${plannerEmail}" style="color: #2A2A2A; text-decoration: none; border-bottom: 1px solid #CCCCCC;">${plannerEmail}</a></p>` : ''}
                      ${plannerPhone ? `<p style="margin: 0; font-size: 15px; color: #4A4A4A;"><strong>Phone:</strong> ${plannerPhone}</p>` : ''}
                    </div>
                    ` : ''}

                    ${role === "parent" ? `
                    <div style="margin-top: 24px; padding: 20px; background-color: #F9F9F9; border-left: 3px solid #2A2A2A;">
                      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; color: #2A2A2A; letter-spacing: 0.08em; text-transform: uppercase;">Parent/Family Inquiry</p>
                      ${parentName ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Name:</strong> ${parentName}</p>` : ''}
                      ${parentRelation ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Relation:</strong> ${parentRelation}</p>` : ''}
                      ${parentEmail ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Email:</strong> <a href="mailto:${parentEmail}" style="color: #2A2A2A; text-decoration: none; border-bottom: 1px solid #CCCCCC;">${parentEmail}</a></p>` : ''}
                      ${parentPhone ? `<p style="margin: 0 0 8px 0; font-size: 15px; color: #4A4A4A;"><strong>Phone:</strong> ${parentPhone}</p>` : ''}
                      ${parentContactPreference ? `<p style="margin: 0; font-size: 15px; color: #4A4A4A;"><strong>Best Contact:</strong> ${parentContactPreference}</p>` : ''}
                    </div>
                    ` : ''}
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 0 0 40px 0;">

              <!-- Event Details -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 600; color: #2A2A2A; letter-spacing: 0.03em;">
                      Event Details
                    </h2>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      ${eventType ? `
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Event Type</p>
                          <p style="margin: 0; font-size: 17px; font-weight: 500; color: #2A2A2A; line-height: 1.5;">${formatEventType(eventType)}${isMultiDay ? ' • Multi-Day' : ''}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${date ? `
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Date</p>
                          <p style="margin: 0; font-size: 17px; font-weight: 500; color: #2A2A2A; line-height: 1.5;">${formatDate(date)}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${location ? `
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Location</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">${location}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${traditionResolved ? `
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Cultural Tradition</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">${traditionResolved}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${guestCount ? `
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Guest Count</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">${guestCount} guests</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${venueName || venueLink ? `
                      <tr>
                        <td>
                          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Venue</p>
                          <p style="margin: 0; font-size: 16px; color: #2A2A2A; line-height: 1.5;">
                            ${venueName || 'To be determined'}
                            ${venueLink ? `<br><a href="${venueLink}" style="color: #2A2A2A; text-decoration: none; border-bottom: 1px solid #CCCCCC; font-size: 14px; margin-top: 4px; display: inline-block;">View Venue →</a>` : ''}
                          </p>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              ${budgetRange ? `
              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 0 0 40px 0;">

              <!-- Investment -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 600; color: #2A2A2A; letter-spacing: 0.03em;">
                      Investment
                    </h2>
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Budget Range</p>
                    <p style="margin: 0; font-size: 20px; font-weight: 500; color: #2A2A2A;">$${budgetRange}</p>
                  </td>
                </tr>
              </table>
              ` : ''}

              ${(filmFeel && filmFeel.length > 0) || howYouMet ? `
              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 0 0 40px 0;">

              <!-- Story & Vision -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 600; color: #2A2A2A; letter-spacing: 0.03em;">
                      Story & Vision
                    </h2>

                    ${filmFeel && filmFeel.length > 0 ? `
                    <div style="margin-bottom: ${howYouMet ? '24px' : '0'};">
                      <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Film Aesthetic</p>
                      <div>
                        ${filmFeel.map((feel) => `<span style="display: inline-block; padding: 6px 14px; margin: 0 8px 8px 0; background-color: #F5F5F5; color: #2A2A2A; font-size: 13px; font-weight: 500; letter-spacing: 0.02em;">${feel}</span>`).join('')}
                      </div>
                    </div>
                    ` : ''}

                    ${howYouMet ? `
                    <div style="padding: 24px; background-color: #FAFAFA; border-left: 2px solid #E8E8E8;">
                      <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">How They Met</p>
                      <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-style: italic; color: #4A4A4A; line-height: 1.7;">
                        ${howYouMet}
                      </p>
                    </div>
                    ` : ''}
                  </td>
                </tr>
              </table>
              ` : ''}

              ${pinterestBoardUrl || otherInspirationLinks ? `
              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 0 0 40px 0;">

              <!-- Inspiration -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 600; color: #2A2A2A; letter-spacing: 0.03em;">
                      Inspiration
                    </h2>

                    ${pinterestBoardUrl ? `
                    <div style="margin-bottom: ${otherInspirationLinks ? '20px' : '0'};">
                      <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">${pinterestBoardTitle || 'Pinterest Board'}</p>
                      <p style="margin: 0;">
                        <a href="${pinterestBoardUrl}" style="color: #2A2A2A; text-decoration: none; border-bottom: 1px solid #CCCCCC; font-size: 15px;">View Board →</a>
                      </p>
                    </div>
                    ` : ''}

                    ${otherInspirationLinks ? `
                    <div>
                      <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: #999999; letter-spacing: 0.08em; text-transform: uppercase;">Other Links</p>
                      <p style="margin: 0; font-size: 15px; color: #4A4A4A; line-height: 1.6;">${otherInspirationLinks}</p>
                    </div>
                    ` : ''}
                  </td>
                </tr>
              </table>
              ` : ''}

              ${additionalNotes ? `
              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #E8E8E8; margin: 0 0 40px 0;">

              <!-- Additional Notes -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 600; color: #2A2A2A; letter-spacing: 0.03em;">
                      Additional Notes
                    </h2>
                    <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-style: italic; color: #4A4A4A; line-height: 1.7;">
                      ${additionalNotes}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 40px 50px; text-align: center; border-top: 1px solid #E8E8E8; background-color: #FAFAFA;">
              <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: 400; color: #2A2A2A; letter-spacing: 0.05em;">
                Love, Violeta Rose — Wedding Films
              </p>
            </td>
          </tr>

        </table>
        <!-- End Main Email Card -->

      </td>
    </tr>
  </table>
  <!-- End Email Container -->

</body>
</html>
  `;
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
