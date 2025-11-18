import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Simple test endpoint to verify Resend email configuration
 * Visit: /api/test-email in your browser
 */
export async function GET(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          status: "error",
          message: "RESEND_API_KEY is not configured in environment variables",
          hint: "Add it in Vercel project settings → Environment Variables",
        },
        { status: 500 }
      );
    }

    // Check FROM and TO emails
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.RESEND_TO_EMAIL || "not-set@example.com";

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send test email
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "🧪 Test Email from Love Stories by Michael Andrade",
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: sans-serif; padding: 40px; background: #FAF7F2;">
          <div style="max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px;">
            <h1 style="color: #A14C41; margin-top: 0;">✅ Email Configuration Working!</h1>
            <p>This is a test email from your Love Stories by Michael Andrade consultation form backend.</p>
            <hr style="border: none; border-top: 1px solid #E9DDD2; margin: 20px 0;">
            <p><strong>From:</strong> ${fromEmail}</p>
            <p><strong>To:</strong> ${toEmail}</p>
            <p><strong>API Key:</strong> ${process.env.RESEND_API_KEY.substring(0, 10)}...</p>
            <hr style="border: none; border-top: 1px solid #E9DDD2; margin: 20px 0;">
            <p style="font-size: 14px; color: #7B6A5A;">
              If you received this email, your Resend integration is working correctly!
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
Email Configuration Working!

This is a test email from your Love Stories by Michael Andrade consultation form backend.

From: ${fromEmail}
To: ${toEmail}
API Key: ${process.env.RESEND_API_KEY.substring(0, 10)}...

If you received this email, your Resend integration is working correctly!
      `,
    });

    if (error) {
      return NextResponse.json(
        {
          status: "error",
          message: "Resend API returned an error",
          error: error,
          config: {
            from: fromEmail,
            to: toEmail,
            apiKeyPrefix: process.env.RESEND_API_KEY.substring(0, 10),
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "success",
      message: "Test email sent successfully!",
      emailId: data?.id,
      sentFrom: fromEmail,
      sentTo: toEmail,
      instructions: [
        "1. Check your inbox at: " + toEmail,
        "2. Check spam/junk folder if not in inbox",
        "3. Check Resend dashboard: https://resend.com/emails",
        "4. If delivered, your consultation form should work!",
      ],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "Unexpected error occurred",
        error: error.message,
      },
      { status: 500 }
      );
  }
}
