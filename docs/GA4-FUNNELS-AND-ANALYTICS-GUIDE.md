# GA4 Funnels & Analytics Strategy Guide

**Property:** michael-andrade.com (G-CWZ8Q1MPE3)
**Last Updated:** November 2024
**Purpose:** Understand visitor behavior, optimize conversions, make data-driven decisions

---

## 🎯 Your Conversion Funnel

Understanding your funnel helps you identify where visitors drop off and where to optimize.

### Primary Funnel: Visitor → Consultation → Booking

```
1. Landing (100%)
   ↓
2. Explore Content (60-80%)
   ↓
3. View Offerings/Pricing (30-50%)
   ↓
4. View Consultation Form (10-20%)
   ↓
5. Submit Consultation (5-10%)
   ↓
6. Book Wedding (3-7%) ← Tracked outside GA4
```

### How to Track This in GA4

**Step 1: Create Funnel Exploration Report**

1. Go to GA4 → **Explore** → Create new **Funnel exploration**
2. Name it: "Wedding Consultation Funnel"
3. Add these steps:

   **Step 1: Landing**
   - Event: `page_view` or `session_start`
   - Name: "Site Visit"

   **Step 2: Content Engagement**
   - Event: `scroll` (at least 50%)
   - Name: "Engaged with Content"

   **Step 3: Viewed Pricing**
   - Event: `page_view`
   - Condition: Page path contains `/offerings`
   - Name: "Viewed Offerings"

   **Step 4: Viewed Consultation Form**
   - Event: `view_consultation_form`
   - Name: "Started Consultation Form"

   **Step 5: Submitted Form**
   - Event: `generate_lead`
   - Name: "Submitted Consultation"

4. **Save and analyze** - You'll see drop-off rates at each step

### Expected Benchmarks (Wedding Industry)

| Step | Good Conversion Rate | Great Conversion Rate |
|------|---------------------|----------------------|
| Visit → Engagement | 60%+ | 75%+ |
| Engagement → View Pricing | 40%+ | 55%+ |
| Pricing → Form View | 20%+ | 35%+ |
| Form View → Submit | 30%+ | 50%+ |

**Overall: 3-7% of visitors should submit consultation form**

---

## 📊 Key Reports to Monitor Weekly

### 1. Traffic Overview
**Where to find:** GA4 → Reports → Acquisition → Traffic acquisition

**What to look for:**
- Which channels drive most traffic? (Organic, Social, Direct, Referral)
- Is Instagram driving traffic? (Track via UTM parameters)
- Are paid ads performing? (If running any)

**Action items:**
- Double down on high-performing channels
- Test new channels if traffic is low
- Add UTM parameters to all Instagram links

---

### 2. Engagement Report
**Where to find:** GA4 → Reports → Engagement → Pages and screens

**What to look for:**
- Top pages by views
- Average engagement time per page
- Which pages lead to form submissions?

**Key questions:**
- Are people viewing your portfolio? (Good sign)
- How long do they spend on offerings page? (>2 min = interested)
- Which pages have high bounce rates? (Need improvement)

**Action items:**
- If home page has high bounce rate → Improve hero message/CTA
- If pricing page has high views but no conversions → Adjust pricing presentation
- If portfolio has high engagement → Create more similar content

---

### 3. Conversion Tracking
**Where to find:** GA4 → Reports → Engagement → Conversions

**Events marked as conversions:**
- `generate_lead` - Consultation form submissions (PRIMARY)
- `consultation_submit` - Alternative tracking

**What to look for:**
- How many leads per week?
- What's the conversion rate? (conversions / sessions)
- Which traffic sources convert best?

**Targets:**
- Week 1-4: 1-3 leads/week (building awareness)
- Month 2-3: 3-7 leads/week (growing traffic)
- Month 4+: 7-15 leads/week (established presence)

---

### 4. User Journey Analysis
**Where to find:** GA4 → Explore → Path exploration

**Set up path exploration:**
1. Starting point: `page_view` (/)
2. Ending point: `generate_lead`
3. View the paths users take before converting

**Insights to gain:**
- Do users go straight to consultation? (High intent)
- Or do they browse portfolio first? (Research phase)
- Which page sequences lead to highest conversions?

**Action items:**
- Optimize high-traffic pages that DON'T lead to conversions
- Add CTAs to pages users visit before converting
- Create content for paths users naturally take

---

## 🔍 Advanced Funnel Strategies

### Micro-Conversions (Engagement Indicators)

Not everyone converts immediately. Track these "warm signals":

**1. High-Intent Scroll Depth**
- Event: `scroll` at 75% or 90%
- Indicates: Reading full page, high interest
- Where to find: GA4 → Engagement → Events → scroll

