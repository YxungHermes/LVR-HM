# Airtable Setup - Quick Start Guide

## 🚀 TL;DR - What You Need

Setting up Airtable for your wedding inquiry automation. Here's everything in one place.

---

## 📋 Credentials Checklist

By the end of this setup, you'll have these three things to put into n8n:

- [ ] **Airtable Personal Access Token** (starts with `pat...`)
- [ ] **Base ID** (starts with `app...`)
- [ ] **Table Name** (`Wedding Inquiries`)

---

## ⚡ 5-Minute Setup (If You're In a Hurry)

### Step 1: Import CSV Template (2 min)

1. Go to https://airtable.com (create account if needed)
2. Click "+ Create" → "Import a spreadsheet"
3. Upload: `/home/user/LVR-HM/airtable-wedding-inquiries-template.csv`
4. Name base: `Love Violeta Rose - Clients`
5. Name table: `Wedding Inquiries`
6. Click "Import"
7. Delete the example row (Sarah & Jordan)

### Step 2: Fix Field Types (2 min)

**Critical fields to configure:**

Click each column header → "Customize field type":

- **Event Type** → Single select → Add these options:
  - Elopement, Intimate Wedding, Full Wedding, Large Celebration, Destination Wedding, Couples Film

- **Budget Range** → Single select → Add these options:
  - $2k - $4k, $4k - $7k, $7k - $12k, $12k - $20k, $20k+, Flexible / Not sure yet

- **Status** → Single select → Add these options:
  - New Inquiry, Responded, Consultation Scheduled, Booked, Not a Fit, No Response

- **Submitted At** → Date → Enable "Include time"

### Step 3: Get Your Token (1 min)

1. Click profile icon → "Developer hub"
2. Or go to: https://airtable.com/create/tokens
3. "+ Create new token"
   - Name: `n8n Wedding Inquiry Automation`
   - Scopes: `data.records:read` + `data.records:write`
   - Access: Add your base `Love Violeta Rose - Clients`
4. Click "Create token"
5. **COPY THE TOKEN IMMEDIATELY** (you only see it once!)

### Step 4: Get Your Base ID (30 sec)

1. Open your base in Airtable
2. Look at the URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. Copy the part that starts with `app`

### Step 5: Connect to n8n (30 sec)

In your n8n Airtable node:
1. Create new credential → "Airtable Personal Access Token"
2. Paste your token
3. Select base: `Love Violeta Rose - Clients`
4. Select table: `Wedding Inquiries`
5. Map fields using this guide: `docs/N8N_AIRTABLE_FIELD_MAPPING.md`

**Done!** Test by submitting a form.

---

## 📚 Detailed Guides

Need more help? I created comprehensive guides:

### Main Guide (Step-by-Step)
**File:** `docs/AIRTABLE_SETUP_GUIDE.md`

**What's inside:**
- Complete field-by-field setup instructions
- All field types and configurations
- How to get your Personal Access Token
- How to find Base ID and Table ID
- Troubleshooting common issues
- Creating useful views
- Best practices and security tips

**Read this if:** You're new to Airtable or want to understand every detail

### Field Mapping Reference
**File:** `docs/N8N_AIRTABLE_FIELD_MAPPING.md`

**What's inside:**
- Exact n8n expressions for each field
- Why to use "formatted" vs "raw" fields
- Handling arrays (deliverables)
- Common mapping errors and fixes
- Testing checklist

**Read this when:** You're in n8n and need to map webhook → Airtable fields

---

## 🗂️ Airtable Structure Overview

Your base will have **21 fields** organized like this:

### Contact Info (5 fields)
- Partner 1 Name, Partner 2 Name, Email, Phone, Contact Preference

### Event Details (4 fields)
- Wedding Date, Event Type, Location, Venue Name

### Business Intelligence (3 fields)
- Budget Range, Booking Timeline, How Did You Hear

### Creative Preferences (3 fields)
- Film Style, Adventure Tier, Deliverables

### Their Story (2 fields)
- How You Met, Additional Notes

### Workflow (4 fields)
- Status, Submitted At, AI Email Draft, Email Sent

---

## 🎯 Field Type Reference

Quick reference for field types:

| Field Name | Type | Options/Notes |
|------------|------|---------------|
| Partner 1 Name | Single line text | |
| Partner 2 Name | Single line text | |
| Email | Email | Clickable |
| Phone | Phone number | Auto-formats |
| Wedding Date | Date | No time |
| Event Type | Single select | 6 options (see below) |
| Location | Single line text | |
| Venue Name | Single line text | |
| Budget Range | Single select | 6 options (see below) |
| Booking Timeline | Single select | 5 options (see below) |
| How Did You Hear | Single select | 7 options (see below) |
| Film Style | Single select | 5 options (see below) |
| Adventure Tier | Single select | 3 options (see below) |
| Deliverables | Multiple select | 8 options (see below) |
| Contact Preference | Single select | Email, Phone, Either |
| How You Met | Long text | |
| Additional Notes | Long text | |
| Status | Single select | 6 options (see below) |
| Submitted At | Date | With time |
| AI Email Draft | Long text | |
| Email Sent | Checkbox | |

### Single Select Options

**Event Type:**
- Elopement
- Intimate Wedding
- Full Wedding
- Large Celebration
- Destination Wedding
- Couples Film

