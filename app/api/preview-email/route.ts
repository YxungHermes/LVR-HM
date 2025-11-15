import { NextRequest, NextResponse } from "next/server";

/**
 * Preview email template in browser without sending
 * Visit: /api/preview-email in your browser
 */
export async function GET(request: NextRequest) {
  // Comprehensive test data - everything filled out
  const testData = {
    partner1: "Sofia",
    partner2: "Alessandro",
    email: "sofia.alessandro@example.com",
    phone: "(212) 555-0198",
    role: "couple",
    eventType: "destination",
    date: "2025-09-20",
    location: "Amalfi Coast, Italy",
    traditionResolved: "Italian & Greek Orthodox",
    guestCount: "85",
    venueName: "Villa Cimbrone",
    venueLink: "https://villacimbrone.com",
    isMultiDay: true,
    howYouMet: "We met during a summer art workshop in Florence. Alessandro was teaching watercolor techniques, and I was completely captivated—not just by his talent, but by the way he saw beauty in everything around him. After class, we spent hours wandering the city, and by sunset at Piazzale Michelangelo, we both knew something special had begun.",
    filmFeel: ["Cinematic", "Editorial", "Romantic", "Timeless"],
    budgetRange: "12,000-15,000",
    contactPreference: "Email",
    pinterestBoardUrl: "https://pinterest.com/sofiaandalessandro/amalfi-coast-wedding",
    pinterestBoardTitle: "Our Amalfi Coast Dream",
    otherInspirationLinks: "https://www.instagram.com/amalficoastweddings/\\nhttps://www.stylemepretty.com/italy-weddings",
    additionalNotes: "We're planning an intimate, three-day celebration starting with a welcome dinner at a local trattoria, followed by the ceremony at Villa Cimbrone, and ending with a farewell brunch on a private yacht. We want the film to capture not just the big moments, but the quiet, in-between ones—the laughter over limoncello, the golden hour light on the cliffs, and the way our families from two cultures come together as one.",
  };

  // Generate HTML
  const html = generateEmailPreview(testData);

  // Return HTML directly
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

function generateEmailPreview(data: any): string {
  const {
    partner1,
    partner2,
    email,
    phone,
    role,
    eventType,
    date,
    location,
    traditionResolved,
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

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Preview: Consultation Request</title>
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
                        ${filmFeel.map((feel: string) => `<span style="display: inline-block; padding: 6px 14px; margin: 0 8px 8px 0; background-color: #F5F5F5; color: #2A2A2A; font-size: 13px; font-weight: 500; letter-spacing: 0.02em;">${feel}</span>`).join('')}
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
</html>`;
}

// Helper functions
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
