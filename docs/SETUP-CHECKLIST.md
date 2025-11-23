# 🚀 Setup Checklist - CRM & Payment System

Your custom CRM and Stripe payment system is built! Follow this checklist to get everything configured and running.

---

## 📋 Overview

You have a complete system with:
- ✅ **Custom CRM** - Lead management, notes, activities, automated emails
- ✅ **Email Automation** - Client confirmations, follow-ups, status-based workflows
- ✅ **Stripe Payments** - "Reserve Your Date" booking flow with 50% deposits
- ✅ **Admin Dashboard** - View leads, add notes, track pipeline
- ✅ **Strategic CTAs** - Paired CTAs throughout site guiding visitors to book

**What's Left:** Configure the external services (Supabase, Stripe) and connect them.

---

## ⚡ Quick Start (30 minutes)

### Step 1: Set Up Supabase (10 minutes)

**What is Supabase?** Your database where all leads, notes, and email templates are stored.

1. **Create a Supabase Account**
   - Go to https://supabase.com
   - Sign up with GitHub (recommended) or email
   - Click "New Project"
   - Choose organization name: `Love Violeta Rose` (or your preference)
   - Project name: `lvr-crm`
   - Database password: Generate a strong password and **SAVE IT SECURELY**
   - Region: Choose closest to you (e.g., `US East` if you're in NYC)
   - Click "Create new project" (takes 2-3 minutes)

2. **Run Database Migration**
   - Once project is ready, click "SQL Editor" in left sidebar
   - Click "New query"
   - Open `/supabase/migrations/001_create_crm_tables.sql` from your codebase
   - Copy the ENTIRE file contents
   - Paste into Supabase SQL Editor
   - Click "Run" (bottom right)
   - You should see "Success. No rows returned"

3. **Get Your API Keys**
   - Click "Settings" (gear icon) in left sidebar
   - Click "API" under Project Settings
   - Copy these two values:
     - **Project URL** (looks like `https://xxxxx.supabase.co`)
     - **anon public** key (the one labeled "anon public")
     - Click "Reveal" next to **service_role** key and copy it too

4. **Add to Vercel Environment Variables**
   - Go to https://vercel.com
   - Open your project
   - Go to Settings → Environment Variables
   - Add these three variables (for Production, Preview, Development):
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
     SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
     ```

5. **Verify It Works**
   - Go back to Supabase
   - Click "Table Editor" in left sidebar
   - You should see: `leads`, `lead_notes`, `lead_activities`, `email_templates`
   - ✅ Database is ready!

---

### Step 2: Set Up Stripe (10 minutes)

**What is Stripe?** Your payment processor for accepting deposits and final payments.

1. **Create a Stripe Account**
   - Go to https://stripe.com
   - Click "Start now" → Sign up
   - Business name: `Love, Violeta Rose` (or your business name)
   - Complete account setup (they'll ask for business details)
   - **Note:** You can test in "Test Mode" before going live

2. **Get Your API Keys**
   - In Stripe Dashboard, click "Developers" (top right)
   - Click "API keys"
   - You'll see two keys:
     - **Publishable key** (starts with `pk_test_`)
     - **Secret key** (starts with `sk_test_`, click "Reveal")
   - Copy both keys

3. **Add to Vercel Environment Variables**
   - Go back to Vercel → Your Project → Settings → Environment Variables
   - Add these two variables:
     ```
     STRIPE_SECRET_KEY=sk_test_your_secret_key_here
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
     ```

4. **Test Payment Flow**
   - Once deployed, go to `/reserve` on your site
   - Select a package, fill out the form
   - Use Stripe test card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/34)
   - CVC: Any 3 digits (e.g., 123)
   - ZIP: Any 5 digits (e.g., 12345)
   - Complete payment → You should see success page with confetti! 🎉

5. **Switch to Live Mode (when ready)**
   - In Stripe Dashboard, toggle "Test mode" to OFF (top right)
   - Go to Developers → API keys
   - Copy your LIVE keys (start with `pk_live_` and `sk_live_`)
   - Update Vercel environment variables with live keys
   - ✅ You're now accepting real payments!

---

### Step 3: Configure Additional Settings (5 minutes)

1. **Add Site URL**
   - Vercel → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
   - This ensures payment redirects work correctly

2. **Add CRON Secret (for automated follow-ups)**
   - Generate a random string at https://randomkeygen.com/
   - Copy a "CodeIgniter Encryption Key" (long random string)
   - Vercel → Environment Variables
   - Add: `CRON_SECRET=your-random-string-here`

3. **Update Contact Email (Optional)**
   - Open `/app/booking/success/page.tsx`
   - Line 133: Change `consultation@yourdomain.com` to your real email
   - Commit and push the change

---

### Step 4: Set Up Email Templates (5 minutes)

1. **Go to Supabase Table Editor**
   - Click "Table Editor" → `email_templates`
   - You'll see 4 pre-created templates

2. **Customize Templates (Optional)**
   - Click on any row to edit
   - Available variables you can use:
     - `{{partner1_name}}` - First partner's name
     - `{{partner2_name}}` - Second partner's name
     - `{{wedding_date}}` - Their wedding date
     - `{{email}}` - Their email
   - Edit subject and body as desired
   - Click Save

3. **Most Important Templates to Review:**
   - **client_confirmation** - Sent immediately after consultation form
   - **24h_followup** - Sent 24 hours after initial contact
   - Edit these to match your brand voice

---

## 🎯 Testing Your Complete System

### Test 1: Consultation Form → CRM → Email
1. Go to `/consultation` on your live site
2. Fill out the consultation form
3. Submit it
4. **Expected Results:**
   - ✅ Form submission succeeds
   - ✅ Check your email - you should receive confirmation
   - ✅ Go to `/admin` - you should see the new lead
   - ✅ Click on the lead - see notes and activities

### Test 2: Reserve Your Date → Stripe Payment
1. Go to `/reserve` on your site
2. Select a package (e.g., "Wedding Day Films")
3. Fill in name, email, wedding date
4. Click "Continue to Payment"
5. **In Test Mode:** Use card `4242 4242 4242 4242`
6. Complete payment
7. **Expected Results:**
   - ✅ Redirected to success page with confetti
   - ✅ Email confirmation from Stripe
   - ✅ Check Stripe Dashboard → Payments (should see the transaction)

### Test 3: Admin Dashboard
1. Go to `/admin`
2. **Expected Results:**
   - ✅ See pipeline stats (total leads, new, contacted, etc.)
   - ✅ Filter by status
   - ✅ Search for a lead by name
   - ✅ Click on a lead → see details, notes, activities
   - ✅ Add a note → see it appear in activity timeline

---

## 🔧 Advanced Setup (Optional)

### Enable Automated Follow-Ups with Vercel Cron

**What does this do?** Automatically sends follow-up emails at scheduled times (e.g., 24 hours after consultation).

1. **Create `vercel.json` in your project root:**
   ```json
   {
     "crons": [
       {
         "path": "/api/cron/follow-ups",
         "schedule": "0 */6 * * *"
       }
     ]
   }
   ```
   This runs every 6 hours to check for scheduled follow-ups.

2. **Commit and deploy:**
   ```bash
   git add vercel.json
   git commit -m "Add cron job for automated follow-ups"
   git push origin claude/add-consultation-info-017wReSeYnBAXF5wGm7TYj1q
   ```

3. **Verify in Vercel:**
   - Vercel Dashboard → Your Project → Settings → Cron Jobs
   - You should see your cron job listed

### Add Stripe Webhook (Future Enhancement)

**Why?** Automatically update CRM when payments succeed.

1. **In Stripe Dashboard:**
   - Developers → Webhooks
   - Click "Add endpoint"
   - Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   - Events to send: `checkout.session.completed`
   - Click "Add endpoint"
   - Copy the "Signing secret" (starts with `whsec_`)

2. **Add to Vercel:**
   - Environment Variables
   - Add: `STRIPE_WEBHOOK_SECRET=whsec_your_secret_here`

3. **Create the webhook handler** (we can do this next if you want)

---

## 📧 Email Configuration Tips

### Resend (Current Setup)
- You're using Resend for transactional emails
- Check your `.env.example` for configuration
- If emails aren't sending, verify `RESEND_API_KEY` is set in Vercel

### Email Deliverability
- **For Testing:** Use your personal email as recipient
- **For Production:**
  1. Set up a custom domain in Resend (e.g., `mail.yourdomain.com`)
  2. Add DNS records (Resend provides these)
  3. This improves deliverability and looks professional

---

## ✅ Final Checklist

Before you go live, verify:

- [ ] Supabase project created and database migrated
- [ ] Supabase environment variables added to Vercel
- [ ] Stripe account created (test mode working)
- [ ] Stripe environment variables added to Vercel
- [ ] Test payment with `4242 4242 4242 4242` succeeds
- [ ] Consultation form submits successfully
- [ ] Email confirmation received after consultation
- [ ] Lead appears in `/admin` dashboard
- [ ] Can add notes to leads
- [ ] Site URL environment variable set
- [ ] CRON secret configured
- [ ] Contact email updated in success page
- [ ] Email templates reviewed and customized
- [ ] (Optional) Vercel cron job configured
- [ ] Ready to switch Stripe to live mode

---

## 🚨 Troubleshooting

### "Supabase is not configured" error
- **Cause:** Environment variables not set in Vercel
- **Fix:** Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- **Verify:** Redeploy after adding env vars

### "Stripe is not configured" error
- **Cause:** Stripe keys missing
- **Fix:** Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Note:** Keys must start with `sk_` and `pk_`

### Emails not sending
- **Check 1:** Is `RESEND_API_KEY` set in Vercel?
- **Check 2:** Check Resend dashboard for error logs
- **Check 3:** Verify email template exists in Supabase `email_templates` table

### Lead not appearing in dashboard
- **Check 1:** Open browser console (F12) when submitting form
- **Check 2:** Check Vercel logs (Vercel Dashboard → Your Project → Logs)
- **Check 3:** Verify Supabase migration ran successfully

### Payment redirect fails
- **Cause:** `NEXT_PUBLIC_SITE_URL` not set correctly
- **Fix:** Set to your production URL (e.g., `https://lovvioletarose.com`)

---

## 📞 Need Help?

1. **Check Vercel Logs:**
   - Vercel Dashboard → Your Project → Deployments → Click latest → Logs
   - Look for error messages

2. **Check Supabase Logs:**
   - Supabase Dashboard → Logs Explorer
   - Filter by error level

3. **Common Issues:**
   - Most issues are environment variable related
   - After adding env vars, always redeploy
   - Use Stripe test mode before going live

---

## 🎉 You're All Set!

Once you complete this checklist, you'll have:
- A fully functional CRM tracking every lead
- Automated email workflows saving you hours
- Professional payment system for booking clients
- Admin dashboard to manage your pipeline

**Next Steps:**
1. Complete the Quick Start (30 min)
2. Test everything thoroughly
3. Customize email templates to match your voice
4. Switch Stripe to live mode when ready
5. Start accepting real bookings! 🎬

---

**Questions or stuck?** Check the troubleshooting section above or review the detailed setup guide in `/docs/CRM-SETUP.md`.
