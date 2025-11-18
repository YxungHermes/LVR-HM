# n8n → Airtable Field Mapping Reference

Quick reference for mapping webhook data to Airtable fields in your n8n workflow.

## 📋 How to Use This Guide

When you're in the **Airtable node** in n8n:

1. Click "+ Add Field" for each field you want to populate
2. Select the Airtable field name from the dropdown
3. Click in the value field and drag the corresponding webhook field from the left panel
4. Or type the expression manually (shown below)

---

## 🗂️ Complete Field Mappings

Copy these exact mappings into your n8n Airtable node:

### Contact Information

| Airtable Field | n8n Expression | Notes |
|----------------|----------------|-------|
| Partner 1 Name | `{{ $json.partner1Name }}` | Required |
| Partner 2 Name | `{{ $json.partner2Name }}` | Required |
| Email | `{{ $json.email }}` | Required |
| Phone | `{{ $json.phone }}` | Optional, formatted as (555) 123-4567 |
| Contact Preference | `{{ $json.contactPreference }}` | "email", "phone", or "either" |

### Event Details

| Airtable Field | n8n Expression | Notes |
|----------------|----------------|-------|
| Wedding Date | `{{ $json.weddingDate }}` | ISO date format: 2026-06-15 |
| Event Type | `{{ $json.eventTypeFormatted }}` | Use FORMATTED version! |
| Location | `{{ $json.location }}` | City, state, country |
| Venue Name | `{{ $json.venueName }}` | Optional |

### Business Intelligence

| Airtable Field | n8n Expression | Notes |
|----------------|----------------|-------|
| Budget Range | `{{ $json.budgetRangeFormatted }}` | Use FORMATTED version! |
| Booking Timeline | `{{ $json.bookingTimelineFormatted }}` | Use FORMATTED version! |
| How Did You Hear | `{{ $json.howDidYouHearFormatted }}` | Use FORMATTED version! |

### Creative Preferences

| Airtable Field | n8n Expression | Notes |
|----------------|----------------|-------|
| Film Style | `{{ $json.filmStyleFormatted }}` | Use FORMATTED version! |
| Adventure Tier | `{{ $json.adventureTierFormatted }}` | Only for Couples Films |
| Deliverables | `{{ $json.deliverablesFormatted }}` | Array - see note below |

### Their Story

| Airtable Field | n8n Expression | Notes |
|----------------|----------------|-------|
| How You Met | `{{ $json.howYouMet }}` | Long text field |
| Additional Notes | `{{ $json.additionalNotes }}` | Long text field |

### Workflow Management

| Airtable Field | n8n Expression | Notes |
|----------------|----------------|-------|
| Status | `New Inquiry` | Hardcoded string (no `{{ }}`) |
| Submitted At | `{{ $json.submittedAt }}` | ISO timestamp |
| AI Email Draft | *(Leave empty)* | Populated by later node |
| Email Sent | `false` | Boolean (no quotes) |

---

## 🎯 Important Notes

### Why Use "Formatted" Fields?

Your webhook sends **two versions** of many fields:
- **Raw version** (e.g., `eventType: "intimate"`)
- **Formatted version** (e.g., `eventTypeFormatted: "Intimate Wedding"`)

**Always use the FORMATTED version** for Airtable because:
- Airtable single-select options are human-readable ("Intimate Wedding")
- Raw values won't match and will cause errors
- Formatted values match your Airtable dropdown options exactly

### Fields That MUST Be Formatted:

✅ Use `eventTypeFormatted` (not `eventType`)
✅ Use `budgetRangeFormatted` (not `budgetRange`)
✅ Use `bookingTimelineFormatted` (not `bookingTimeline`)
✅ Use `howDidYouHearFormatted` (not `howDidYouHear`)
✅ Use `filmStyleFormatted` (not `filmStyle`)
✅ Use `adventureTierFormatted` (not `adventureTier`)
✅ Use `deliverablesFormatted` (not `deliverables`)

### Handling the Deliverables Array

The `deliverables` field is a **multiple select** in Airtable, which means it expects an array of strings.

**Option 1: Direct Mapping (if n8n handles it)**
```
{{ $json.deliverablesFormatted }}
```

**Option 2: Use a Function Node (if direct mapping fails)**

Add a **Function node** BEFORE the Airtable node with this code:

```javascript
// Convert deliverables array to format Airtable expects
const input = items[0].json;

// If deliverables exist and is an array, keep it
// Otherwise, set to empty array
const deliverables = Array.isArray(input.deliverablesFormatted)
  ? input.deliverablesFormatted
  : [];

return [{
  json: {
    ...input,
    deliverables: deliverables
  }
}];
```

Then in Airtable node, map:
```
{{ $json.deliverables }}
```

### Handling Missing/Optional Fields

Some fields might be empty/undefined. n8n and Airtable handle this gracefully:

- **Optional text fields:** Send empty string or undefined - Airtable will leave blank
- **Optional single selects:** Don't send the field if empty
- **Optional multiple selects:** Send empty array `[]`

**Example:** Adventure Tier is only for Couples Films. If event type is "Intimate Wedding", `adventureTierFormatted` will be `undefined`. That's fine - Airtable will leave it blank.

