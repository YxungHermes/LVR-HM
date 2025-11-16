# Analytics & Tracking Setup Guide — GA4 + Meta Pixel

**Last Updated:** November 2024
**Status:** ✅ GA4 Fully Configured | Meta Pixel Ready
**Your GA4 Measurement ID:** G-CWZ8Q1MPE3
**Time to Activate:** 5 minutes (just add to Vercel)

---

## 🎯 What's Installed vs What's Active

| Tool | Status | What It Means |
|------|--------|---------------|
| **Google Analytics 4** | ✅ Fully Configured | Add measurement ID to Vercel to activate |
| **Meta Pixel** | ✅ Code installed | Need to add pixel ID to activate |

## ✅ Your GA4 Configuration (Already Set Up!)

Your Google Analytics 4 is fully configured and ready to go:

- **Account Name:** Michael Andrade Studio – Analytics
- **Property Name:** michael-andrade.com
- **Measurement ID:** `G-CWZ8Q1MPE3`
- **Industry:** Other Business Activity
- **Business Size:** Small
- **Time Zone:** America/New_York
- **Currency:** USD
- **Enhanced Measurement:** ✅ ON (auto-tracks scrolls, outbound links, file downloads, video engagement)

**Tracking Objectives Enabled:**
- ✅ Generate leads (consultation form submissions)
- ✅ Understand traffic sources
- ✅ View engagement & retention
- ✅ Drive sales (future e-commerce ready)

---

## 📊 GA4 vs Meta Pixel — What Each Does

### Google Analytics 4 (GA4)

**What it tracks:**
- How many people visit your site
- Which pages they view
- How long they stay
- Where they came from (Google, Instagram, direct, etc.)
- What device/browser they use
- Which pages lead to form submissions

**How you use it:**
- Log in to https://analytics.google.com
- View dashboards showing traffic patterns
- See: "50 people viewed my pricing page this week"
- See: "Most visitors come from Instagram"
- See: "Average time on site: 2 minutes"

**Best for:** Understanding your website traffic and behavior

**You don't need to do anything else after setup** — just check the dashboard weekly to see what's working.

---

### Meta Pixel (Facebook/Instagram)

**What it tracks:**
- Same page views as GA4
- **PLUS:** Remembers specific visitors for ad targeting

