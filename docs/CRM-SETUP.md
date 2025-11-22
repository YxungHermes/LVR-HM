# Custom CRM Setup Guide

This guide will walk you through setting up your custom lead management and email automation system.

## 📋 Prerequisites

- Supabase account (free tier is fine)
- Resend account for emails
- Vercel account for hosting

---

## 🚀 Step 1: Set Up Supabase

### 1.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up
2. Click "New Project"
3. Fill in:
   - **Name:** LVR Wedding Films CRM
   - **Database Password:** (save this somewhere secure)
   - **Region:** Choose closest to your users

### 1.2 Run the Database Migration

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the entire contents of `/supabase/migrations/001_create_crm_tables.sql`
3. Paste it into the SQL Editor and click "Run"
4. You should see: "Success. No rows returned"

### 1.3 Get Your API Keys

1. Go to **Settings → API**
2. Copy these three values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` ⚠️ Keep this secret!

---

## 📧 Step 2: Configure Email Automation

### 2.1 Set Up Resend

1. Go to [resend.com](https://resend.com) and sign up
2. **Add your domain:**
   - Go to Domains → Add Domain
   - Follow DNS setup instructions
   - Verify domain
3. **Get API Key:**
   - Go to API Keys → Create API Key
   - Copy the key → `RESEND_API_KEY`

### 2.2 Customize Email Templates

1. In Supabase, go to **Table Editor → email_templates**
2. You'll see two default templates:
   - **Client Confirmation Email** (sent immediately when they submit)
   - **24 Hour Follow-up** (sent automatically 24hrs later)
3. Click on each template to edit the subject/body
4. Variables you can use:
   - `{{partner1_name}}` - First partner's name
   - `{{partner2_name}}` - Second partner's name
   - `{{wedding_date}}` - Wedding date
   - `{{event_type}}` - Event type (wedding, elopement, etc.)
   - `{{collection_suggestion}}` - Auto-suggested package

---

## ⚙️ Step 3: Environment Variables

### 3.1 Local Development

Create a `.env.local` file with:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=consultation@yourdomain.com
RESEND_TO_EMAIL=your@email.com

# Cloudflare Turnstile (already configured)
TURNSTILE_SECRET_KEY=your-existing-key

# Cron Job Security
CRON_SECRET=$(openssl rand -hex 32)
```

### 3.2 Vercel Production

1. Go to your Vercel project → Settings → Environment Variables
2. Add all the variables above
3. Make sure to select "Production", "Preview", and "Development"

---

## 🤖 Step 4: Set Up Automated Follow-ups

### 4.1 Create Vercel Cron Job

1. Create a file `vercel.json` in your project root:

```json
{
  "crons": [
    {
      "path": "/api/cron/follow-ups",
      "schedule": "0 * * * *"
    }
  ]
}
```

This runs every hour to check for leads that need follow-ups.

### 4.2 Secure the Cron Endpoint

Your cron endpoint is protected by the `CRON_SECRET`. Vercel automatically includes this in the `Authorization` header when calling your cron job.

---

## 📊 Step 5: Access Your Dashboard

### 5.1 Navigate to Admin Dashboard

1. Go to `https://yourdomain.com/admin`
2. You'll see:
   - **Stats:** Total leads, new leads, contacted, booked, pipeline value
   - **Filters:** Filter by status, priority, or search
   - **Lead List:** All consultation requests in a table

### 5.2 View Lead Details

Click "View" on any lead to see:
- Full contact and event information
- Timeline of all activities (emails sent, status changes, notes)
- Notes section (add private notes)
- Quick actions (update status, send email, etc.)

---

## 🔄 How It Works

### When a couple submits the consultation form:

1. ✅ **Lead is saved to database** with status "New"
2. 📧 **You get an internal email** with all their details
3. 📧 **They get a confirmation email** immediately
4. 📅 **Follow-up is scheduled** for 24 hours later
5. ⏰ **Cron job checks every hour** and sends follow-up when due
6. 📊 **Lead appears in your dashboard** for tracking

### Status Workflow:

```
New → Contacted → Proposal Sent → Booked
                               ↘ Declined
```

Each status change is logged in the activity timeline.

---

## 🎯 Best Practices

### Lead Management

1. **Check dashboard daily** for new leads
2. **Update status** as you progress through the sales process
3. **Add notes** after every call/email
4. **Set priority** based on urgency and budget
5. **Track pipeline value** to forecast revenue

### Email Automation

1. **Customize email templates** to match your voice
2. **Test emails** by submitting the form yourself
3. **Monitor open/click rates** in Resend dashboard
4. **A/B test subject lines** to improve engagement

### Follow-up Strategy

1. **New leads:** Automatic 24hr follow-up email
2. **Contacted:** Manual follow-up after proposal sent
3. **Proposal sent:** Check in after 3-5 days
4. **Booked:** Send welcome email with next steps

---

## 🐛 Troubleshooting

### Emails not sending?

- Check Resend dashboard for errors
- Verify domain is verified in Resend
- Check `RESEND_API_KEY` is correct
- Look at Vercel logs for error messages

### Leads not saving to database?

- Check Supabase connection in Vercel logs
- Verify environment variables are set
- Check Supabase database is running
- Look at browser console for errors

### Follow-ups not being sent?

- Verify `vercel.json` cron is set up
- Check `/api/cron/follow-ups` returns 200
- Look at lead's `next_follow_up_at` timestamp in database
- Check Vercel cron logs

### Dashboard not loading?

- Check browser console for errors
- Verify API routes are working (`/api/leads`)
- Check Supabase RLS policies allow read access

---

## 📈 Next Steps (Optional Enhancements)

1. **Add authentication** to protect the admin dashboard
2. **Create email templates** for each status change
3. **Add SMS notifications** for high-priority leads
4. **Build pipeline view** (Kanban board)
5. **Add analytics** (conversion rates, response times)
6. **Integrate calendar** for scheduling consultations
7. **Add payment processing** for booking deposits

---

## 💰 Costs

- **Supabase:** Free (up to 500MB database, 2GB bandwidth)
- **Resend:** Free (100 emails/day, then $20/month for 50k emails)
- **Vercel:** Free (Hobby plan) or $20/month (Pro for cron jobs)

**Total monthly cost:** $0 - $40/month depending on volume

---

## 🆘 Need Help?

If you run into issues:
1. Check the error logs in Vercel
2. Look at Supabase database logs
3. Test the API routes directly in your browser
4. Review the email templates in Supabase

---

## 🎉 You're Done!

Your custom CRM is now set up and ready to:
- ✅ Automatically save leads
- ✅ Send confirmation emails
- ✅ Schedule follow-ups
- ✅ Track your pipeline
- ✅ Manage all consultations in one place
