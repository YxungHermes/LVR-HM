# Airtable Setup Guide for Wedding Inquiry Automation

## 📋 Overview

This guide will walk you through setting up Airtable to capture all the rich data from your wedding consultation form. Your form sends **30+ fields** of valuable data - this Airtable base will capture the most important ones for managing inquiries, tracking leads, and analyzing your business.

## 🎯 What You'll Set Up

**Base Name:** Love Violeta Rose - Clients
**Table Name:** Wedding Inquiries
**Total Fields:** 21 fields

### Field Categories:
- **Contact Info** (5 fields): Names, email, phone, contact preference
- **Event Details** (4 fields): Date, type, location, venue
- **Business Intelligence** (3 fields): Budget, booking urgency, lead source
- **Creative Preferences** (3 fields): Film style, adventure tier, deliverables
- **Their Story** (2 fields): How they met, additional notes
- **Workflow Management** (4 fields): Status, submitted timestamp, AI draft, email sent

---

## 📂 STEP 1: Create Your Airtable Account (if needed)

**If you don't have an Airtable account:**

1. Go to https://airtable.com/signup
2. Sign up with your email (I recommend using your business email)
3. Choose "I'm exploring" when asked about your role
4. Skip any onboarding tours for now

**Expected result:** You should see the Airtable home screen with a "+ Create" button

---

## 🏗️ STEP 2: Create Your Base Using the CSV Template

### Option A: Import CSV (Recommended - Fastest)

**What you'll need:** The CSV file at `/home/user/LVR-HM/airtable-wedding-inquiries-template.csv`

**Steps:**

1. **Download the CSV to your computer** (from your LVR-HM repo)

2. **In Airtable, click "+ Create"** (top right or center of screen)

3. **Select "Import a spreadsheet"**

4. **Upload the CSV file**
   - Drag and drop the CSV file
   - Or click "Choose a CSV file" and select it

5. **Review the import preview**
   - Airtable will show you how it will import the data
   - You should see 21 columns and 1 sample row
   - **IMPORTANT:** Check that these field types are correct (Airtable usually guesses wrong):

6. **Name your base**
   - Base name: `Love Violeta Rose - Clients`
   - Table name: `Wedding Inquiries` (should auto-populate)

7. **Click "Import"**

8. **Expected result:** You should see a table with 21 columns and 1 example row

### Option B: Create Base Manually (If CSV import doesn't work)

**Steps:**

1. **Click "+ Create" → "Start from scratch"**

2. **Name your base:** `Love Violeta Rose - Clients`

3. **Name your first table:** `Wedding Inquiries`

4. **Skip to STEP 3** below to manually create each field

---

## ⚙️ STEP 3: Configure Field Types (Critical!)

After importing the CSV, you MUST configure the field types correctly. Here's the exact configuration for each field:

### 👥 Contact Information Fields

**1. Partner 1 Name**
- **Type:** Single line text
- **Description:** First partner's name
- No additional settings needed

**2. Partner 2 Name**
- **Type:** Single line text
- **Description:** Second partner's name
- No additional settings needed

**3. Email**
- **Type:** Email
- **Description:** Primary contact email
- No additional settings needed

**4. Phone**
- **Type:** Phone number
- **Description:** Contact phone number
- Format: Will auto-format as (555) 123-4567

**5. Contact Preference**
- **Type:** Single select
- **Options:**
  - Email
  - Phone
  - Either
- **Default:** Email
- **Color coding:** Your choice (I suggest: Email=blue, Phone=green, Either=gray)

---

### 📅 Event Details Fields

**6. Wedding Date**
- **Type:** Date
- **Format:** Local (e.g., 6/15/2026)
- **Time:** No (uncheck "Include time")
- **Description:** Date of the wedding/session

**7. Event Type**
- **Type:** Single select
- **Options:** (copy these exactly - they match your form)
  - Elopement
  - Intimate Wedding
  - Full Wedding
  - Large Celebration
  - Destination Wedding
  - Couples Film
- **Color coding suggestion:**
  - Elopement = purple
  - Intimate Wedding = pink
  - Full Wedding = red
  - Large Celebration = orange
  - Destination Wedding = yellow
  - Couples Film = green

