# Email Not Working After Redeploy — Step-by-Step Fix

**Issue:** Redeployed on Vercel but still not receiving emails at contact@michael-andrade.com

**Most likely cause:** Environment variables not set in Vercel (they don't automatically sync from local)

---

## 🔍 Diagnostic Steps

### Step 1: Verify Vercel Environment Variables Are Set

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

**You need to see these THREE variables:**

```
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_TO_EMAIL
```

**Check:**
1. Do all three exist? (Not just one or two — ALL THREE)
2. Are they checked for **all three environments**?
   - ✅ Production
   - ✅ Preview
   - ✅ Development
3. Do the values match what's in your local `.env.local`?

**If ANY of these are missing or unchecked:**
1. Click "Add New" (or "Edit" if it exists)
2. Add the variable with correct value:
   ```
   Name: RESEND_API_KEY
   Value: re_DLPddvLb_9oXpjN4SJNZNFWQE7s1ocCZ6

   Name: RESEND_FROM_EMAIL
   Value: hello@michael-andrade.com

   Name: RESEND_TO_EMAIL
   Value: contact@michael-andrade.com
   ```
3. **IMPORTANT:** Check ALL THREE environment boxes (Production, Preview, Development)
4. Click "Save"
5. Go to Deployments → Click "..." on latest → "Redeploy"

---

### Step 2: Verify Domain in Resend Dashboard

**Go to:** https://resend.com/domains

**Check:** Is `michael-andrade.com` showing as **"Verified"**?

**Look for:**
- ✅ Green checkmark next to domain name
- ✅ All DNS records showing verified

**If NOT verified:**
- You cannot send from `hello@michael-andrade.com`
- Temporarily change `RESEND_FROM_EMAIL` to `onboarding@resend.dev` in Vercel
- This is Resend's test email that works without verification
- Redeploy after changing

---

### Step 3: Test the API Endpoint Directly

After redeploying, visit this URL in your browser:

```
https://[your-vercel-url].vercel.app/api/test-email
```

**Replace `[your-vercel-url]` with your actual Vercel URL**

**Expected good response:**
```json
{
  "status": "success",
  "message": "Test email sent successfully!",
  "emailId": "abc123...",
  "sentFrom": "hello@michael-andrade.com",
  "sentTo": "contact@michael-andrade.com"
}
```

**If you see this error:**
```json
{
  "status": "error",
  "message": "RESEND_API_KEY is not configured"
}
```

→ **Environment variables are NOT set in Vercel.** Go back to Step 1.

**If you see this error:**
```json
{
  "status": "error",
  "message": "Resend API returned an error",
  "error": "..."
}
```

→ **Domain verification issue.** Go to Step 2 and use `onboarding@resend.dev` temporarily.

---

### Step 4: Check Resend Email Logs

**Go to:** https://resend.com/emails

**Look for:**
- Recent emails sent in the last few minutes
- Click on any email to see status

**Possible statuses:**

| Status | Meaning | Action |
|--------|---------|--------|
| ✅ **Delivered** | Email sent successfully | Check spam folder at contact@michael-andrade.com |
| ⏳ **Queued** | Still processing | Wait 2-3 minutes, refresh |
| ❌ **Bounced** | Email address doesn't exist | Verify contact@michael-andrade.com is real |
| ❌ **Failed** | Domain not verified | Use onboarding@resend.dev temporarily |

---

### Step 5: Check Your Email Spam Folder

1. Go to contact@michael-andrade.com inbox
2. Check **Spam/Junk** folder
3. Look for emails from `hello@michael-andrade.com` or `onboarding@resend.dev`
4. If found, mark as "Not Spam" and add to contacts

---

## 🛠️ Common Issues & Fixes

### Issue 1: "I added env vars but still getting 'not configured' error"

**Cause:** Old deployment is still running with old env vars

**Fix:**
1. After adding env vars in Vercel settings
2. You MUST redeploy
3. Go to: Vercel → Deployments
4. Click "..." next to latest deployment
5. Click "Redeploy"
6. Wait for deployment to finish (green checkmark)
7. THEN test the `/api/test-email` endpoint again

---

### Issue 2: "Env vars are set but email still not sending"

**Cause:** Domain not verified in Resend

**Fix:**
1. Go to https://resend.com/domains
2. If `michael-andrade.com` is NOT verified:
   - Temporarily use `onboarding@resend.dev`
   - In Vercel env vars, change:
     ```
     RESEND_FROM_EMAIL = onboarding@resend.dev
     ```
   - Redeploy
   - This will work immediately for testing

---

### Issue 3: "Test endpoint works but consultation form doesn't send email"

**Cause:** Form might be failing before reaching the email code

**Fix:**
1. Open browser console (F12)
2. Go to "Network" tab
3. Submit consultation form
4. Look for `/api/consultation` request
5. Click on it to see response

**If response shows:**
```json
{"success": true, "emailId": "..."}
```
→ Email IS being sent. Check spam folder.

**If response shows:**
```json
{"error": "..."}
```
→ Post the full error and I'll help debug.

---

### Issue 4: "I'm getting emails from test endpoint but not from actual form"

**Possible cause:** Form validation failing or hitting wrong endpoint

**Fix:**
1. Try submitting form with minimal data (just names and email)
2. Check browser console for errors
3. Verify form is hitting `/api/consultation` endpoint
4. Check Vercel deployment logs:
   - Vercel → Project → Deployments → Click latest → "Functions" tab
   - Look for `/api/consultation` logs
   - Check for errors

---

## ✅ Step-by-Step Verification Checklist

Work through this checklist in order:

**Vercel Environment Variables:**
- [ ] Opened Vercel → Settings → Environment Variables
- [ ] See `RESEND_API_KEY` with value `re_DLPddvLb...`
- [ ] See `RESEND_FROM_EMAIL` with value `hello@michael-andrade.com` (or `onboarding@resend.dev`)
- [ ] See `RESEND_TO_EMAIL` with value `contact@michael-andrade.com`
- [ ] All three have checkmarks for Production, Preview, Development
- [ ] Triggered new deployment after adding/changing any env var

**Resend Domain:**
- [ ] Logged into https://resend.com/domains
- [ ] See `michael-andrade.com` with green "Verified" badge
- [ ] OR using `onboarding@resend.dev` as FROM email temporarily

**Test Endpoint:**
- [ ] Visited `https://[my-vercel-url].vercel.app/api/test-email`
- [ ] Got `{"status": "success"}` response
- [ ] Checked Resend dashboard (https://resend.com/emails)
- [ ] See email with "Delivered" status

**Email Inbox:**
- [ ] Checked inbox at contact@michael-andrade.com
- [ ] Checked spam/junk folder
- [ ] Marked sender as safe if found in spam

**Consultation Form:**
- [ ] Submitted test via actual consultation form
- [ ] Checked browser console for errors
- [ ] Verified `/api/consultation` shows success in Network tab
- [ ] Checked Resend dashboard for new email

**If all checked and still not working:**
→ Post screenshot of Vercel env vars page + Resend dashboard

---

## 🎯 Most Likely Solution (90% of cases)

**The issue is almost always:**

1. Environment variables not set in Vercel (only set locally)
2. Environment variables set but forgot to redeploy
3. Domain not verified in Resend

**The fix:**
1. Vercel → Settings → Environment Variables
2. Add all three variables for all three environments
3. Click "Redeploy" (this is critical!)
4. Test `/api/test-email` endpoint
5. Check inbox + spam folder

---

## 🚀 Quick Test Script

Run this in your browser console while on your site to test the API directly:

```javascript
fetch('https://[your-vercel-url].vercel.app/api/consultation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    partner1: 'Test',
    partner2: 'User',
    email: 'contact@michael-andrade.com',
    phone: '555-1234',
    date: '2025-06-15',
    location: 'Los Angeles',
    role: 'couple'
  })
})
.then(res => res.json())
.then(data => {
  console.log('✅ Response:', data);
  if (data.success) {
    console.log('✅ Form submission worked!');
    console.log('Email ID:', data.emailId);
    console.log('Airtable Record:', data.airtableRecordId);
    console.log('→ Now check your email inbox + Resend dashboard');
  } else {
    console.error('❌ Error:', data.error);
  }
})
.catch(err => console.error('❌ Network error:', err));
```

**Replace `[your-vercel-url]` with your actual URL.**

---

**Next:** Once email is working, we'll set up Airtable database and connect both systems.

**File Location:** `/docs/EMAIL-NOT-WORKING-FIX.md`