**2. CTA Clicks (Without Submission)**
- Event: `cta_click`
- Indicates: Interested but not ready to commit
- Action: Use Meta Pixel to retarget these users with ads

**3. Multiple Page Views**
- Check: Users with 3+ page views in session
- Indicates: Serious consideration
- Where to find: GA4 → Engagement → Events → page_view (filter by count)

**4. Repeat Visitors**
- Check: Users returning 2+ times
- Indicates: Very high intent
- Where to find: GA4 → User → User attributes → New vs Returning

---

### Segment Analysis

Create segments to understand different user behaviors:

**Segment 1: Converters**
- Condition: Triggered `generate_lead` event
- Compare to: All users
- Insight: What do converters do differently?

**Segment 2: High Engagers (Didn't Convert)**
- Conditions:
  - Session duration > 3 minutes
  - Viewed 3+ pages
  - Did NOT trigger `generate_lead`
- Insight: What's preventing conversion?
- Action: Retarget with Meta Pixel

**Segment 3: Pricing Page Viewers**
- Condition: Viewed `/offerings` page
- Insight: Conversion rate of pricing page viewers
- Benchmark: Should be 15-25%

**How to create segments:**
1. GA4 → Explore → Create new exploration
2. Under "Segments" → Create custom segment
3. Add conditions above
4. Apply to any report

---

## 📈 Attribution & Source Tracking

### UTM Parameter Strategy

Always use UTM parameters for trackable links:

**Instagram Bio Link:**
```
https://michael-andrade.com?utm_source=instagram&utm_medium=bio&utm_campaign=profile
```

**Instagram Stories:**
```
https://michael-andrade.com/offerings?utm_source=instagram&utm_medium=story&utm_campaign=pricing_story
```

**Instagram Posts:**
```
https://michael-andrade.com?utm_source=instagram&utm_medium=post&utm_campaign=portfolio_share
```

**Email Signature:**
```
https://michael-andrade.com?utm_source=email&utm_medium=signature&utm_campaign=outreach
```

**Vendor Referrals:**
```
https://michael-andrade.com?utm_source=referral&utm_medium=vendor&utm_campaign=venue_name
```

### Attribution Reports

**Where to find:** GA4 → Advertising → Attribution paths

**What it shows:**
- Which touchpoints users interact with before converting
- First click attribution (what brought them in)
- Last click attribution (what converted them)
- Assisted conversions (touchpoints in between)

**Example journey:**
1. Found you via Instagram (First touch)
2. Came back via Google search (Assisted)
3. Submitted form via direct visit (Last touch)

**All three** get credit in different attribution models.

---

## 🎯 Setting Up Custom Audiences for Retargeting

Use GA4 data to create retargeting audiences in Meta Ads:

### Audience 1: Pricing Page Viewers (Didn't Convert)
**Purpose:** Show testimonials/social proof to warm leads

**Setup in GA4:**
1. Admin → Audiences → New audience
2. Add condition: `page_view` where page_path contains `/offerings`
3. Exclude: Users who triggered `generate_lead`
4. Membership duration: 30 days
5. Link to Meta Ads

**Retargeting ad:**
- Creative: Client testimonial video
- Copy: "Limited 2025 dates available"
- Budget: $10/day

---

### Audience 2: High Engagers (2+ Visits, No Conversion)
**Purpose:** Overcome hesitation with special offer

**Setup in GA4:**
1. Admin → Audiences → New audience
2. Add conditions:
   - Session count ≥ 2
   - Total engagement time ≥ 180 seconds
   - Did NOT trigger `generate_lead`
3. Membership duration: 30 days
4. Link to Meta Ads

**Retargeting ad:**
- Creative: Beautiful wedding film clip
- Copy: "Let's talk about your vision - book a free consultation"
- Budget: $15/day

---

### Audience 3: Consultation Form Viewers (Didn't Submit)
**Purpose:** Re-engage form abandoners

**Setup in GA4:**
1. Admin → Audiences → New audience
2. Add condition: Triggered `view_consultation_form`
3. Exclude: Users who triggered `generate_lead`
4. Membership duration: 7 days
5. Link to Meta Ads

**Retargeting ad:**
- Creative: Quick, casual video introducing yourself
- Copy: "Questions about the process? Let's chat!"
- Budget: $5/day

---

## 📊 Monthly Analytics Review Checklist

Use this checklist every month to review performance:

### Traffic Analysis
- [ ] Total sessions this month vs last month
- [ ] Top 3 traffic sources
- [ ] New vs returning visitor ratio (target: 70/30)
- [ ] Mobile vs desktop (wedding industry: ~60% mobile)

### Engagement Analysis
- [ ] Average session duration (target: 2+ minutes)
- [ ] Pages per session (target: 3+ pages)
- [ ] Bounce rate by page (target: <60%)
- [ ] Top 5 most-viewed pages

### Conversion Analysis
- [ ] Total consultation form submissions
- [ ] Conversion rate (target: 3-7%)
- [ ] Cost per lead (if running paid ads)
- [ ] Which traffic sources convert best?

### Funnel Analysis
- [ ] Drop-off rate at each funnel step
- [ ] Biggest drop-off point (where to optimize)
- [ ] Path exploration: Common journeys to conversion

### Content Performance
- [ ] Which portfolio pieces get most views?
- [ ] Which blog posts (if any) drive traffic?
- [ ] Do people watch video content? (check avg engagement time)

### Action Items
- [ ] List 3 insights from this month's data
- [ ] List 3 actions to test next month
- [ ] Update retargeting audiences based on behavior

---

## 🚀 Future Analytics Enhancements

As your business grows, consider these advanced tracking setups:

### 1. Value Tracking (When You Know Package Prices)
Add value to the `generate_lead` event based on budget range:
- Budget: $2,200-$4,800 → Value: $3,500
- Budget: $3,500-$7,500 → Value: $5,500
- Budget: $5,500-$12,000 → Value: $8,000

**Why:** Calculate ROI on ad spend

---

### 2. Post-Booking Conversion Tracking
Manually log conversions when consultation → booking:
- Event: `purchase` (GA4 e-commerce event)
- Value: Actual package price
- Method: CRM integration or manual import

**Why:** See true conversion rate and revenue per visitor

---

### 3. Google Tag Manager (GTM) Setup
If you need more complex tracking later:
- Track specific video plays/pauses
- Track form field interactions
- Track specific scroll points
- A/B test tracking

**When to use:** If you're running frequent experiments

---

### 4. Server-Side Tracking
For enhanced privacy and accuracy:
- Track conversions server-side (not just browser)
- Better for iOS users (less affected by tracking prevention)
- More reliable data

**When to use:** If conversion tracking becomes critical for paid ads

---

## 📞 How to Make Data-Driven Decisions

### Scenario 1: Low Traffic
**Data shows:** <50 sessions/week

**Action:**
1. Check traffic sources - which are working?
2. Increase content creation (Instagram, blog, etc.)
3. Add UTM links to all social profiles
4. Consider small paid ad test ($5/day)

---

### Scenario 2: High Traffic, Low Conversions
**Data shows:** >200 sessions/week, <5 leads/month

**Action:**
1. Check funnel drop-off points
2. If drop at pricing: Adjust pricing presentation or add value props
3. If drop at form: Simplify form or add trust signals
4. Test different CTAs

---

### Scenario 3: High Bounce Rate on Homepage
**Data shows:** Bounce rate >70% on homepage

**Action:**
1. Check mobile experience (most wedding traffic is mobile)
2. Test clearer hero message
3. Add more prominent CTA
4. Check page load speed (GA4 → Page speed insights)

---

### Scenario 4: Specific Traffic Source Converts Well
**Data shows:** Instagram traffic converts at 8%, others at 2%

**Action:**
1. Double down on Instagram content
2. Analyze what Instagram content drives traffic (check UTMs)
3. Create more of that content type
4. Consider Instagram ads to scale

---

## 🎯 Quick Reference: GA4 Event Names

Use these event names when creating reports, funnels, and audiences:

| Event Name | What It Tracks | Where It's Used |
|------------|----------------|-----------------|
| `session_start` | New session begins | Funnel starting point |
| `page_view` | Page view | Traffic analysis |
| `view_consultation_form` | Consultation page viewed | Funnel step |
| `generate_lead` | Form submitted (**CONVERSION**) | Primary conversion |
| `consultation_submit` | Form submitted (alt tracking) | Secondary conversion |
| `cta_click` | CTA button clicked | Engagement tracking |
| `scroll` | Scroll depth milestones | Engagement tracking |
| `click` | Outbound link clicked | External traffic |

---

## 📚 Additional Resources

- **GA4 Documentation:** https://support.google.com/analytics/answer/10089681
- **GA4 YouTube Course:** https://www.youtube.com/analyticsmania (free)
- **UTM Builder:** https://ga-dev-tools.google/campaign-url-builder/
- **GA4 Event Tracking Guide:** https://support.google.com/analytics/answer/9267735

---

**File Location:** `/docs/GA4-FUNNELS-AND-ANALYTICS-GUIDE.md`

**Next Steps:**
1. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to Vercel
2. Wait 24-48 hours for data to populate
3. Create your first funnel exploration
4. Set up weekly reports
5. Start making data-driven decisions!
