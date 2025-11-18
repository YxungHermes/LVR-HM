# n8n Webhook Integration Guide

## 🎉 What Was Implemented

Your wedding consultation form now automatically sends data to your n8n workflow when someone submits an inquiry! This enables you to:

- ✅ Create Airtable records automatically
- ✅ Generate AI-drafted email responses
- ✅ Send Slack notifications for approval
- ✅ Automate follow-up workflows
- ✅ Track all inquiries in one centralized system

## 📁 Files Modified/Created

### New Files
- `types/consultation.ts` - TypeScript interfaces for form data and webhook payload
- `.env.local` - Local environment variables (not committed to git)
- `docs/N8N_WEBHOOK_INTEGRATION.md` - This documentation

### Modified Files
- `app/api/consultation/route.ts` - Added webhook integration (lines 53-56, 691-805)
- `.env.example` - Added N8N_WEBHOOK_URL variable documentation

## 🔧 How It Works

1. **User submits consultation form** on your website
2. **Form validates** client-side and server-side
3. **Email is sent** via Resend (existing functionality - unchanged)
4. **Webhook fires** to n8n with complete form data (new!)
5. **User sees success page** - they don't wait for the webhook
6. **n8n processes** the data in the background

### Key Features:
- **Non-blocking**: Webhook call doesn't slow down the user experience
- **Error-tolerant**: If n8n is down, the form still works and email is sent
- **Complete data**: Sends 30+ fields with both raw and formatted values
- **5-second timeout**: Webhook gives up if n8n doesn't respond quickly

## 🧪 Testing Guide

### Step 1: Set Up Your n8n Webhook

1. **Open your n8n workflow** at: https://michael-andrade.app.n8n.cloud
2. **Add a Webhook node** (or find your existing one)
3. **Configure it**:
   - HTTP Method: `POST`
   - Path: `wedding-inquiry`
   - Authentication: None (or your preference)
4. **Activate the workflow** (toggle on)
5. **Click "Listen for Test Event"** in the webhook node

### Step 2: Test Locally

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Open the consultation form**:
   ```
   http://localhost:3000/consultation
   ```

3. **Fill out the form** with test data:
   - Partner 1 Name: "Alex"
   - Partner 2 Name: "Jordan"
   - Email: "test@example.com"
   - Wedding Date: Pick any future date
   - Event Type: Select any option
   - Film Style: Select any option
   - Fill required fields marked with asterisks

4. **Submit the form**

5. **Check your terminal** for these logs:
   ```
   ✅ Email sent successfully: [email-id]
   📤 Sending consultation data to n8n webhook...
   ✅ n8n webhook delivered successfully
   ```

6. **Check n8n** - you should see the webhook data appear!

### Step 3: Verify the Data in n8n

In your n8n webhook node, you should receive a JSON payload like this:

```json
{
  "partner1Name": "Alex",
  "partner2Name": "Jordan",
  "email": "test@example.com",
  "phone": "(555) 123-4567",
  "weddingDate": "2025-06-15",
  "eventType": "intimate",
  "eventTypeFormatted": "Intimate Wedding",
  "location": "Brooklyn, NY",
  "filmStyle": "cinematic",
  "filmStyleFormatted": "Cinematic & Dramatic",
  "budgetRange": "4k-7k",
  "budgetRangeFormatted": "$4k - $7k",
  "howDidYouHear": "instagram",
  "howDidYouHearFormatted": "Instagram/Social Media",
  "bookingTimeline": "2-4-weeks",
  "bookingTimelineFormatted": "Within 2-4 weeks",
  "submittedAt": "2025-11-18T12:34:56.789Z",
  "source": "consultation-form"
}
```

### Step 4: What to Check

**In your terminal:**
- ✅ No errors during form submission
- ✅ See "📤 Sending consultation data to n8n webhook..."
- ✅ See "✅ n8n webhook delivered successfully"

**In n8n:**
- ✅ Webhook receives the data
- ✅ All fields are populated correctly
- ✅ Both raw values (e.g., "intimate") and formatted values (e.g., "Intimate Wedding") are present

**In your browser:**
- ✅ Form submits without errors
- ✅ Redirects to `/consultation/success` page
- ✅ No delay or hanging (webhook is non-blocking)

## 🐛 Troubleshooting

### "ℹ️ N8N_WEBHOOK_URL not configured - skipping webhook"

**Solution**: Add the webhook URL to your environment variables:

**For local development**, add to `.env.local`:
```bash
N8N_WEBHOOK_URL=https://michael-andrade.app.n8n.cloud/webhook/wedding-inquiry
```

**For production (Vercel)**, add to your Vercel project:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variable: `N8N_WEBHOOK_URL`
3. Value: `https://michael-andrade.app.n8n.cloud/webhook/wedding-inquiry`
4. Save and redeploy

### "❌ Failed to send to n8n webhook: fetch failed"

**Possible causes:**
- n8n workflow is not activated
- Webhook URL is incorrect
- n8n instance is down
- Network connectivity issue

**Solution:**
1. Check that your n8n workflow is **activated** (toggle on)
2. Click "Listen for Test Event" in the webhook node
3. Verify the webhook URL matches exactly
4. Test the webhook URL manually:
   ```bash
   curl -X POST https://michael-andrade.app.n8n.cloud/webhook/wedding-inquiry \
     -H "Content-Type: application/json" \
     -d '{"test": "data"}'
   ```

### "⚠️ n8n webhook error (non-blocking): The operation was aborted due to timeout"

