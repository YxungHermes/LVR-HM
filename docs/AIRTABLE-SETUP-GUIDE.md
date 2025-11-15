# Love, Violeta Rose — Airtable Database Setup Guide

**Status:** Active Setup Guide
**Last Updated:** November 2024
**Purpose:** Foundation for custom CRM built with Airtable + Next.js

---

## 🎯 Why Airtable as Your Database

Based on your "mix of A and B" approach:
- ✅ **Flexible database** - More powerful than Notion, easier than building from scratch
- ✅ **Beautiful interface** - Modern UI you can actually use
- ✅ **Powerful API** - Easy to connect to your Next.js site
- ✅ **Scalable** - Start simple, add complexity over time
- ✅ **Make-ready** - Integrates perfectly with Make automation

**vs. Dubsado:** You own the data, full customization
**vs. Full custom build:** 90% faster to set up, still highly flexible

---

## 📋 Base Structure

### Base 1: **Client Pipeline** (Primary CRM)

This is your main database for managing wedding inquiries and clients.

#### Table 1: **Consultation Requests** (Form Submissions)

| Field Name | Field Type | Description | Required |
|------------|------------|-------------|----------|
| **Request ID** | Autonumber | Auto-generated unique ID | ✅ |
| **Submitted** | Created time | Timestamp of submission | ✅ |
| **Status** | Single select | New Lead, Contacted, Qualified, Proposal Sent, Booked, Declined | ✅ |
| **Partner 1** | Single line text | First partner's name | ✅ |
| **Partner 2** | Single line text | Second partner's name | ✅ |
| **Couple Name** | Formula | `{Partner 1} & " & " & {Partner 2}` | Auto |
| **Email** | Email | Primary contact email | ✅ |
| **Phone** | Phone number | Contact phone | |
| **Event Date** | Date | Wedding/event date | |
| **Event Type** | Single select | Elopement, Wedding Day, Destination, Adventure, Custom | |
| **Location** | Single line text | City, state, or country | |
| **Venue Name** | Single line text | Venue name | |
| **Venue Link** | URL | Link to venue website | |
| **Guest Count** | Number | Estimated guest count | |
| **Is Multi-Day** | Checkbox | Multi-day celebration? | |
| **Tradition** | Single line text | Cultural tradition/context | |
| **Role** | Single select | Couple, Planner, Parent | ✅ |
| **Planner Name** | Single line text | If planner inquiry | |
| **Planner Email** | Email | Planner contact | |
| **Planner Phone** | Phone number | Planner phone | |
| **Planner Company** | Single line text | Planning company name | |
| **Parent Name** | Single line text | If parent inquiry | |
| **Parent Email** | Email | Parent contact | |
| **Parent Phone** | Phone number | Parent phone | |
| **Parent Relation** | Single line text | Relation to couple | |
| **How They Met** | Long text | Their story | |
| **Film Feel** | Multiple select | Cinematic, Editorial, Candid, Bold, Timeless, Moody, Documentary | |
| **Budget Range** | Single line text | Budget range | |
| **Pinterest Board** | URL | Inspiration board link | |
| **Pinterest Title** | Single line text | Board title | |
| **Other Links** | Long text | Other inspiration links | |
| **Additional Notes** | Long text | Free-form notes | |
| **Contact Preference** | Single select | Email, Phone, Text | |
| **Lead Score** | Number | 1-10 lead quality score | |
| **Lead Temperature** | Single select | Hot 🔥, Warm ⭐, Cold ❄️ | |
| **Next Action** | Single line text | What to do next | |
| **Assigned To** | Single select | Violeta, Assistant, etc. | |
| **Tags** | Multiple select | VIP, Referred, Instagram, Quick Response Needed | |
| **Source** | Single select | Website Form, Instagram DM, Referral, Wedding Fair | |
| **Last Contact** | Date | Last time you reached out | |
| **Response Time** | Formula | Days since submission | Auto |
| **Proposal Sent** | Date | When proposal was sent | |
| **Proposal Link** | URL | Link to proposal doc | |
| **Contract Signed** | Checkbox | Contract signed? | |
| **Deposit Paid** | Checkbox | Deposit received? | |
| **Final Payment** | Checkbox | Final payment received? | |
| **Film Delivered** | Date | When film was delivered | |
| **Testimonial** | Long text | Client testimonial | |
| **Referrals** | Number | # of referrals from this client | |