**Budget Range:**
- $2k - $4k
- $4k - $7k
- $7k - $12k
- $12k - $20k
- $20k+
- Flexible / Not sure yet

**Booking Timeline:**
- ASAP - date is coming up!
- Within 1-2 weeks
- Within 2-4 weeks
- Within 1-2 months
- Still browsing/researching

**How Did You Hear:**
- Instagram/Social Media
- Google Search
- Wedding Planner/Vendor
- Friend or Family Referral
- Venue Recommendation
- The Knot/WeddingWire
- Other

**Film Style:**
- Cinematic & Dramatic
- Romantic & Dreamy
- Documentary & Candid
- Editorial & Artistic
- Bold & Energetic

**Adventure Tier:**
- The Social — $750
- The Story — $1,200
- The Signature — $2,000

**Status:**
- New Inquiry
- Responded
- Consultation Scheduled
- Booked
- Not a Fit
- No Response

### Multiple Select Options

**Deliverables:**
- Highlight Film
- Full Ceremony Edit
- Full Reception Edit
- Social Media Teaser
- Documentary Edit
- Raw Footage Files
- Cinematic Storytelling
- Voice & Story Recording

---

## 🔐 Security Notes

**Your Personal Access Token is sensitive!**

✅ **DO:**
- Store it in a password manager
- Only use it in n8n credentials
- Limit scopes to what you need (`data.records:read` + `data.records:write`)

❌ **DON'T:**
- Commit it to git
- Share it in screenshots
- Give it more permissions than needed
- Share it with untrusted tools

**If you accidentally expose your token:**
1. Go to Airtable Developer Hub
2. Find your token
3. Click "Revoke"
4. Create a new one

---

## ✅ Testing Checklist

After setup, verify everything works:

### In Airtable:
- [ ] All 21 fields are created
- [ ] Single select fields have correct options
- [ ] Field types match the reference above
- [ ] Example row is deleted

### In n8n:
- [ ] Airtable credential is connected
- [ ] Base is selected: `Love Violeta Rose - Clients`
- [ ] Table is selected: `Wedding Inquiries`
- [ ] All fields are mapped (see field mapping guide)
- [ ] "Test step" creates a record successfully

### End-to-End:
- [ ] Submit a test form on your website
- [ ] Webhook fires to n8n
- [ ] Airtable record is created
- [ ] All fields are populated correctly
- [ ] No errors in n8n execution log

---

## 🐛 Quick Troubleshooting

### "Can't find base"
→ Check that your Personal Access Token has access to the base (Developer Hub → Token settings → Access)

### "Invalid value for column"
→ Your webhook value doesn't match the Airtable single-select options. Use FORMATTED fields in n8n mapping!

### "Unknown field name"
→ Field name in n8n doesn't match Airtable. Check for typos and capitalization.

### "Permission denied"
→ Token doesn't have `data.records:write` scope. Create a new token with correct scopes.

### "Date field not working"
→ Make sure "Submitted At" has "Include time" enabled in Airtable field settings.

---

## 📊 Recommended Views

Once data starts flowing, create these views:

**1. New Inquiries**
- Filter: Status = "New Inquiry"
- Sort: Submitted At (newest first)
- Purpose: Daily to-do list

**2. Hot Leads**
- Filter: Booking Timeline = "ASAP" or "Within 1-2 weeks"
- Sort: Booking Timeline (most urgent first)
- Purpose: Prioritize quick responses

**3. By Budget**
- Group by: Budget Range
- Purpose: See quality of leads

**4. By Source**
- Group by: How Did You Hear
- Purpose: Track marketing effectiveness

**5. Booked Clients**
- Filter: Status = "Booked"
- Sort: Wedding Date (upcoming first)
- Purpose: See your upcoming weddings

---

## 🎨 Pro Tips

### Color Code Your Tags
- Use colors strategically for quick scanning
- Example: Red for urgent, green for booked, gray for not a fit

### Hide Less-Used Fields
- Right-click column → "Hide field"
- Keeps interface clean while preserving data

### Set Up Airtable Automations
Once comfortable, you can auto-send Slack messages, create calendar events, etc.

### Export Regularly
- File → Export as CSV
- Good for backups or analyzing in Excel

---

## 🎬 Your Full Automation Flow

Here's what happens when someone submits your form:

1. **User fills out consultation form** on lovevioletarose.com
2. **Website validates** and sends to `/api/consultation`
3. **Resend sends email** to you (existing functionality)
4. **Webhook fires** to n8n with all 30+ fields
5. **n8n creates Airtable record** with mapped data → ✨ **You are here!**
6. **AI (Claude) generates** personalized email response
7. **Email draft saved** back to Airtable record
8. **Slack notification** sent to you for approval
9. **You review and send** the email to the couple

**Result:** Every inquiry is captured, organized, and responded to automatically! 🚀

---

## 📞 Need More Help?

- **Airtable Setup:** See `docs/AIRTABLE_SETUP_GUIDE.md`
- **Field Mapping:** See `docs/N8N_AIRTABLE_FIELD_MAPPING.md`
- **n8n Webhook:** See `docs/N8N_WEBHOOK_INTEGRATION.md`
- **CSV Template:** Located at `/home/user/LVR-HM/airtable-wedding-inquiries-template.csv`

---

**You've got this!** 🎉 In just a few minutes, you'll have a professional CRM set up for your wedding videography business.