**8. Location**
- **Type:** Single line text
- **Description:** Where the event is happening (city, state, country)

**9. Venue Name**
- **Type:** Single line text
- **Description:** Specific venue name (optional field)

---

### 💰 Business Intelligence Fields

**10. Budget Range**
- **Type:** Single select
- **Options:** (these match your form's budget ranges)
  - $2k - $4k
  - $4k - $7k
  - $7k - $12k
  - $12k - $20k
  - $20k+
  - Flexible / Not sure yet
- **Color coding suggestion:**
  - $2k - $4k = light gray
  - $4k - $7k = blue
  - $7k - $12k = green
  - $12k - $20k = yellow
  - $20k+ = gold
  - Flexible = gray

**11. Booking Timeline**
- **Type:** Single select
- **Options:** (these match your form exactly)
  - ASAP - date is coming up!
  - Within 1-2 weeks
  - Within 2-4 weeks
  - Within 1-2 months
  - Still browsing/researching
- **Color coding suggestion:**
  - ASAP = red
  - Within 1-2 weeks = orange
  - Within 2-4 weeks = yellow
  - Within 1-2 months = green
  - Still browsing = gray

**12. How Did You Hear**
- **Type:** Single select
- **Options:** (match your form's lead sources)
  - Instagram/Social Media
  - Google Search
  - Wedding Planner/Vendor
  - Friend or Family Referral
  - Venue Recommendation
  - The Knot/WeddingWire
  - Other
- **Color coding:** Your choice (helps track which channels work best!)

---

### 🎨 Creative Preferences Fields

**13. Film Style**
- **Type:** Single select
- **Options:** (match your form exactly)
  - Cinematic & Dramatic
  - Romantic & Dreamy
  - Documentary & Candid
  - Editorial & Artistic
  - Bold & Energetic
- **Color coding:** Your preference

**14. Adventure Tier**
- **Type:** Single select
- **Options:** (for Couples Film sessions)
  - The Social — $750
  - The Story — $1,200
  - The Signature — $2,000
- **Note:** This field only applies when Event Type = "Couples Film"
- **Color coding suggestion:**
  - Social = light blue
  - Story = blue
  - Signature = dark blue

**15. Deliverables**
- **Type:** Multiple select (NOT single select!)
- **Options:** (what they want from the wedding package)
  - Highlight Film
  - Full Ceremony Edit
  - Full Reception Edit
  - Social Media Teaser
  - Documentary Edit
  - Raw Footage Files
  - Cinematic Storytelling
  - Voice & Story Recording
- **Note:** Multiple select allows checking multiple deliverables

---

### 💕 Their Story Fields

**16. How You Met**
- **Type:** Long text
- **Description:** Their love story
- **Enable rich text formatting:** Optional (I recommend No for easier data handling)

**17. Additional Notes**
- **Type:** Long text
- **Description:** Any additional details, special requests, inspiration links, etc.
- **Enable rich text formatting:** No

---

### 🔄 Workflow Management Fields

**18. Status**
- **Type:** Single select
- **Options:**
  - New Inquiry
  - Responded
  - Consultation Scheduled
  - Booked
  - Not a Fit
  - No Response
- **Color coding suggestion:**
  - New Inquiry = red (needs attention!)
  - Responded = yellow
  - Consultation Scheduled = blue
  - Booked = green
  - Not a Fit = gray
  - No Response = light gray
- **Default:** New Inquiry

**19. Submitted At**
- **Type:** Date
- **Format:** Local
- **Time:** Yes (include time field)
- **Use the same time zone for all collaborators:** Yes
- **Format:** 11/18/2025 2:30pm

**20. AI Email Draft**
- **Type:** Long text
- **Description:** AI-generated email response (populated by n8n workflow)
- **Enable rich text formatting:** No

**21. Email Sent**
- **Type:** Checkbox
- **Description:** Did you send the AI-drafted email to the couple?
- **Default:** Unchecked

---

## 🧹 STEP 4: Clean Up the Example Row

After importing and configuring fields:

1. **Click on the row number** (the "1" on the left) of the example row (Sarah & Jordan)
2. **Press Delete** or click the three dots → Delete record
3. **Confirm deletion**

**Expected result:** Empty table with 21 properly configured fields, ready for real data!

---

## 🔑 STEP 5: Get Your Personal Access Token

n8n needs a Personal Access Token to write data to your Airtable base.

### Steps:

**1. Go to Airtable Developer Hub**
   - Click your profile icon (top right)
   - Select "Developer hub"
   - Or go directly to: https://airtable.com/create/tokens

**2. Create a new token**
   - Click "+ Create new token" (or "+ Create token")
   - **Name:** `n8n Wedding Inquiry Automation`
   - **Description:** `Allows n8n to create records in Wedding Inquiries table`

**3. Add scopes**
   - Click "+ Add a scope"
   - Check these two scopes:
     - ✅ `data.records:read`
     - ✅ `data.records:write`
   - **Do NOT select** `schema.bases:read` or `schema.bases:write` (you don't need these)

**4. Add access to your base**
   - Click "+ Add a base"
   - Select `Love Violeta Rose - Clients`
   - **Important:** Make sure the base appears in the "Access" section

**5. Create the token**
   - Click "Create token"
   - **CRITICAL:** Copy the token immediately!
   - The token will look like: `patABCDEF123456.1234567890abcdef1234567890abcdef`
   - **You can only see this ONCE!** Save it somewhere safe (password manager, .env file, etc.)

**Expected result:** You should have a token that starts with `pat` followed by random characters

---

## 🔍 STEP 6: Get Your Base ID and Table ID

n8n also needs your Base ID and Table ID/Name.

### Get Your Base ID:

**Method 1: From the URL (easiest)**
1. Open your `Love Violeta Rose - Clients` base
2. Look at the URL in your browser
3. It will look like: `https://airtable.com/appXXXXXXXXXXXXXX/...`
4. Your Base ID is the part that starts with `app`: `appXXXXXXXXXXXXXX`
5. Copy it!

**Method 2: From Help menu**
1. Open your base
2. Click "Help" in the top right
3. Select "API documentation"
4. Your Base ID will be shown on the first page

### Get Your Table Name:

- Your table name is simply: `Wedding Inquiries`
- n8n can use either the table name OR the table ID
- Table name is easier, so just use: `Wedding Inquiries`

---

## 🔗 STEP 7: Connect to n8n

Now you have everything n8n needs!

### In your n8n workflow:

**1. Find the Airtable node** (should be the 3rd node after webhook and data formatting)

**2. Create a new Airtable credential**
   - Click on the Airtable node
   - Click "Credentials" dropdown
   - Select "Create new"
   - Choose "Airtable Personal Access Token"

**3. Fill in the credential details**
   - **Name:** `Love Violeta Rose - Airtable`
   - **Personal Access Token:** Paste the token you copied (starts with `pat...`)
   - Click "Save"

**4. Configure the Airtable node**
   - **Base:** Click the dropdown and select `Love Violeta Rose - Clients` (it should appear automatically)
   - If it doesn't appear, paste the Base ID (`appXXXXXX...`)
   - **Table:** Select `Wedding Inquiries` from the dropdown
   - Or type it manually: `Wedding Inquiries`

**5. Map the fields**

This is where you tell n8n which webhook data goes into which Airtable field.

**Example field mappings** (in the Airtable node):

| Airtable Field | n8n Expression (drag from webhook data) |
|----------------|----------------------------------------|
| Partner 1 Name | `{{ $json.partner1Name }}` |
| Partner 2 Name | `{{ $json.partner2Name }}` |
| Email | `{{ $json.email }}` |
| Phone | `{{ $json.phone }}` |
| Wedding Date | `{{ $json.weddingDate }}` |
| Event Type | `{{ $json.eventTypeFormatted }}` |
| Location | `{{ $json.location }}` |
| Venue Name | `{{ $json.venueName }}` |
| Budget Range | `{{ $json.budgetRangeFormatted }}` |
| Booking Timeline | `{{ $json.bookingTimelineFormatted }}` |
| How Did You Hear | `{{ $json.howDidYouHearFormatted }}` |
| Film Style | `{{ $json.filmStyleFormatted }}` |
| Adventure Tier | `{{ $json.adventureTierFormatted }}` |
| Contact Preference | `{{ $json.contactPreference }}` |
| How You Met | `{{ $json.howYouMet }}` |
| Additional Notes | `{{ $json.additionalNotes }}` |
| Status | `New Inquiry` (hardcoded) |
| Submitted At | `{{ $json.submittedAt }}` |

**Notes on field mapping:**
- Use the **formatted** versions (like `eventTypeFormatted` instead of `eventType`) so the values match your Airtable single-select options
- For `Deliverables`, you'll need to map the array properly (n8n might need a function node to convert it)
- For `Status`, hardcode it to "New Inquiry" since all new submissions should start there
- `AI Email Draft` and `Email Sent` will be filled by later nodes in your workflow

**6. Test the connection**
   - Click "Test step" in the Airtable node
   - If successful, you should see a green checkmark
   - A new record will be created in your Airtable base!
   - Go check your Airtable to see the test record

---

## ✅ STEP 8: Verify Everything Works

### Create a test record manually:

1. **In Airtable, click "+ New record"** (or just click in an empty row)

2. **Fill in these test values:**
   - Partner 1 Name: `Alex`
   - Partner 2 Name: `Jamie`
   - Email: `alex.jamie@test.com`
   - Phone: `(555) 999-8888`
   - Wedding Date: `6/20/2026`
   - Event Type: `Intimate Wedding`
   - Location: `Manhattan, NY`
   - Venue Name: `Brooklyn Winery`
   - Budget Range: `$4k - $7k`
   - Booking Timeline: `Within 1-2 weeks`
   - How Did You Hear: `Instagram/Social Media`
   - Film Style: `Romantic & Dreamy`
   - Contact Preference: `Email`
   - Status: `New Inquiry`
   - Submitted At: (current date/time)

3. **Check that all fields saved correctly**
   - Single selects should show as colored tags
   - Email should be clickable
   - Phone should be formatted
   - Date should display properly

**Expected result:** All fields should accept the data without errors!

---

## 📊 STEP 9: Create Helpful Views (Optional but Recommended)

Views help you organize and filter your inquiries. Here are some useful views:

### View 1: New Inquiries (Default)
- **Filter:** Status = "New Inquiry"
- **Sort:** Submitted At (newest first)
- **Purpose:** See what needs immediate attention

**To create:**
1. Click the dropdown next to "Grid view" (top left)
2. Select "Duplicate view"
3. Name it: `New Inquiries`
4. Click "Filter" → Add condition → Status = New Inquiry
5. Click "Sort" → Submitted At → Descending

### View 2: High Priority (Hot Leads)
- **Filter:**
  - Booking Timeline = "ASAP" OR "Within 1-2 weeks"
  - AND Status ≠ "Not a Fit"
  - AND Status ≠ "No Response"
- **Sort:** Booking Timeline (most urgent first)
- **Purpose:** Focus on leads that need quick response

### View 3: By Budget Range
- **Group by:** Budget Range
- **Sort:** Submitted At (newest first)
- **Purpose:** See inquiries segmented by investment level

### View 4: Booked Clients
- **Filter:** Status = "Booked"
- **Sort:** Wedding Date (ascending)
- **Purpose:** See upcoming weddings you've booked

### View 5: Lead Source Analysis
- **Group by:** How Did You Hear
- **Purpose:** Track which marketing channels are working

**To create views:**
1. Click "+ Create" next to "Views" (left sidebar)
2. Select view type (Grid, Kanban, Calendar, etc.)
3. Configure filters, sorts, and grouping

---

## 🎨 STEP 10: Customize Your Workspace (Optional)

Make Airtable work better for you:

### Add Colors to Your Base
1. Right-click the base name → "Customize base"
2. Choose an icon and color (I suggest a heart icon 💕 or ring 💍)

### Reorder Fields
- Drag column headers left/right to reorder
- Put the most important fields (names, email, status) on the left

### Hide Fields You Don't Need Often
- Right-click any column header → "Hide field"
- This doesn't delete the field, just hides it from view
- Good for: "How You Met", "Additional Notes", "AI Email Draft"

### Set Default Field Widths
- Drag column borders to resize
- Good practice:
  - Names: Medium width
  - Email: Wide
  - Single selects: Narrow (just wide enough to see the tag)
  - Long text: Hidden or narrow (click to expand)

---

## 🔐 Security & Best Practices

### Do NOT share your Personal Access Token
- Never commit it to git
- Don't share it in screenshots
- Store it in a password manager
- Only use it in n8n credentials (which are encrypted)

### Limit Token Scope
- Only grant `data.records:read` and `data.records:write`
- Don't give `schema.bases:write` (allows deleting fields/tables)
- Don't give `enterprise.auditLogs:read` (sensitive data)

### Back Up Your Data
Airtable has version history, but it's good to:
- Periodically export to CSV (File → Export)
- Consider connecting to a backup system if you get lots of inquiries

### Set Up Automations in Airtable (Future)
Once you're comfortable, you can create automations directly in Airtable:
- Send yourself a Slack message when Status changes to "Booked"
- Auto-send a follow-up email if Status is still "New Inquiry" after 48 hours
- Create a calendar event when Status → "Consultation Scheduled"

---

## 🐛 Troubleshooting

### "Invalid field type" error in n8n
**Problem:** Airtable field type doesn't match the data being sent

**Solution:**
- Check that single-select options EXACTLY match the formatted values from your webhook
- Example: Webhook sends "Intimate Wedding" but Airtable has "intimate-wedding" → won't work!
- Use the **formatted** webhook fields (`eventTypeFormatted`, not `eventType`)

### "Cannot find base" error in n8n
**Problem:** n8n can't access your base with the token

**Solution:**
- Go back to your Personal Access Token settings
- Make sure the base is listed under "Access"
- Make sure you granted `data.records:write` scope
- Try creating a new token if the old one doesn't work

### Single select value not appearing
**Problem:** You send a value that's not in the Airtable single-select options

**Solution:**
- Add the missing option to the Airtable field
- Or update your n8n mapping to send a valid option
- Check for typos or capitalization differences

### Date field showing weird format
**Problem:** Date is sending in wrong format

**Solution:**
- Your webhook sends ISO format: `2025-11-18T14:30:00.000Z`
- Airtable accepts this format!
- If it's not working, try reformatting in n8n: `{{ $json.submittedAt.split('T')[0] }}`

### Multiple select not working (Deliverables field)
**Problem:** Webhook sends an array `["Highlight Film", "Ceremony Edit"]` but Airtable won't accept it

**Solution:**
- In n8n, you might need to convert the array to Airtable's format
- Use a Function node before Airtable:
  ```javascript
  return {
    json: {
      ...items[0].json,
      deliverables: items[0].json.deliverables || []
    }
  }
  ```
- Or map it directly if n8n handles it automatically (test this first!)

### "Permission denied" error
**Problem:** Token doesn't have the right permissions

**Solution:**
- Go to your token settings in Airtable Developer Hub
- Ensure both `data.records:read` and `data.records:write` are checked
- Make sure the specific base is added to the token's access list
- Try creating a new token from scratch

---

## 📞 Next Steps

Once Airtable is set up:

1. ✅ Test your full n8n workflow end-to-end
2. ✅ Submit a test inquiry from your website
3. ✅ Verify it creates an Airtable record
4. ✅ Check that the AI email draft gets saved back to Airtable
5. ✅ Create views to organize your inquiries
6. ✅ Set up notifications (Slack, email, etc.)

---

## 🎓 Learning Resources

New to Airtable? These resources helped me:
- **Airtable Universe:** See how others structure their bases (https://airtable.com/universe)
- **Airtable Support:** Comprehensive guides (https://support.airtable.com)
- **YouTube:** Search "Airtable for beginners" for video tutorials

---

## 🎉 You're All Set!

Your Airtable base is now ready to receive wedding inquiries automatically! Every time someone fills out your consultation form:

1. ✅ Form submits → Webhook fires → n8n receives data
2. ✅ n8n creates an Airtable record with all the inquiry details
3. ✅ AI generates a personalized email response
4. ✅ Email draft is saved back to the Airtable record
5. ✅ You get notified and can review/send the response

**Welcome to automated wedding inquiry management!** 🎬💕