**How you use it:**
- Run Instagram/Facebook ads
- Target specific audiences:
  - "People who viewed pricing but didn't submit form" → Show them a testimonial ad
  - "People who visited twice but haven't submitted" → Show them an offer
  - "People who submitted the form" → EXCLUDE from ads (don't waste money)

**Best for:** Retargeting ads on Instagram/Facebook

**Example retargeting campaign:**
```
Audience: Visited your site in last 30 days but didn't submit form
Ad: Gorgeous wedding film clip + "Limited availability for 2025"
Cost: $5-10/day
Result: Get them back to submit the consultation form
```

---

## 🚀 Setup Instructions

### Part 1: Google Analytics 4 (5 minutes - Almost Done!)

✅ **Steps 1-3: COMPLETE** - Your GA4 account, property, and data stream are already set up!

**Your Measurement ID:** `G-CWZ8Q1MPE3`

**Step 4: Add to Vercel (Only Remaining Step)**

1. Go to Vercel → Your project → Settings → Environment Variables
2. Add new variable:
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-CWZ8Q1MPE3`
   - **Environments:** Check all three (Production, Preview, Development)
3. Click "Save"
4. **Redeploy** your site (push a commit or click "Redeploy")

**Step 5: Verify It's Working**

1. Visit your live site
2. Go back to Google Analytics
3. Click "Realtime" in left sidebar
4. You should see yourself as "1 active user"

✅ **Done!** GA4 is now tracking all visitors automatically.

---

### Part 2: Meta Pixel (5 minutes)

**Step 1: Access Events Manager**

1. Go to https://business.facebook.com/events_manager
2. If you don't have a Business Account:
   - Create one at https://business.facebook.com
   - It's free and takes 2 minutes

**Step 2: Create Pixel**

1. In Events Manager, click "Connect Data Sources"
2. Choose "Web"
3. Choose "Meta Pixel"
4. Name it: **"LVR Website"**
5. Click "Create Pixel"

**Step 3: Get Pixel ID**

After creating, you'll see:
```
Pixel ID: 1234567890123456
```

**COPY THIS ID** (it's a long number).

**Step 4: Add to Vercel**

1. Go to Vercel → Settings → Environment Variables
2. Add new variable:
   - **Name:** `NEXT_PUBLIC_META_PIXEL_ID`
   - **Value:** `1234567890123456` (paste your actual ID)
   - **Environments:** Check all three
3. Click "Save"
4. **Redeploy**

**Step 5: Verify It's Working**

1. Visit your live site
2. Go back to Meta Events Manager
3. Click "Test Events" tab
4. You should see "PageView" events coming in
5. Submit your consultation form
6. You should see a "Lead" event

✅ **Done!** Meta Pixel is tracking and ready for retargeting campaigns.

---

## 📈 How to Take Advantage of GA4

### Weekly Check-In (5 minutes)

Go to https://analytics.google.com and check:

**1. Traffic Overview**
- How many visitors this week vs last week
- Trending up or down?

**2. Acquisition Report**
- Where are visitors coming from?
- Instagram, Google, Direct, Referral?
- Double down on what's working

**3. Page Views**
- Which pages are most popular?
- Are people viewing pricing? (Good sign!)
- Are people leaving on homepage? (Need better CTA)

**4. Events**
- How many consultation form views?
- How many consultation form submissions?
- Conversion rate = submissions / views

### Key Metrics to Watch

| Metric | Good | Bad | Action |
|--------|------|-----|--------|
| **Avg session duration** | 2+ minutes | <1 minute | Improve content |
| **Bounce rate** | <50% | >70% | Improve first impression |
| **Form views → submissions** | >10% | <5% | Simplify form |
| **Instagram traffic** | Growing | Flat | Post more, run ads |

---

## 🎯 How to Take Advantage of Meta Pixel

### Retargeting Campaign Ideas

**Campaign 1: Engaged Visitors**
```
Audience: Viewed 3+ pages, didn't submit form
Duration: Last 30 days
Ad: Beautiful wedding clip + client testimonial
Budget: $10/day
Goal: Get them to submit consultation form
```

**Campaign 2: Pricing Page Viewers**
```
Audience: Viewed pricing page, didn't submit form
Duration: Last 14 days
Ad: "Limited 2025 availability — Book your date"
Budget: $5/day
Goal: Create urgency
```

**Campaign 3: Form Abandoners**
```
Audience: Viewed consultation form but didn't submit
Duration: Last 7 days
Ad: "Questions? Book a quick call" + easy contact method
Budget: $5/day
Goal: Remove barriers
```

### How to Create Retargeting Campaign

1. Go to https://ads.facebook.com
2. Click "Create Campaign"
3. Choose "Traffic" objective
4. **Audience:**
   - Click "Custom Audiences"
   - Click "Create New"
   - Choose "Website"
   - Choose your pixel
   - Set rules: "URL contains /pricing" + "NOT /consultation/success"
   - Timeframe: 30 days
5. **Placement:** Instagram Feed + Stories only (where brides are)
6. **Budget:** Start with $5-10/day
7. **Ad creative:** Your best wedding film clip + compelling copy

---

## 🔥 Advanced: Lead Scoring with GA4

**Goal:** Identify "hot leads" before they even submit the form.

**Hot signals:**
- Viewed pricing page 2+ times
- Spent 5+ minutes on site
- Viewed portfolio + about + pricing
- Returned to site multiple times

**How to track:**
1. GA4 → Configure → Events
2. Create custom event "hot_lead"
3. Conditions:
   - Viewed pricing page
   - AND session_duration > 300 seconds
   - AND page_view count > 3

**Why this matters:**
When someone who matches these criteria submits the form, you know they're serious. Respond FAST (within 1 hour) to hot leads.

---

## 🛡️ Privacy & GDPR

Both GA4 and Meta Pixel are installed but:
- GA4 doesn't collect personal data (just anonymous behavior)
- Meta Pixel doesn't collect personal data until someone submits form
- Both respect Do Not Track settings
- You're not in EU so GDPR less critical, but good practice

**Optional:** Add cookie consent banner later (Month 2-3)

---

## 📊 What Data You'll See After 1 Week

### Google Analytics 4

```
Users: 47
Sessions: 63
Pageviews: 184

Top Pages:
1. Homepage — 63 views
2. Pricing — 28 views
3. About — 15 views
4. Consultation — 12 views

Traffic Sources:
- Instagram: 42%
- Direct: 31%
- Google: 18%
- Other: 9%

Consultation Form Submissions: 2
Conversion Rate: 16.7% (2/12 viewers submitted)
```

### Meta Events Manager

```
Total Events: 184

Event Breakdown:
- PageView: 184
- Lead (form submit): 2

Audience Available for Retargeting:
- Website visitors (30 days): 47 people
- Pricing page viewers: 28 people
- Non-converters: 45 people
```

---

## 🎬 Next Level: Video View Tracking

**Future enhancement** (Month 2-3):

Track which portfolio videos people watch:
- Which films get most views?
- Do longer or shorter clips convert better?
- Which traditions/styles are most popular?

This helps you create more of what converts.

---

## 🎯 Custom Events Tracking (Already Implemented!)

Your site now tracks these custom events in GA4:

### 1. Consultation Form Tracking
- **Event:** `view_consultation_form`
  - Fires when: Someone lands on /consultation
  - Data tracked: Form name, engagement type

- **Event:** `generate_lead` (GA4 recommended event)
  - Fires when: Consultation form submitted successfully
  - Data tracked: Event type, budget range, currency

- **Event:** `consultation_submit`
  - Fires when: Consultation form submitted successfully
  - Data tracked: Event type, budget range

### 2. CTA Button Tracking
- **Event:** `cta_click`
  - Fires when: Any CTA button is clicked
  - Data tracked: CTA location (hero, footer, etc.), button text, destination URL
  - Tracks CTAs in: Hero section, Consultation CTA component, throughout site

### 3. Scroll Depth Tracking
- **Event:** `scroll`
  - Fires when: User scrolls to 25%, 50%, 75%, or 90% of page
  - Data tracked: Percentage scrolled, page path
  - Helps you understand: Which pages people read fully vs skim

### 4. Automatic Tracking (via Enhanced Measurement)
GA4 Enhanced Measurement (enabled on your property) automatically tracks:
- **Page views** - Every page visit
- **Scrolls** - When users scroll to 90% (complements custom scroll tracking)
- **Outbound clicks** - Links to external websites
- **Site search** - If you add search functionality later
- **Video engagement** - YouTube/Vimeo video plays, progress, completion
- **File downloads** - PDF, video, or any file downloads

### Event Implementation Files
- **Analytics utility:** `/lib/analytics.ts` - Centralized tracking functions
- **Consultation form:** `/app/consultation/page.tsx` - Form view & submit tracking
- **Hero CTAs:** `/components/Hero.tsx` - Primary & secondary CTA tracking
- **Consultation CTA:** `/components/cta/ConsultationCTA.tsx` - CTA tracking
- **Scroll tracking:** `/components/ScrollDepthTracker.tsx` - Multi-milestone scroll tracking
- **Layout integration:** `/app/layout.tsx` - Site-wide tracking initialization

---

## 🔥 Setting Up Conversions in GA4 Dashboard

After adding your Measurement ID to Vercel, set up conversions in GA4:

1. Go to https://analytics.google.com
2. Select your property: **michael-andrade.com**
3. Navigate to: **Admin → Events → Mark as conversion**
4. Mark these events as conversions:
   - ✅ `generate_lead` - Primary conversion (consultation submissions)
   - ✅ `consultation_submit` - Secondary conversion tracking
   - ⚡ `cta_click` (optional) - Track button engagement as micro-conversion

**Why mark as conversions?**
- Appear in Conversions reports
- Can be used for Google Ads optimization
- Show up in attribution reports
- Help calculate ROI

---

## ⚡ Quick Setup Checklist

**Google Analytics 4:**
- [x] Create GA4 account + property ✅ DONE
- [x] Get Measurement ID (G-CWZ8Q1MPE3) ✅ DONE
- [ ] Add to Vercel as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Redeploy site
- [ ] Visit site, verify in GA4 Realtime
- [ ] Mark `generate_lead` as conversion in GA4 dashboard

**Meta Pixel:**
- [ ] Create Facebook Business Account
- [ ] Create pixel in Events Manager
- [ ] Get Pixel ID (numbers only)
- [ ] Add to Vercel as `NEXT_PUBLIC_META_PIXEL_ID`
- [ ] Redeploy site
- [ ] Visit site, verify in Test Events tab

**Total time:** 15 minutes
**Cost:** Free (both tools are free)
**Benefit:** Track everything, optimize what works, retarget hot leads

---

## 🔮 What This Unlocks (Future Campaigns)

**Month 1:** Just tracking (see what's working)

**Month 2:** Basic retargeting
- Instagram ad to site visitors who didn't submit form
- Budget: $150-300/month

**Month 3:** Advanced retargeting
- Different ads for different behaviors
- Lookalike audiences (find people similar to your best clients)
- Budget: $500-1000/month

**Month 6:** Full funnel optimization
- Know exactly which Instagram posts → site visits → form submissions
- A/B test ad creative based on pixel data
- Optimize every step of the journey

---

## 📚 Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Meta Pixel Setup Guide](https://www.facebook.com/business/help/952192354843755)
- [Meta Ads Manager](https://www.facebook.com/business/tools/ads-manager)
- [GA4 YouTube Course](https://www.youtube.com/analyticsmania) (free)

---

**File Location:** `/docs/ANALYTICS-AND-TRACKING-GUIDE.md`

**TL;DR:**
- GA4 = See who visits your site
- Meta Pixel = Target them with Instagram ads
- Both installed, just need IDs from dashboards
- 15 minutes to set up, lifetime value