This means the webhook took longer than 5 seconds to respond. This is **not critical** because:
- The form still works
- The email still sends
- The user doesn't experience any delay

**To fix:**
- Optimize your n8n workflow to respond faster
- Or increase the timeout in `app/api/consultation/route.ts` line 788

### Webhook data not appearing in n8n

**Checklist:**
1. Is the workflow activated? ✅
2. Is the webhook node set to "Listen for Test Event"? ✅
3. Is the HTTP method set to POST? ✅
4. Is the path correct (`wedding-inquiry`)? ✅
5. Check n8n's execution history for errors

## 📊 Data Fields Reference

The webhook sends **30+ fields**. Here are the most important ones:

### Contact Information
- `partner1Name`, `partner2Name` - Names of the couple
- `email` - Contact email (use this for replies!)
- `phone` - Phone number (formatted: "(555) 123-4567")
- `contactPreference` - How they want to be contacted ("email", "phone", or "either")

### Event Details
- `weddingDate` - ISO date string (e.g., "2025-06-15")
- `eventType` - Raw value: "elopement", "intimate", "full", "large", "destination", "adventure"
- `eventTypeFormatted` - Human-readable: "Intimate Wedding", "Couples Film", etc.
- `location` - Where the event is happening
- `venueName` - Specific venue (optional)
- `guestCount` - Number of guests

### Adventure Sessions (Couples Films)
- `adventureTier` - "social", "story", or "signature"
- `adventureTierFormatted` - "The Social — $750", "The Story — $1,200", "The Signature — $2,000"

### Budget & Timeline
- `budgetRange` - "2k-4k", "4k-7k", "7k-12k", "12k-20k", "20k+", "flexible"
- `budgetRangeFormatted` - "$2k - $4k", "$4k - $7k", etc.
- `bookingTimeline` - How soon they want to book ("asap", "1-2-weeks", etc.)
- `bookingTimelineFormatted` - "ASAP - date is coming up!", "Within 1-2 weeks", etc.

### Lead Source
- `howDidYouHear` - "instagram", "google", "planner", "friend", "venue", "theknot", "other"
- `howDidYouHearFormatted` - "Instagram/Social Media", "Google Search", etc.

### Creative Preferences
- `filmStyle` - "cinematic", "romantic", "documentary", "editorial", "energetic"
- `filmStyleFormatted` - "Cinematic & Dramatic", "Romantic & Dreamy", etc.
- `deliverables` - Array of requested deliverables
- `deliverablesFormatted` - Array with human-readable names
- `keyMoments` - Array of important moments they want captured

### Their Story
- `howYouMet` - Their love story (freeform text)
- `inspirationLinks` - Links to inspiration (Pinterest, YouTube, etc.)
- `additionalNotes` - Any additional details

### Metadata
- `submittedAt` - ISO timestamp when form was submitted
- `source` - Always "consultation-form" (useful if you add more forms later)

## 🚀 Deploying to Production

### Vercel Environment Variables

When you deploy to Vercel, add this environment variable:

1. **Go to Vercel Dashboard**
2. **Select your project** (LVR-HM)
3. **Settings → Environment Variables**
4. **Add new variable**:
   - Name: `N8N_WEBHOOK_URL`
   - Value: `https://michael-andrade.app.n8n.cloud/webhook/wedding-inquiry`
   - Environments: Production, Preview, Development (check all)
5. **Save**
6. **Redeploy** your site (or wait for next deployment)

### Testing in Production

1. Go to your live website: `https://yourdomain.com/consultation`
2. Submit a test inquiry
3. Check that:
   - Form submits successfully ✅
   - You receive the email via Resend ✅
   - n8n receives the webhook data ✅

## 🔒 Security Notes

- **No sensitive data in webhook**: Only form data that users intentionally submitted
- **No authentication required**: The webhook is public (this is normal for form webhooks)
- **Rate limiting**: Consider adding rate limiting in n8n if you get spam
- **Webhook URL can be changed**: Just update the environment variable

## 📝 Next Steps (After Testing)

Once you confirm the webhook is working:

1. **Build your n8n workflow**:
   - Add Airtable node to create records
   - Add AI node to draft email responses
   - Add Slack node for notifications
   - Add email node to send responses

2. **Set up Airtable**:
   - Create a "Wedding Inquiries" base
   - Map fields from the webhook payload
   - Add views for filtering (by booking timeline, budget, etc.)

3. **Configure Slack notifications**:
   - Include couple names, event date, budget range
   - Add quick action buttons
   - Format nicely with blocks

4. **Test the full workflow**:
   - Submit a test form
   - Verify Airtable record is created
   - Check Slack notification appears
   - Ensure AI draft email looks good
   - Test approval/sending flow

## 📞 Support

If you run into issues:

1. Check the terminal logs for error messages
2. Check n8n execution history for workflow errors
3. Verify environment variables are set correctly
4. Test with a minimal n8n workflow first (just webhook → manual response)

## 🎨 Customization

### Want to send less data?
Edit `prepareN8nPayload()` in `app/api/consultation/route.ts` (line 699)

### Want to change the timeout?
Edit line 788 in `app/api/consultation/route.ts`:
```typescript
signal: AbortSignal.timeout(5000), // Change 5000 to your desired milliseconds
```

### Want to add validation before sending?
Add checks before the `sendToN8nWebhook()` call on line 54

---

**You're all set!** 🎬 Your consultation form now integrates seamlessly with n8n for automated wedding inquiry management.