#### Table 2: **Active Clients** (Linked from Consultation Requests)

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Client** | Linked record | → Consultation Requests |
| **Couple Name** | Lookup | From Consultation Requests |
| **Event Date** | Lookup | From Consultation Requests |
| **Package** | Single select | Bronze, Silver, Gold, Platinum, Custom |
| **Package Price** | Currency | Total contract value |
| **Deposit Amount** | Currency | Deposit amount |
| **Deposit Paid** | Checkbox | Deposit received? |
| **Balance Due** | Currency | Remaining balance |
| **Final Payment Date** | Date | When final payment is due |
| **Pre-Wedding Meeting** | Date | Meeting scheduled date |
| **Timeline Received** | Checkbox | Received day-of timeline? |
| **Vendor List** | Long text | Other vendors (photographer, planner, etc.) |
| **Shot List** | Long text | Must-have shots |
| **Film Delivered** | Date | Delivery date |
| **Vimeo Link** | URL | Link to delivered film |
| **Review Posted** | Checkbox | Client posted review? |
| **Status** | Single select | Contracted, Filmed, In Edit, Delivered, Complete |

#### Table 3: **Tasks & Follow-ups**

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Task** | Single line text | What needs to be done |
| **Client** | Linked record | → Consultation Requests |
| **Due Date** | Date | When task is due |
| **Priority** | Single select | High, Medium, Low |
| **Status** | Single select | To Do, In Progress, Done |
| **Notes** | Long text | Additional context |
| **Assigned To** | Single select | Who's responsible |

#### Table 4: **Email Templates**

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Template Name** | Single line text | "First Response", "Proposal Follow-up", etc. |
| **Subject Line** | Single line text | Email subject |
| **Body** | Long text | Email template (use {{Partner1}} for merge fields) |
| **Use Case** | Single select | Initial Contact, Follow-up, Proposal, Booking Confirmation |
| **Last Used** | Date | When template was last used |

---

## 🔧 Airtable Setup Steps

### Step 1: Create Airtable Account
1. Go to https://airtable.com
2. Sign up (free plan works to start)
3. Choose "Start from scratch"

### Step 2: Create Base
1. Click "Add a base"
2. Name it: **"LVR Client Pipeline"**
3. Choose color: Rose or Terracotta
4. Choose icon: 🎥 or 💐

### Step 3: Create Tables

**Table 1: Consultation Requests**
1. Rename "Table 1" to "Consultation Requests"
2. Add all fields from the table above
3. Set field types carefully (Single select, Multiple select, etc.)
4. For **Status** field, add options:
   - New Lead (red)
   - Contacted (orange)
   - Qualified (yellow)
   - Proposal Sent (blue)
   - Booked (green)
   - Declined (gray)

**Table 2-4:** Create additional tables using the "+" button

### Step 4: Create Views

In **Consultation Requests** table, create these views:

**View 1: All Leads (Grid view)**
- Default view showing all submissions

**View 2: New Leads (Grid view)**
- Filter: Status = "New Lead"
- Sort: Submitted (newest first)

**View 3: Hot Leads (Grid view)**
- Filter: Lead Temperature = "Hot 🔥"
- Sort: Event Date (soonest first)

**View 4: This Week (Calendar view)**
- Group by: Event Date
- Filter: Event Date is within next 7 days

**View 5: By Event Type (Kanban view)**
- Stack by: Event Type

**View 6: Pipeline (Kanban view)**
- Stack by: Status

### Step 5: Get API Credentials

1. Go to https://airtable.com/create/tokens
2. Click "Create new token"
3. Name it: **"LVR Website Integration"**
4. **Scopes:** Select:
   - ✅ `data.records:read`
   - ✅ `data.records:write`
   - ✅ `schema.bases:read`
