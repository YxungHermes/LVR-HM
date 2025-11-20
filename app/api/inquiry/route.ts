import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { sanitizeObject, isValidEmail } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rateLimit";

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
            'Retry-After': '900',
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
    if (!body.name || !body.email || !body.date || !body.location || !body.eventType || !body.message) {
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

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Build email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #F4697E 0%, #E63E58 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">New Inquiry</h1>
          </div>

          <div style="background: #ffffff; padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #2C1810; margin-top: 0; font-size: 22px;">Contact Information</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}" style="color: #F4697E;">${body.email}</a></p>
            ${body.phone ? `<p><strong>Phone:</strong> <a href="tel:${body.phone}" style="color: #F4697E;">${body.phone}</a></p>` : ''}

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <h2 style="color: #2C1810; font-size: 22px;">Event Details</h2>
            <p><strong>Event Type:</strong> ${formatEventType(body.eventType)}</p>
            <p><strong>Date:</strong> ${new Date(body.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
            <p><strong>Location:</strong> ${body.location}</p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <h2 style="color: #2C1810; font-size: 22px;">Message</h2>
            <p style="white-space: pre-wrap;">${body.message}</p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <p style="color: #666; font-size: 14px; text-align: center;">
              Sent from Weddings by Michael Andrade website inquiry form
            </p>
          </div>
        </body>
      </html>
    `;

    const emailText = `
NEW INQUIRY

Contact Information:
Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ''}

Event Details:
Event Type: ${formatEventType(body.eventType)}
Date: ${new Date(body.date).toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}
Location: ${body.location}

Message:
${body.message}

---
Sent from Weddings by Michael Andrade website inquiry form
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || body.email,
      replyTo: body.email,
      subject: `New Inquiry: ${body.name} - ${formatEventType(body.eventType)}`,
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

    console.log("✅ Inquiry email sent successfully:", data?.id);

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("❌ Inquiry API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function formatEventType(eventType: string): string {
  const types: Record<string, string> = {
    elopements: "Elopement / Intimate Gathering",
    weddingDay: "Full Wedding Day",
    destination: "Destination Wedding",
    adventure: "Adventure Session",
    custom: "Not sure yet / Custom",
  };
  return types[eventType] || eventType;
}