---

## 🔍 Testing Your Mappings

### Step 1: Test with Sample Data

In your n8n workflow:

1. Click on the **Webhook node**
2. Click "Listen for Test Event"
3. Submit a test form from your website
4. The webhook should receive data

### Step 2: Verify Data Structure

1. Click on the **Webhook node** after receiving test data
2. Check the "Output" tab
3. You should see all the fields with values
4. Verify that `eventTypeFormatted` shows "Intimate Wedding" (not "intimate")
5. Verify that `budgetRangeFormatted` shows "$4k - $7k" (not "4k-7k")

### Step 3: Test Airtable Node

1. Click on the **Airtable node**
2. Click "Test step"
3. n8n will try to create a record in Airtable
4. If successful, green checkmark!
5. If error, read the error message carefully

### Common Errors:

**"INVALID_VALUE_FOR_COLUMN"**
- One of your single-select values doesn't match Airtable options
- Check that you're using FORMATTED fields
- Verify Airtable dropdown options match exactly (capitalization matters!)

**"UNKNOWN_FIELD_NAME"**
- Field name in Airtable doesn't match what you're sending
- Double-check field names in Airtable (click column header to see exact name)
- Check for typos

**"INVALID_MULTIPLE_ATTACHMENT_VALUES"**
- You're trying to send an array to a single-select field
- Make sure "Deliverables" in Airtable is set to "Multiple select"

---

## 📊 Example Complete Mapping (JSON)

If you want to copy/paste the entire mapping as JSON:

```json
{
  "Partner 1 Name": "={{ $json.partner1Name }}",
  "Partner 2 Name": "={{ $json.partner2Name }}",
  "Email": "={{ $json.email }}",
  "Phone": "={{ $json.phone }}",
  "Wedding Date": "={{ $json.weddingDate }}",
  "Event Type": "={{ $json.eventTypeFormatted }}",
  "Location": "={{ $json.location }}",
  "Venue Name": "={{ $json.venueName }}",
  "Budget Range": "={{ $json.budgetRangeFormatted }}",
  "Booking Timeline": "={{ $json.bookingTimelineFormatted }}",
  "How Did You Hear": "={{ $json.howDidYouHearFormatted }}",
  "Film Style": "={{ $json.filmStyleFormatted }}",
  "Adventure Tier": "={{ $json.adventureTierFormatted }}",
  "Contact Preference": "={{ $json.contactPreference }}",
  "How You Met": "={{ $json.howYouMet }}",
  "Additional Notes": "={{ $json.additionalNotes }}",
  "Status": "New Inquiry",
  "Submitted At": "={{ $json.submittedAt }}",
  "Email Sent": false
}
```

**Note:** Some n8n versions use `={{` and others just `{{`. If one doesn't work, try the other!

---

## 🎨 Visual Mapping Guide

Here's how your data flows:

```
Website Form Submission
         ↓
    [Webhook Node]
    Receives: partner1Name, partner2Name, eventType, etc.
         ↓
  [Function Node] (optional)
    Formats/cleans data if needed
         ↓
   [Airtable Node]
    Creates record with mapped fields
         ↓
Your Airtable Base: New row appears! ✨
```

---

## 🚨 Troubleshooting Checklist

If your Airtable node is failing, check:

- [ ] Airtable credential is connected and valid
- [ ] Base ID is correct (starts with `app`)
- [ ] Table name is exactly "Wedding Inquiries" (case-sensitive!)
- [ ] All single-select options in Airtable match the formatted webhook values
- [ ] You're using FORMATTED versions of fields (eventTypeFormatted, not eventType)
- [ ] "Status" is hardcoded as "New Inquiry" (not from webhook)
- [ ] "Email Sent" is hardcoded as `false` boolean (not string "false")
- [ ] Multiple select fields are sending arrays, not strings
- [ ] Date fields are in ISO format (YYYY-MM-DD or full ISO timestamp)

---

## 🎓 Advanced: Conditional Field Mapping

If you want to get fancy, you can use expressions to handle edge cases:

### Example: Default value if field is empty

```javascript
{{ $json.phone || "No phone provided" }}
```

### Example: Only send Adventure Tier if Event Type is Couples Film

```javascript
{{ $json.eventType === 'adventure' ? $json.adventureTierFormatted : null }}
```

### Example: Format partner names with pronouns

```javascript
{{ $json.partner1Name }}{{ $json.partner1Pronouns ? ' (' + $json.partner1Pronouns + ')' : '' }}
```

---

## ✅ Final Checklist

Before you activate your workflow:

- [ ] All required fields are mapped (Partner 1, Partner 2, Email)
- [ ] Single-select fields use FORMATTED versions
- [ ] "Status" is hardcoded to "New Inquiry"
- [ ] "Submitted At" uses the webhook's timestamp
- [ ] "AI Email Draft" and "Email Sent" are handled by later nodes (or left empty)
- [ ] Test with real form submission works end-to-end
- [ ] Record appears in Airtable with all data correct
- [ ] No errors in n8n execution log

---

**You're ready to rock!** 🎸

Your n8n workflow will now automatically create beautifully structured Airtable records every time someone inquires about your wedding videography services. 🎬💕
