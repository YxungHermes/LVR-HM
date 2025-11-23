# 🎯 Complete Stripe Payment Integration Setup Guide

This guide walks you through setting up the complete Stripe payment system for the videography booking platform.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Stripe Account Setup](#stripe-account-setup)
3. [Environment Variables](#environment-variables)
4. [Database Setup](#database-setup)
5. [Email Template Setup](#email-template-setup)
6. [Webhook Configuration](#webhook-configuration)
7. [Testing the Payment Flow](#testing-the-payment-flow)
8. [Going Live](#going-live)
9. [Monitoring & Alerts](#monitoring--alerts)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- [x] A Stripe account (test mode for development)
- [x] Supabase project set up with CRM tables
- [x] Resend account for email delivery
- [x] Vercel account for deployment
- [x] Access to your domain's DNS settings (for production)

---

## Stripe Account Setup

### 1. Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete your business profile
3. Enable **Test Mode** (toggle in the top right)

### 2. Get Your API Keys

**For Development/Testing:**
1. Navigate to **Developers → API keys**
2. Copy your **Publishable key** (`pk_test_...`)
3. Click **Reveal test key** and copy your **Secret key** (`sk_test_...`)

**For Production:**
1. Complete Stripe account verification
2. Switch to **Live mode**
3. Get your live keys (`pk_live_...` and `sk_live_...`)

---

## Environment Variables

### Required Environment Variables

Add these to your `.env.local` (local development) and Vercel (production):

```bash
# =============================================================================
# Stripe Payment Processing
# =============================================================================

# Stripe Secret Key (get from https://dashboard.stripe.com/apikeys)
# ⚠️ NEVER expose this key in client-side code!
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx

# Stripe Publishable Key (public key, safe for client-side)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

# Stripe Webhook Secret (for verifying webhook events)
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx

# Site URL (for Stripe redirect URLs)
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Change in production

# =============================================================================
# Supabase CRM (Required for payment tracking)
# =============================================================================

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# =============================================================================
# Resend Email (Required for booking confirmations)
# =============================================================================

RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=bookings@yourdomain.com
```

### Setting Environment Variables in Vercel

1. Go to your Vercel project → **Settings → Environment Variables**
2. Add each variable
3. Select environments: **Production**, **Preview**, **Development**
4. Click **Save**

---

## Database Setup

### 1. Verify Supabase Tables Exist

Ensure these tables are created in your Supabase project:

- ✅ `leads` - Stores customer information and booking status
- ✅ `lead_activities` - Tracks all interactions and payments
- ✅ `email_templates` - Stores email templates

### 2. Add Booking Confirmation Email Template

Run this SQL in your **Supabase SQL Editor**:

```sql
-- See: docs/sql/booking-confirmation-email-template.sql
-- Copy and paste the entire file contents into Supabase SQL Editor
```

Or manually insert via Supabase dashboard:
1. Go to **Table Editor → email_templates**
2. Click **Insert row**
3. Fill in the template data from the SQL file

### 3. Verify Database Permissions

The Supabase service role key must have permissions to:
- Insert/update `leads` table
- Insert into `lead_activities` table
- Read from `email_templates` table

---

## Email Template Setup

### Option 1: Use Database Templates (Recommended)

The system uses the `email_templates` table in Supabase. Run the SQL migration:

```bash
# Execute in Supabase SQL Editor
docs/sql/booking-confirmation-email-template.sql
```

### Option 2: Customize Email Content

Edit the template in Supabase:
1. Go to **email_templates** table
2. Find `booking_confirmation` template
3. Customize `subject`, `body_html`, and `body_text`
4. Available variables:
   - `{{partner1_name}}`
   - `{{partner2_name}}`
   - `{{wedding_date}}`
   - `{{deposit_amount}}`
   - `{{package_name}}`

---

## Webhook Configuration

### Why Webhooks are Critical

Webhooks verify payments **server-side** to prevent fraud. Never trust client-side redirects alone!

### 1. Set Up Webhook Endpoint

#### For Local Development (using Stripe CLI)

```bash
# Install Stripe CLI
brew install stripe/stripe-brew/stripe  # macOS
# or download from https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Copy the webhook signing secret (whsec_...) to .env.local
```

#### For Production

1. Go to **Stripe Dashboard → Developers → Webhooks**
2. Click **Add endpoint**
3. Enter endpoint URL: `https://yourdomain.com/api/stripe/webhook`
4. Select events to listen for:
   - ✅ `checkout.session.completed`
   - ✅ `checkout.session.expired`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
   - ✅ `charge.refunded`
   - ✅ `charge.dispute.created`
5. Click **Add endpoint**
6. Click **Reveal** under "Signing secret"
7. Copy the webhook secret (`whsec_...`)
8. Add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

### 2. Verify Webhook is Working

**Test in Stripe Dashboard:**
1. Go to **Webhooks → Your endpoint**
2. Click **Send test webhook**
3. Select event: `checkout.session.completed`
4. Click **Send test webhook**
5. Check that you see `200 OK` response

**Check Logs:**
```bash
# Vercel
vercel logs --follow

# Or check Vercel dashboard → Deployments → Functions
```

---

## Testing the Payment Flow

### 1. Test Checkout Flow

#### Using Stripe Test Cards

Stripe provides test card numbers that simulate different scenarios:

**Successful Payment:**
```
Card Number: 4242 4242 4242 4242
Expiry: Any future date (e.g., 12/34)
CVC: Any 3 digits (e.g., 123)
ZIP: Any 5 digits (e.g., 12345)
```

**Declined Payment:**
```
Card Number: 4000 0000 0000 0002
```

**Requires Authentication (3D Secure):**
```
Card Number: 4000 0025 0000 3155
```

[Full test card list](https://stripe.com/docs/testing#cards)

### 2. Complete End-to-End Test

1. **Start Checkout:**
   - Go to `https://yourdomain.com/reserve`
   - Select a package
   - Fill in name: "John & Jane Doe"
   - Email: "test@example.com"
   - Wedding date: Future date
   - Click "Continue to Payment"

2. **Complete Payment:**
   - Enter test card: `4242 4242 4242 4242`
   - Complete checkout on Stripe

3. **Verify Success:**
   - ✅ Redirected to `/booking/success`
   - ✅ Check Supabase: Lead created/updated with status `booked`
   - ✅ Check Supabase: Payment activity logged in `lead_activities`
   - ✅ Check email: Confirmation email sent to test@example.com
   - ✅ Check Stripe Dashboard: Payment appears in Payments list

4. **Test Cancellation:**
   - Start checkout again
   - Click "Back" or close Stripe checkout
   - ✅ Should redirect to `/booking/cancel`

### 3. Test Webhook Events

#### Using Stripe CLI (Local)

```bash
# Trigger different events
stripe trigger checkout.session.completed
stripe trigger payment_intent.payment_failed
stripe trigger charge.dispute.created
```

#### Using Stripe Dashboard (Production)

1. Go to **Webhooks → Your endpoint → Send test webhook**
2. Select different event types
3. Check logs to verify they're being processed

---

## Going Live

### Pre-Launch Checklist

Before switching to live mode:

- [ ] ✅ All Stripe test transactions successful
- [ ] ✅ Webhook endpoint verified (200 OK responses)
- [ ] ✅ Email confirmations being sent
- [ ] ✅ Lead data being saved to Supabase
- [ ] ✅ Production environment variables set in Vercel
- [ ] ✅ SSL certificate valid (HTTPS only)
- [ ] ✅ Stripe account fully verified
- [ ] ✅ Bank account connected for payouts

### Switch to Live Mode

1. **Update Stripe Keys:**
   - Get live keys from Stripe Dashboard (Live mode)
   - Update `STRIPE_SECRET_KEY` in Vercel to `sk_live_...`
   - Update `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to `pk_live_...`

2. **Update Webhook:**
   - Create new webhook endpoint in Live mode
   - Copy new `STRIPE_WEBHOOK_SECRET` (different from test mode!)
   - Update in Vercel environment variables

3. **Test with Real Card:**
   - Use a real credit card (you can refund immediately)
   - Verify entire flow works
   - Refund the test transaction

4. **Monitor First Transactions:**
   - Watch Vercel logs for first few real bookings
   - Check Stripe Dashboard for successful payments
   - Verify customers receive emails

---

## Monitoring & Alerts

### What to Monitor

1. **Webhook Delivery:**
   - Go to **Stripe Dashboard → Webhooks → Your endpoint**
   - Check "Latest attempts" for failures
   - All should show `200` status code

2. **Failed Payments:**
   - Go to **Stripe Dashboard → Payments**
   - Filter by "Failed"
   - Investigate patterns (e.g., specific card types)

3. **Email Delivery:**
   - Check Resend dashboard for delivery rates
   - Monitor bounce rates
   - Set up Resend webhooks for failures

### Setting Up Alerts

#### Vercel Log Alerts

```bash
# Monitor for errors in production
vercel logs --follow | grep "ERROR\|❌\|🚨"
```

#### Stripe Email Alerts

1. Go to **Stripe Dashboard → Settings → Notifications**
2. Enable notifications for:
   - Failed payments
   - Disputes
   - Refunds

#### Supabase Monitoring

Set up a cron job to check for:
- Payments that succeeded in Stripe but failed to update Supabase
- Webhook events that weren't processed

---

## Troubleshooting

### Common Issues

#### 1. Webhook Signature Verification Failed

**Error:** `Invalid signature`

**Causes:**
- Wrong `STRIPE_WEBHOOK_SECRET` in environment variables
- Using test webhook secret in production (or vice versa)
- Request body was modified before reaching webhook handler

**Solutions:**
- Verify webhook secret matches the endpoint in Stripe Dashboard
- Check that you're using the correct mode (test vs live)
- Ensure no middleware is modifying the request body

#### 2. Payment Succeeds but Lead Not Updated

**Symptoms:**
- Payment shows in Stripe
- Customer redirected to success page
- No lead in Supabase

**Causes:**
- Webhook not firing
- `lead_id` not in session metadata
- Supabase permissions issue

**Solutions:**
```bash
# Check webhook logs in Stripe Dashboard
# Check Vercel function logs
vercel logs --follow

# Verify lead_id is in session metadata
# Check Supabase service role key permissions
```

#### 3. Confirmation Email Not Sent

**Symptoms:**
- Payment successful
- Lead updated
- No email received

**Causes:**
- Resend API key invalid
- Email template not found in database
- Email in spam folder

**Solutions:**
1. Check Resend dashboard for delivery status
2. Verify template exists:
   ```sql
   SELECT * FROM email_templates WHERE template_type = 'booking_confirmation';
   ```
3. Check spam/junk folder
4. Test email sending:
   ```bash
   # In your app, call sendAutomatedEmail directly
   ```

#### 4. Rate Limiting Blocking Legitimate Users

**Symptoms:**
- Users getting "Too many requests" error
- Haven't actually made 5 requests

**Solutions:**
- Increase rate limit in `app/api/stripe/create-checkout/route.ts`
- Implement Redis-based rate limiting (see STRIPE-SECURITY.md)
- Whitelist specific IPs (for testing)

#### 5. Checkout Session Expiring Too Quickly

**Symptoms:**
- Users reporting "Session expired" errors
- Haven't completed payment

**Cause:**
- Stripe checkout sessions expire after 24 hours by default
- User left page open too long

**Solution:**
- Educate users to complete payment promptly
- Send reminder emails for abandoned carts

---

## Testing Checklist

Before marking payment system as production-ready:

### Functional Tests
- [ ] ✅ Can create checkout session successfully
- [ ] ✅ Can complete payment with test card
- [ ] ✅ Success page displays correctly
- [ ] ✅ Cancel page displays correctly
- [ ] ✅ Lead created in Supabase
- [ ] ✅ Payment activity logged
- [ ] ✅ Confirmation email sent
- [ ] ✅ Email contains correct information

### Security Tests
- [ ] ✅ Rate limiting works (blocked after 5 requests)
- [ ] ✅ CSRF protection works (blocked from different origin)
- [ ] ✅ Input validation works (XSS attempts blocked)
- [ ] ✅ Amount manipulation prevented (server-side pricing only)
- [ ] ✅ Webhook signature verification works
- [ ] ✅ Invalid webhook requests rejected

### Error Handling Tests
- [ ] ✅ Failed payment handled gracefully
- [ ] ✅ Expired session handled correctly
- [ ] ✅ Network errors don't crash app
- [ ] ✅ Supabase failures don't block checkout
- [ ] ✅ Email failures don't block confirmation

### Edge Cases
- [ ] ✅ Multiple bookings from same email
- [ ] ✅ Special characters in names handled
- [ ] ✅ International characters supported
- [ ] ✅ Long names don't break layout
- [ ] ✅ Past wedding dates rejected
- [ ] ✅ Dates >5 years in future rejected

---

## Next Steps

After completing setup:

1. **Review Security Documentation**
   - Read `docs/STRIPE-SECURITY.md`
   - Understand all security layers
   - Know how to respond to incidents

2. **Set Up Monitoring**
   - Configure log aggregation
   - Set up error alerts
   - Monitor webhook delivery rates

3. **Create Runbook**
   - Document common issues and solutions
   - Create escalation procedures
   - Train team on payment system

4. **Plan for Scale**
   - Consider upgrading rate limiting to Redis
   - Plan for high-traffic events
   - Set up CDN for static assets

---

## Support Resources

- **Stripe Documentation:** https://stripe.com/docs
- **Stripe Support:** https://support.stripe.com
- **Supabase Docs:** https://supabase.com/docs
- **Resend Docs:** https://resend.com/docs
- **Vercel Docs:** https://vercel.com/docs

---

**Last Updated:** 2025-11-23
**Version:** 1.0
**Status:** ✅ Production Ready
