# Consultation Form Email Debug Checklist

**Status:** Debugging why emails aren't being received
**Last Updated:** November 2024

---

## Issue
Consultation form submits successfully but emails are not being received at `contact@michael-andrade.com`.

---

## Quick Diagnosis Steps

### Step 1: Verify Vercel Environment Variables (MOST LIKELY ISSUE)

**Go to:** https://vercel.com/[your-username]/lvr-hm/settings/environment-variables

**Check that these are set for Production, Preview, AND Development:**

```
RESEND_API_KEY=re_DLPddvLb_9oXpjN4SJNZNFWQE7s1ocCZ6
RESEND_FROM_EMAIL=hello@michael-andrade.com
RESEND_TO_EMAIL=contact@michael-andrade.com
```

**If NOT set:**
1. Click "Add New"
2. Add each variable
3. Select all three environments (Production, Preview, Development)
4. Click "Save"
5. **IMPORTANT:** Trigger a new deployment (push a commit or click "Redeploy" in Vercel)

---

### Step 2: Check Resend Domain Verification

**Go to:** https://resend.com/domains

**Verify:**
- ✅ `michael-andrade.com` shows as "Verified"
- ✅ All DNS records are green checkmarks

**If NOT verified:**
- You cannot send from `hello@michael-andrade.com` until domain is verified
- Temporarily use `onboarding@resend.dev` for testing:
  - In Vercel, change `RESEND_FROM_EMAIL=onboarding@resend.dev`
  - Redeploy

---

### Step 3: Test API Endpoint Directly

**Open browser console and run:**

```javascript
fetch('https://your-deployment-url.vercel.app/api/consultation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    partner1: 'Test',
    partner2: 'Partner',
    email: 'contact@michael-andrade.com',
    phone: '555-1234',
    eventType: 'weddingDay',
    date: '2025-06-15',
    location: 'Los Angeles, CA'
  })
})
.then(res => res.json())
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err));
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Consultation request received",
  "id": "some-id-string"
}
```

**If you get:**
- `"error": "Email service is not configured"` → Step 1 (env vars not set)
- `"error": "Failed to send email"` → Check Resend dashboard logs
- `Network error` → Check API route is deployed

---

### Step 4: Check Resend Dashboard Logs

**Go to:** https://resend.com/emails

**Look for:**
- Recent sent emails (should show in last few minutes)
- Click on any email to see delivery status

**Possible statuses:**
- ✅ **Delivered** → Check spam folder in email
- ❌ **Bounced** → Email address issue
- ⏳ **Queued** → Still processing (wait 1-2 minutes)
- ❌ **Failed** → Check error message

---

### Step 5: Check Spam/Junk Folder

- Check `contact@michael-andrade.com` spam folder
- Check `info@michael-andrade.com` if forwarding is set up
- Add `hello@michael-andrade.com` to contacts/safe senders

---

## Common Fixes

### Fix 1: Missing Environment Variables in Vercel
**This is 90% of the time the issue.**

1. Go to Vercel project settings
2. Add all three environment variables
3. Make sure they're set for ALL environments
4. **Redeploy** (env vars don't apply to existing deployments)

### Fix 2: Domain Not Verified
Use `onboarding@resend.dev` temporarily until domain verification completes.

### Fix 3: Email Going to Spam
- Add sender to safe senders list
- Check SPF/DKIM records in Resend dashboard

### Fix 4: Wrong Email Address
Verify that `contact@michael-andrade.com` actually exists and can receive emails.

---

## Verification Checklist

- [ ] Vercel environment variables set for all environments
- [ ] Triggered new deployment after adding env vars
- [ ] Domain verified in Resend dashboard
- [ ] Test API endpoint returns success
- [ ] Check Resend dashboard shows "Delivered"
- [ ] Check spam folder
- [ ] Confirm email address exists and can receive mail

---

## Next Steps After Email Works

Once emails are being received, we'll add:

1. **Airtable Integration** - Store form submissions in database
2. **Make Automation** - Trigger workflows when form submitted
3. **Auto-responder** - Send confirmation email to couple
4. **Lead Scoring** - Categorize hot vs cold leads

---

## Quick Test Command

Run this from your local machine to test the production API:

```bash
curl -X POST https://your-deployment-url.vercel.app/api/consultation \
  -H "Content-Type: application/json" \
  -d '{
    "partner1": "John",
    "partner2": "Jane",
    "email": "contact@michael-andrade.com",
    "eventType": "weddingDay",
    "date": "2025-07-01",
    "location": "San Francisco"
  }'
```

Expected: `{"success":true,"message":"Consultation request received","id":"..."}`

---

**File Location:** `/docs/EMAIL-FORM-DEBUG-CHECKLIST.md`
**Related Files:**
- `/app/api/consultation/route.ts` - API endpoint
- `/docs/CONSULTATION_FORM_SETUP.md` - Original setup guide
