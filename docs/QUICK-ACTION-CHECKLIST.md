# Quick Action Checklist — Get Everything Working Fast ⚡

**Last Updated:** November 2024
**Status:** Ready to execute
**Time to Complete:** 30-45 minutes

---

## 🎯 What We Just Built

✅ **Email debugging tools** → Diagnose why emails aren't sending
✅ **Airtable integration** → Custom CRM database foundation
✅ **Dual-write system** → Form writes to BOTH Airtable + sends email
✅ **Test endpoints** → Quick verification tools

---

## 🚀 Action Plan (Do This Now)

### Phase 1: Fix Email (10 minutes)

**Step 1.1: Check Vercel Environment Variables**

Go to: **Vercel Dashboard → Project Settings → Environment Variables**

**Verify these exist for ALL three environments** (Production, Preview, Development):

```bash
RESEND_API_KEY = re_DLPddvLb_9oXpjN4SJNZNFWQE7s1ocCZ6
RESEND_FROM_EMAIL = hello@michael-andrade.com
RESEND_TO_EMAIL = contact@michael-andrade.com
```

**If missing:**
1. Click "Add New"
2. Paste each variable
3. Check ALL three environment checkboxes
4. Click "Save"
5. **Trigger redeploy** (push a commit or click "Redeploy" in Vercel)

---

**Step 1.2: Verify Domain in Resend**

Go to: https://resend.com/domains

**Check:** Is `michael-andrade.com` showing as **"Verified"** with green checkmarks?

- ✅ **Yes** → You're good, continue to Step 1.3
- ❌ **No** → Temporarily change `RESEND_FROM_EMAIL` to `onboarding@resend.dev` in Vercel

---

**Step 1.3: Test Email Endpoint**

Once Vercel redeploys, visit:
```
https://[your-vercel-url].vercel.app/api/test-email
```

**Expected Response:**
```json
{
  "status": "success",
  "message": "Test email sent successfully!",
  "emailId": "...",
  "sentFrom": "hello@michael-andrade.com",
  "sentTo": "contact@michael-andrade.com"
}
```

**If successful:** Check your inbox at `contact@michael-andrade.com` (or spam folder)

**If error:** Follow the error message instructions (likely env vars not set)

---

### Phase 2: Set Up Airtable (20 minutes)

**Step 2.1: Create Airtable Account**

1. Go to https://airtable.com
2. Sign up (free plan is fine)
3. Click "Start from scratch"

---

**Step 2.2: Create Base**

1. Click "Add a base"
2. Name: **"LVR Client Pipeline"**
3. Choose color: Rose/Terracotta
4. Icon: 🎥

---

**Step 2.3: Create "Consultation Requests" Table**

Rename "Table 1" to **"Consultation Requests"**

**Add these fields** (exact names, case-sensitive):

| Field Name | Type | Options |
|------------|------|---------|
| Partner 1 | Single line text | Required ✅ |
| Partner 2 | Single line text | Required ✅ |
| Email | Email | Required ✅ |
| Phone | Phone number | |
| Status | Single select | New Lead, Contacted, Qualified, Proposal Sent, Booked, Declined |
| Role | Single select | Couple, Planner, Parent |
| Event Type | Single line text | |
| Event Date | Date | |
| Location | Single line text | |
| Guest Count | Number | |
| Venue Name | Single line text | |
| Venue Link | URL | |
| Is Multi-Day | Checkbox | |
| Tradition | Single line text | |
| Planner Name | Single line text | |
| Planner Email | Email | |
| Planner Phone | Phone number | |
| Planner Company | Single line text | |
| Parent Name | Single line text | |
| Parent Email | Email | |
| Parent Phone | Phone number | |
| Parent Relation | Single line text | |
| How They Met | Long text | |
| Film Feel | Multiple select | (leave empty for now) |
| Budget Range | Single line text | |
| Pinterest Board | URL | |
| Pinterest Title | Single line text | |
| Other Links | Long text | |
| Additional Notes | Long text | |
| Contact Preference | Single line text | |
| Source | Single select | Website Form, Instagram DM, Referral |

**Note:** You can add more fields later. These are the essentials for the form to work.

---

**Step 2.4: Get Airtable Credentials**

**API Token:**
1. Go to https://airtable.com/create/tokens
2. Click "Create new token"
3. Name: **"LVR Website Integration"**
4. **Scopes:** Check these:
   - ✅ `data.records:read`
   - ✅ `data.records:write`
   - ✅ `schema.bases:read`
5. **Access:** Select your "LVR Client Pipeline" base
6. Click "Create token"
7. **COPY THE TOKEN** (starts with `pat...`)

