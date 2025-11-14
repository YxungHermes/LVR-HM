# Consultation Form Backend Setup Guide

This guide will walk you through setting up the consultation form backend with Resend email service.

## Overview

The consultation form now sends professional HTML emails via Resend when clients submit inquiries. The email includes:

- ✅ All form data beautifully formatted
- ✅ Conditional sections based on role (couple/planner/parent)
- ✅ Professional HTML template with your brand colors
- ✅ Plain text fallback for email clients
- ✅ Direct reply-to functionality

---

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. **Free tier includes**: 100 emails/day, 3,000 emails/month (perfect for a wedding business!)

---

## 2. Get Your API Key

1. After signing up, go to [API Keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Name it something like "LVR Production" or "Love Violeta Rose"
4. Select **"Full Access"** (or "Sending access" if you prefer)
5. Copy the API key (starts with `re_...`)
6. **IMPORTANT**: Save this key securely - you'll only see it once!

---

## 3. Verify Your Domain (Recommended)

For professional emails from your domain instead of `onboarding@resend.dev`:

### Option A: Use Your Domain (e.g., hello@lovevioletarose.com)

1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click **"Add Domain"**
3. Enter your domain (e.g., `lovevioletarose.com`)
4. Follow the DNS verification steps:
   - Add the provided DNS records to your domain registrar
   - Common registrars: Namecheap, GoDaddy, Cloudflare, etc.
   - Usually takes 5-60 minutes to verify
5. Once verified, you can send from any email on your domain

### Option B: Use Resend's Default (Quick Start)

- Keep using `onboarding@resend.dev` (works immediately, no setup)
- Replies will still go to your email via the `replyTo` header
- **Good for testing**, but less professional for production

---

## 4. Configure Environment Variables

### Local Development (.env.local)

Create a `.env.local` file in the root of your project:

```bash
# Resend Email Service
RESEND_API_KEY=re_YourActualAPIKeyHere
RESEND_FROM_EMAIL=hello@lovevioletarose.com  # Or onboarding@resend.dev for testing
RESEND_TO_EMAIL=violeta@lovevioletarose.com  # Where you want to receive inquiries
```

### Production (Vercel)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these three variables:
   - `RESEND_API_KEY` = `re_YourActualAPIKeyHere`
   - `RESEND_FROM_EMAIL` = `hello@lovevioletarose.com` (or your verified domain)
   - `RESEND_TO_EMAIL` = `violeta@lovevioletarose.com` (where you receive inquiries)
5. Make sure to set the environment to **Production**, **Preview**, and **Development**
6. Redeploy your site after adding variables

---

## 5. Test the Integration

### Local Testing

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/consultation`

3. Fill out the form with test data:
   - Use a real email you control (to test the replyTo)
   - Fill in all required fields
   - Click "Book My Consultation"

4. Check:
   - ✅ Button shows "Sending..." spinner
   - ✅ No error messages
   - ✅ Redirects to `/consultation/success`
   - ✅ Email arrives at `RESEND_TO_EMAIL` address

### Production Testing

After deploying:

1. Go to your live site: `https://yourdomain.com/consultation`
2. Submit a test inquiry
3. Verify email delivery
4. Test the "Reply" button in your email client - should go to the client's email

---

## 6. Email Template Preview

### What You'll Receive

When a client submits the form, you'll get an email that looks like:

**Subject**: `New Consultation Request: John & Jane`

**From**: `hello@lovevioletarose.com` (or your configured sender)

**Content**:
- 🎨 Beautiful HTML template with your brand colors (#A14C41, #E9DDD2, etc.)
- 📋 All form fields organized by section:
  - Contact Information
  - Event Details (with tradition/cultural context)
  - Their Story & Vision
  - Inspiration (Pinterest boards, links)
  - Investment & Notes
- 🏷️ Visual badges for film feel selections
- 📱 Clickable email & phone links
- 🎯 Special highlighting for planner or parent inquiries

### Plain Text Fallback

A clean, organized text version is included for email clients that don't support HTML.

---

## 7. Troubleshooting

### "Failed to submit consultation request"

**Check**:
- ✅ `RESEND_API_KEY` is set correctly (no typos)
- ✅ API key hasn't been revoked
- ✅ Resend account is active

**Fix**: Check browser console and server logs for specific error

---

### Email not arriving

**Check**:
- ✅ `RESEND_TO_EMAIL` is correct
- ✅ Check spam/junk folder
- ✅ Domain is verified (if using custom domain)
- ✅ DNS records are correct (if using custom domain)

**Debug**:
1. Go to [Resend Logs](https://resend.com/emails) to see delivery status
2. Check for bounces or errors

---

### Domain verification stuck

**Common issues**:
- DNS propagation can take up to 48 hours (usually 5-60 minutes)
- Make sure you added records to the correct domain
- Use [DNS Checker](https://dnschecker.org) to verify propagation

**Quick fix**: Use `onboarding@resend.dev` while waiting for verification

---

### Rate limits (100 emails/day on free tier)

**If you exceed**:
- Upgrade to Pro plan ($20/month for 50,000 emails)
- Or use multiple API keys for different environments

---

## 8. Monitoring & Analytics

### View Sent Emails

1. Go to [Resend Dashboard](https://resend.com/emails)
2. See all sent emails, delivery status, opens, clicks
3. Filter by date, status, recipient

### Set Up Webhooks (Optional)

Get notified when emails are delivered, opened, bounced:

1. Go to [Webhooks](https://resend.com/webhooks)
2. Add endpoint URL (you'll need to create an API route)
3. Select events: `email.delivered`, `email.opened`, `email.bounced`

Example webhook endpoint: `/app/api/resend-webhook/route.ts`

---

## 9. Security Best Practices

✅ **Never commit `.env.local`** - Already in `.gitignore`

✅ **Use different API keys for dev/prod** - Create separate keys in Resend

✅ **Rotate keys periodically** - Every 90 days recommended

✅ **Monitor usage** - Check Resend dashboard for suspicious activity

✅ **Validate input** - API route validates required fields

---

## 10. Upgrade Options

### Resend Free Tier
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ 1 domain
- ✅ Email logs (30 days)

### Resend Pro ($20/month)
- ✅ 50,000 emails/month
- ✅ Unlimited domains
- ✅ Email logs (90 days)
- ✅ Priority support
- ✅ Custom IP (for better deliverability)

**For a wedding videography business**: Free tier should be sufficient unless you're getting 100+ inquiries/day (nice problem to have! 🎉)

---

## 11. Alternative Email Services

If you prefer not to use Resend, you can easily swap to:

- **SendGrid** - Similar pricing, more enterprise features
- **Postmark** - Excellent deliverability, slightly more expensive
- **Mailgun** - Good for high volume
- **AWS SES** - Cheapest for high volume, more complex setup

All use similar APIs - just update `/app/api/consultation/route.ts`

---

## 12. Next Steps

After setting up the email backend, consider:

1. **Add to CRM** - Forward emails to Dubsado, HoneyBook, etc.
2. **Auto-responder** - Send confirmation email to client
3. **Slack notifications** - Get instant notifications
4. **Database logging** - Store submissions in Supabase/Firebase
5. **Analytics** - Track conversion rates

---

## Support

**Resend Docs**: https://resend.com/docs
**Resend Status**: https://status.resend.com
**Community**: https://resend.com/discord

---

## Summary Checklist

- [ ] Create Resend account
- [ ] Get API key
- [ ] (Optional) Verify custom domain
- [ ] Add environment variables locally (`.env.local`)
- [ ] Add environment variables to Vercel
- [ ] Test form submission locally
- [ ] Deploy to production
- [ ] Test form submission in production
- [ ] Verify email delivery
- [ ] Check spam folder settings
- [ ] Done! 🎉

---

**Estimated setup time**: 15-30 minutes (domain verification adds 5-60 minutes)
