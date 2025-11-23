-- Booking Confirmation Email Template
-- Run this SQL in your Supabase SQL Editor to add the booking confirmation email template

INSERT INTO email_templates (
  name,
  subject,
  body_html,
  body_text,
  template_type,
  is_active,
  variables
) VALUES (
  'Booking Confirmation - Deposit Received',
  '🎉 Your Wedding Date is Reserved! Next Steps Inside',
  '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Booking is Confirmed!</title>
  <style>
    body { font-family: Georgia, serif; line-height: 1.6; color: #2d2d2d; background-color: #f5f5f0; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background: linear-gradient(135deg, #c7a17a 0%, #a88365 100%); padding: 40px 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 32px; font-weight: normal; }
    .content { padding: 40px 30px; }
    .success-icon { text-align: center; margin-bottom: 30px; }
    .success-icon div { width: 80px; height: 80px; background-color: #22c55e; border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 48px; color: white; }
    .payment-details { background-color: #f5f5f0; border-left: 4px solid #c7a17a; padding: 20px; margin: 30px 0; }
    .payment-details p { margin: 8px 0; }
    .payment-details strong { color: #8b4513; }
    .next-steps { margin: 30px 0; }
    .next-steps h2 { color: #8b4513; border-bottom: 2px solid #c7a17a; padding-bottom: 10px; }
    .step { margin: 20px 0; padding-left: 35px; position: relative; }
    .step::before { content: "✓"; position: absolute; left: 0; color: #22c55e; font-weight: bold; font-size: 20px; }
    .cta { text-align: center; margin: 40px 0; }
    .cta a { display: inline-block; background-color: #8b4513; color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; letter-spacing: 1px; }
    .footer { background-color: #f5f5f0; padding: 30px 20px; text-align: center; font-size: 14px; color: #666; }
    .footer a { color: #8b4513; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎥 Your Date is Reserved!</h1>
    </div>

    <div class="content">
      <div class="success-icon">
        <div>✓</div>
      </div>

      <p style="font-size: 18px; text-align: center; margin-bottom: 30px;">
        Hi {{partner1_name}}{{#if partner2_name}} & {{partner2_name}}{{/if}},
      </p>

      <p>
        <strong>Congratulations!</strong> Your wedding film reservation is now confirmed. We're absolutely thrilled to be filming your {{wedding_date}} wedding!
      </p>

      <div class="payment-details">
        <p><strong>Payment Received:</strong> ${{deposit_amount}} (50% deposit)</p>
        <p><strong>Package:</strong> {{package_name}}</p>
        <p><strong>Wedding Date:</strong> {{wedding_date}}</p>
        <p><strong>Status:</strong> ✅ Date Reserved & Locked In</p>
      </div>

      <div class="next-steps">
        <h2>What Happens Next?</h2>

        <div class="step">
          <strong>Check Your Inbox (Within 24 Hours)</strong><br>
          You'll receive a detailed welcome packet with:<br>
          • Your full contract and booking details<br>
          • A wedding questionnaire to capture your vision<br>
          • Timeline planning resources
        </div>

        <div class="step">
          <strong>Fill Out Your Questionnaire</strong><br>
          Tell us about your love story, must-have moments, timeline, and creative vision. This helps us craft a film that's uniquely yours.
        </div>

        <div class="step">
          <strong>Pre-Wedding Consultation Call</strong><br>
          We'll schedule a call 2-3 months before your wedding to finalize details, review your shot list, and coordinate with your other vendors.
        </div>

        <div class="step">
          <strong>Final Payment Reminder</strong><br>
          The remaining 50% balance (${{deposit_amount}}) is due 30 days before your wedding. We'll send you a payment link when it's time.
        </div>

        <div class="step">
          <strong>Your Wedding Day!</strong><br>
          We'll arrive on time, capture every beautiful moment, and deliver your film 8-12 weeks after your big day.
        </div>
      </div>

      <p style="background-color: #fff9e6; border: 1px solid #ffd700; padding: 15px; border-radius: 8px; margin: 30px 0;">
        <strong>📌 Quick Reminder:</strong> Your deposit secures your date exclusively. If you don't receive our welcome email within 24 hours, check your spam folder or email us at <a href="mailto:contact@violetarose.com">contact@violetarose.com</a>
      </p>

      <div class="cta">
        <a href="https://michael-andrade.com/films">WATCH MORE FILMS</a>
      </div>

      <p style="text-align: center; color: #666; font-size: 14px; margin-top: 40px;">
        Questions? Just reply to this email or reach out anytime at<br>
        <a href="mailto:contact@violetarose.com" style="color: #8b4513;">contact@violetarose.com</a>
      </p>
    </div>

    <div class="footer">
      <p><strong>Violeta Rose Videography</strong></p>
      <p>Cinematic Wedding Films | Southern California & Destination</p>
      <p>
        <a href="https://michael-andrade.com">Website</a> |
        <a href="https://instagram.com/violetarosevideography">Instagram</a> |
        <a href="mailto:contact@violetarose.com">Email</a>
      </p>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This email was sent because you just reserved your wedding date with us. If you believe this was sent in error, please contact us immediately.
      </p>
    </div>
  </div>
</body>
</html>',
  'Hi {{partner1_name}}{{#if partner2_name}} & {{partner2_name}}{{/if}},

🎉 CONGRATULATIONS! YOUR DATE IS RESERVED!

We''re absolutely thrilled to be filming your {{wedding_date}} wedding!

PAYMENT RECEIVED
• Amount: ${{deposit_amount}} (50% deposit)
• Package: {{package_name}}
• Wedding Date: {{wedding_date}}
• Status: ✅ Date Reserved & Locked In

WHAT HAPPENS NEXT?

1. CHECK YOUR INBOX (Within 24 Hours)
You'll receive a detailed welcome packet with your contract, questionnaire, and timeline resources.

2. FILL OUT YOUR QUESTIONNAIRE
Tell us about your love story, must-have moments, and creative vision.

3. PRE-WEDDING CONSULTATION CALL
We''ll schedule a call 2-3 months before your wedding to finalize all details.

4. FINAL PAYMENT REMINDER
The remaining 50% balance (${{deposit_amount}}) is due 30 days before your wedding.

5. YOUR WEDDING DAY!
We'll capture every moment and deliver your film 8-12 weeks after.

QUICK REMINDER: Your deposit secures your date exclusively. If you don''t receive our welcome email within 24 hours, check spam or email us.

Questions? Reply to this email or contact us at:
contact@violetarose.com

Best regards,
Violeta Rose Videography

---
Cinematic Wedding Films | Southern California & Destination
Website: https://michael-andrade.com
Instagram: @violetarosevideography',
  'booking_confirmation',
  true,
  ARRAY['partner1_name', 'partner2_name', 'wedding_date', 'deposit_amount', 'package_name']
);

-- Verify the template was created
SELECT id, name, template_type, is_active
FROM email_templates
WHERE template_type = 'booking_confirmation';