**Base ID:**
1. Go to https://airtable.com/api
2. Click your "LVR Client Pipeline" base
3. Look at the URL: `https://airtable.com/[BASE_ID]/api/docs`
4. Copy the BASE_ID (starts with `app...`)

**Table ID:**
1. In Airtable, open your "Consultation Requests" table
2. Look at the URL: `https://airtable.com/[BASE_ID]/[TABLE_ID]`
3. Copy the TABLE_ID (starts with `tbl...`)

---

**Step 2.5: Add to Vercel Environment Variables**

Go to: **Vercel → Settings → Environment Variables**

Add these three for **ALL environments**:

```bash
AIRTABLE_API_TOKEN = pat_your_actual_token_here
AIRTABLE_BASE_ID = app_your_actual_base_id
AIRTABLE_TABLE_ID = tbl_your_actual_table_id
```

**Redeploy** after adding these.

---

**Step 2.6: Test Airtable Endpoint**

Once Vercel redeploys, visit:
```
https://[your-vercel-url].vercel.app/api/test-airtable
```

**Expected Response:**
```json
{
  "status": "success",
  "message": "✅ Airtable connection successful!",
  "test": {
    "createdRecordId": "recXXXXXXXXXXXXXX",
    "deletedImmediately": true
  }
}
```

**If successful:** Airtable integration is working!

---

### Phase 3: Test End-to-End (5 minutes)

**Submit a test consultation form:**

1. Go to: `https://[your-site].vercel.app/consultation`
2. Fill out the form with test data
3. Submit

**Verify Success:**

✅ **1. Form shows success message**
✅ **2. Email arrives at `contact@michael-andrade.com`**
✅ **3. Record appears in Airtable "Consultation Requests" table**

**If all three work:** 🎉 **You're done! Everything is connected!**

---

### Phase 4: Add Google Analytics (5 minutes)

**Step 4.1: Get Measurement ID**

1. Go to https://analytics.google.com
2. Create account → Create property
3. Copy Measurement ID (format: `G-XXXXXXXXXX`)

**Step 4.2: Add to Vercel**

Go to: **Vercel → Settings → Environment Variables**

Add for ALL environments:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-YOUR-ACTUAL-ID
```

**Redeploy** → GA4 will start tracking in 24-48 hours.

---

## 🔍 Troubleshooting

### Email not arriving?
- Check spam folder
- Verify domain at https://resend.com/domains
- Check Resend dashboard logs: https://resend.com/emails
- Verify Vercel env vars are set for **all three** environments

### Airtable error?
- Field names are **case-sensitive** (must match exactly)
- Verify API token has `write` permission
- Check Base ID and Table ID are correct
- Ensure all required fields exist in your table

### Form submission fails?
- Check browser console for errors
- Test API endpoint directly: `/api/test-email` and `/api/test-airtable`
- Verify both services configured in Vercel env vars

---

## 📊 What's Working Now

✅ **Consultation form** → Submits data
✅ **Airtable** → Stores all submissions in database
✅ **Resend** → Sends email notification to you
✅ **Google Analytics 4** → Tracks website traffic (if configured)

---

## 🔮 What's Next (Future)

**Phase 1 Complete ✅**
- Form backend working
- Email + database integrated

**Phase 2 (Next Session):**
- Make automation (auto-responder to couple)
- Lead scoring (hot/warm/cold)
- Auto-create follow-up tasks

**Phase 3 (Month 2-3):**
- Custom client portal
- Proposal generator
- Contract signing workflow

---

## 📁 Key Files Reference

| File | Purpose |
|------|---------|
| `/docs/EMAIL-FORM-DEBUG-CHECKLIST.md` | Email troubleshooting guide |
| `/docs/AIRTABLE-SETUP-GUIDE.md` | Complete Airtable setup (detailed) |
| `/docs/SAAS-STACK-DECISIONS.md` | Tool decisions and strategy |
| `/app/api/test-email/route.ts` | Test email configuration |
| `/app/api/test-airtable/route.ts` | Test Airtable configuration |
| `/app/api/consultation/route.ts` | Main form handler (Airtable + Email) |

---

## ⚡ Speed Run (If You're in a Hurry)

**Total Time: 15 minutes**

1. **Vercel:** Add 6 env vars (3 Resend + 3 Airtable) → Redeploy (5 min)
2. **Airtable:** Create base → Create table with key fields → Get credentials (7 min)
3. **Test:** Visit `/api/test-email` and `/api/test-airtable` (2 min)
4. **Done:** Submit test form, verify email + Airtable record (1 min)

---

**With your sophisticated AI web editor, you should have this done in under 30 minutes.**

**Next update:** Let me know when Phase 1 is complete, and we'll set up Make automation for auto-responders and lead scoring.

---

**File Location:** `/docs/QUICK-ACTION-CHECKLIST.md`