5. **Access:** Select your "LVR Client Pipeline" base
6. Click "Create token"
7. **COPY THE TOKEN** (you'll only see it once)
8. Save it somewhere safe (we'll add to `.env.local` later)

### Step 6: Get Base ID and Table ID

**Base ID:**
1. Go to https://airtable.com/api
2. Click on your "LVR Client Pipeline" base
3. Look for the URL: `https://airtable.com/[BASE_ID]/api/docs`
4. Copy the `BASE_ID` (starts with `app...`)

**Table ID:**
1. In your Airtable base, click on "Consultation Requests" table
2. Look at the URL: `https://airtable.com/[BASE_ID]/[TABLE_ID]`
3. Copy the `TABLE_ID` (starts with `tbl...`)

---

## 🔑 Environment Variables

Add these to your `.env.local`:

```bash
# Airtable Integration
AIRTABLE_API_TOKEN=pat...your_token_here
AIRTABLE_BASE_ID=app...your_base_id
AIRTABLE_TABLE_ID=tbl...your_table_id
```

Add the same to Vercel:
1. Go to Vercel → Settings → Environment Variables
2. Add each variable for Production, Preview, Development
3. Redeploy

---

## 📦 Install Airtable SDK

Run this in your project:

```bash
npm install airtable
```

---

## 🧪 Test Airtable Connection

I'll create a test endpoint to verify Airtable is connected correctly.

---

## 🎨 Airtable Interface Customization (Optional - Do Later)

Once you're comfortable with the base, you can create custom interfaces:

1. Click "Interfaces" in top bar
2. Create "Client Dashboard"
3. Add widgets:
   - **Lead Summary** - Stats on new leads, qualified, booked
   - **This Week's Events** - Calendar view
   - **Hot Leads** - List of high-priority contacts
   - **Quick Actions** - Buttons to create tasks

---

## 🔄 Integration Flow (After Setup)

```
User submits consultation form
          ↓
Next.js API route (/api/consultation)
          ↓
    ┌─────┴─────┐
    ↓           ↓
Airtable    Resend Email
(Store)     (Notify)
    ↓
Make (Automation)
    ↓
Auto-responder, Lead scoring, Task creation
```

---

## 💡 Why This Approach Works

**Phase 1 (Now):** Airtable + Resend
- Store all form data
- Send email notifications
- Manual follow-up using Airtable interface

**Phase 2 (Month 2-3):** Add Make automation
- Auto-send confirmation email to couple
- Auto-assign lead score based on budget/date/location
- Auto-create follow-up tasks

**Phase 3 (Month 6-12):** Add custom features
- Build custom client portal on your website
- Pull data from Airtable to show clients their timeline, files, etc.
- Build custom proposal generator (reads Airtable, generates PDF)

**Phase 4 (Year 2):** Full custom CRM
- Migrate from Airtable interface to fully custom dashboard on your site
- Keep Airtable as database backend
- Build exactly what you need

---

## 📊 Pricing Breakdown

| Plan | Price | Records | API Calls | Automation |
|------|-------|---------|-----------|------------|
| **Free** | $0/mo | 1,000/base | 1,000/month | No |
| **Plus** | $10/seat/mo | 5,000/base | 100,000/month | Yes |
| **Pro** | $20/seat/mo | 50,000/base | 100,000/month | Yes + advanced |

**Recommendation:** Start with **Free** plan (1,000 records = 1,000 form submissions)
Upgrade to **Plus** ($10/mo) when you hit 500 submissions or need automations

---

## 🚀 Next Steps

1. [ ] Create Airtable account
2. [ ] Set up "LVR Client Pipeline" base
3. [ ] Create tables with fields from this guide
4. [ ] Generate API token
5. [ ] Get Base ID and Table ID
6. [ ] Add environment variables to `.env.local`
7. [ ] Install `airtable` npm package
8. [ ] Test connection (I'll create test endpoint)
9. [ ] Update consultation form API to write to Airtable + send email

---

## 📚 Resources

- [Airtable API Docs](https://airtable.com/developers/web/api/introduction)
- [Airtable JavaScript SDK](https://github.com/Airtable/airtable.js)
- [Airtable API Reference](https://airtable.com/api)
- [Make + Airtable Integration](https://www.make.com/en/integrations/airtable)

---

**File Location:** `/docs/AIRTABLE-SETUP-GUIDE.md`
**Related Files:**
- `/docs/SAAS-STACK-DECISIONS.md` - CRM decision rationale
- `/app/api/consultation/route.ts` - Will be updated to write to Airtable
- `/docs/EMAIL-FORM-DEBUG-CHECKLIST.md` - Email debugging guide
