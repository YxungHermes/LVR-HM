# Love, Violeta Rose — SaaS Stack & Tool Decisions

**Status:** Active Decision Log
**Last Updated:** November 2024
**Purpose:** Single source of truth for all third-party tools, services, and integrations

---

## 🎯 **Current Stack (Implemented)**

### **Hosting & Infrastructure**
- ✅ **Vercel** - Website hosting & deployment ($0 Hobby tier)
- ✅ **Next.js 14** - Framework (App Router)
- ✅ **TypeScript** - Language
- ✅ **Tailwind CSS + Framer Motion** - Styling & animations

### **Email & Communication**
- ✅ **Resend** - Transactional email service ($0-20/month)
  - API Key configured
  - Sending from: `hello@michael-andrade.com`
  - Receiving at: `contact@michael-andrade.com`
  - Use case: Consultation form submissions

### **Analytics**
- ✅ **Vercel Speed Insights** - Core Web Vitals ($0, included with Vercel)
- ✅ **Google Analytics 4** - Traffic & conversion tracking ($0)
  - Status: Code installed, needs measurement ID setup
  - Configuration: `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### **Version Control & Collaboration**
- ✅ **GitHub** - Code repository (public repo)
- ✅ **Git** - Version control

---

## 🔄 **Automation & Integration Layer**

### **DECISION: Make (Not Zapier)**

**Chosen:** Make (formerly Integromat)
**Cost:** $0-29/month
**Status:** To be implemented

**Why Make over Zapier:**
- ✅ More powerful for complex workflows
- ✅ Visual workflow builder (better for technical users)
- ✅ 50% cheaper than Zapier ($29 vs $60 for similar features)
- ✅ Better error handling and branching logic
- ✅ More generous free tier (1,000 operations vs 100 tasks)

**Alternative Considered:**
- ❌ **Zapier** - More popular but expensive, less powerful
- ⏸️ **n8n** - Open-source option (too technical for now)

**Use Cases:**
1. Consultation form → Airtable/CRM → Email automation
2. Status updates → Trigger workflows
3. File delivery notifications
4. Payment processing workflows

---

## 🤔 **Pending Decisions (Choose One)**

### **CRM / Client Management**

**Status:** Evaluating options - MUST DECIDE SOON

#### **Option A: Dubsado** 💼
- **Cost:** $300-400/year (~$25-33/month)
- **Pros:**
  - All-in-one (contracts, invoices, scheduler, portal, workflows)
  - Purpose-built for service businesses
  - Works out of the box
  - Industry standard in wedding space
- **Cons:**
  - Dated UI (doesn't match brand aesthetic)
  - Less flexible than custom solutions
  - All integrations go through their system

**Best for:** If you want turnkey solution and don't want to build/maintain custom tools

---

#### **Option B: HubSpot** 🚀
- **Cost:** $0-45/month (Starter CRM free, Marketing Hub $45+)
- **Pros:**
  - Modern, beautiful UI
  - Powerful automation
  - Better for scaling business
  - Strong email marketing features
  - Excellent reporting/analytics
- **Cons:**
  - Not wedding-specific (more generic)
  - May need to build custom workflows
  - Can get expensive as you scale features
  - Learning curve for full feature set

**Best for:** If you want modern platform that scales beyond just weddings (e.g., if you add wax seal kit sales, workshops, etc.)

---

#### **Option C: Airtable + Custom Build** 🛠️
- **Cost:** $20-50/month (Airtable) + your time
- **Pros:**
  - Complete flexibility
  - Beautiful, modern interface
  - Powerful API for custom integrations
  - Can build exactly what you need
  - Own your data completely
- **Cons:**
  - Need to build contracts/invoices separately
  - Ongoing maintenance
  - Time investment (40-100 hours to build equivalent)

**Best for:** If you're technical, want full control, and enjoy building custom tools

---

#### **Option D: Notion** 📝
- **Cost:** $0-10/month
- **Pros:**
  - Beautiful, flexible workspace
  - Great for notes, planning, documentation
  - AI features built-in
  - Cheap
- **Cons:**
  - **NOT a true CRM replacement**
  - No contracts, invoices, automation
  - Good for tracking, poor for client operations

**Verdict:** Notion is NOT suitable as Dubsado/HubSpot replacement. Use it for internal docs only.

---

### **My Recommendation (Based on Your Needs):**

**Choose Dubsado if:**
- You want to focus on filming, not building software
- You need contracts + invoices + scheduling NOW
- You can tolerate the dated UI
- **Timeline:** Ready to use in 1 week

**Choose HubSpot if:**
- You want modern, scalable platform
- You're growing beyond just wedding films (e-commerce, courses, etc.)
- You value analytics and marketing automation
- **Timeline:** 2-3 weeks to set up properly

**Choose Airtable + Custom if:**
- You enjoy building custom tools
- You have 40-100 hours to invest
- You want exactly your vision
- **Timeline:** 2-3 months to build equivalent

**My suggestion:** Start with **Dubsado** for Year 1. Migrate to custom later if needed.

---

## 📊 **SEO & Marketing Tools**

### **DECISION: Start Free, Upgrade When Ready**

**Now (Free Tools):**
- ✅ **Google Search Console** - See what you rank for ($0)
- ✅ **Google Analytics 4** - Traffic analysis ($0)
- ⏸️ **Ubersuggest** - Basic keyword research ($0-29/month)

**Later (When Scaling SEO - Year 2+):**

#### **Option A: Ahrefs** 🔍
- **Cost:** $99-399/month
- **Best for:** Backlink analysis, competitive research
- **When to add:** After publishing Tradition Pages + 10+ blog posts

#### **Option B: Semrush** 📈
- **Cost:** $139-449/month
- **Best for:** All-in-one SEO toolkit, includes PPC research
- **When to add:** When running paid ads + organic SEO

#### **Free Alternatives:**
- **AnswerThePublic** - Question-based keyword ideas
- **Google Keyword Planner** - Basic search volume data
- **Google Trends** - See what's trending

**Decision Trigger:** Only invest in paid SEO tools when:
1. You've published 20+ pages of content (Tradition Pages)
2. You're getting 1,000+ visitors/month
3. SEO is a core growth channel
4. You have budget ($100-400/month)

**Timeline:** Year 2 (2026)

---

## 💰 **Payments & Invoicing**

### **DECISION: Stripe (Non-Negotiable)**

- ✅ **Stripe** - Payment processing (2.9% + $0.30 per transaction)
  - Status: Account to be created
  - Use for: Client invoices, potential e-commerce (wax seal kit)
  - Integration: Via Dubsado or custom Next.js checkout

**No alternatives considered** - Stripe is industry standard, most secure, best developer experience.

---

## 🎥 **Video Delivery & Storage**

### **DECISION: Vimeo Pro (Likely)**

**Chosen:** Vimeo Pro
**Cost:** $20/month (1TB storage)
**Status:** To be added when first film delivered

**Why Vimeo:**
- ✅ Client video review (timestamped comments)
- ✅ Download controls & privacy
- ✅ Beautiful, ad-free player
- ✅ Industry standard for videographers
- ✅ Embed-friendly for custom portal

**Alternative Considered:**
- **Frame.io** - $19/month, more robust review tools (slight overkill)
- **Cloudflare Stream** - Cheaper at scale, more technical

**For General Storage:**
- ✅ **Dropbox** - Currently using for project files
- Alternative: **Google Drive** - $10/month for 2TB (might switch)

---

## 📧 **Email Marketing (Future)**

**Status:** Not needed yet (wait until 50+ email subscribers)

**When Ready:**
- **ConvertKit** - $30/month (wedding-friendly, creator-focused)
- **Beehiiv** - $0-49/month (beautiful newsletters)
- **Mailchimp** - $0-30/month (familiar, powerful automation)

**Decision Trigger:** When you have:
- 50+ email subscribers
- Regular content to share (blog, behind-the-scenes)
- Lead magnet ready (wedding planning guide, etc.)

**Timeline:** Month 6-12

---

## 🤖 **AI & Automation**

### **DECISION: Claude API (Anthropic)**

**Chosen:** Claude API (Sonnet 3.5)
**Cost:** ~$20-50/month (usage-based)
**Status:** To be implemented

**Why Claude (not OpenAI):**
- ✅ Better at long-form writing (proposals, emails)
- ✅ Larger context window (200k tokens vs 128k)
- ✅ More nuanced, natural tone (matches luxury brand)
- ✅ Already familiar (this conversation!)

**Use Cases:**
1. Proposal generator (reads consultation form → writes custom proposal)
2. Email assistant (drafts responses in your voice)
3. Lead categorizer (qualified vs tire-kicker)
4. FAQ chatbot (future - embed on website)

**Alternative Considered:**
- ❌ **OpenAI GPT-4** - More common in tutorials, slightly cheaper, but Claude's writing quality is better for your needs

**Configuration:**
- API Key: `ANTHROPIC_API_KEY` (to be added to env vars)
- Model: `claude-3-5-sonnet-20241022`
- Integration: Custom Next.js API routes

---

## 📅 **Scheduling (Future)**

**Status:** Low priority (can handle manually for now)

**Options When Needed:**
- **Calendly** - $0-16/month (most popular)
- **Cal.com** - $0-12/month (open-source, more customizable)
- **Dubsado Scheduler** - Included if you choose Dubsado

**Decision Trigger:** When scheduling back-and-forth becomes painful (10+ consultations/month)

**Timeline:** Month 3-6

---

## 🎨 **Design & Creative Tools**

**Current:**
- ✅ **Adobe Creative Cloud** - $55-85/month (Premiere, After Effects, Photoshop)
  - Assumed you already have this as videographer

**To Add:**
- ⏸️ **Canva Pro** - $120/year (~$10/month)
  - For: Instagram posts, Pinterest pins, quick graphics
  - Add when: Posting regularly (3+ times/week)

**Not Needed:**
- ❌ Figma - (Nice to have for UI mockups, but not essential)

---

## 📊 **Privacy-Focused Analytics (Optional)**

**Status:** Consider if privacy becomes brand differentiator

**Options:**
- **Plausible** - $9/month (GDPR-compliant, no cookies)
- **Fathom** - $14/month (same as Plausible, prettier UI)

**vs. Google Analytics 4:**
- GA4: Free, powerful, industry standard
- Plausible/Fathom: Paid, simpler, privacy-first

**Decision:** Stick with **free GA4** for now. Add Plausible only if:
1. Targeting European clients (GDPR)
2. Privacy is part of brand positioning
3. Want simpler dashboard

**Timeline:** Year 2+ (not a priority)

---

## ❌ **Tools We're Skipping**

### **Customer Support Chat (Intercom, Crisp, etc.)**
- **Cost:** $39-99/month
- **Why skip:** Not needed for luxury service business
- **Reasoning:** Email consultation form is more appropriate for $5,000+ purchases
- **Future:** Maybe add AI chatbot for FAQs, but not live chat

### **Social Media Management (Hootsuite, Buffer, etc.)**
- **Cost:** $15-99/month
- **Why skip:** Can post directly to Instagram/Pinterest for now
- **Future:** Add when posting 5+ times/week across platforms

### **Project Management (Asana, Monday, Trello, etc.)**
- **Cost:** $0-25/month
- **Why skip:** CRM (Dubsado/Airtable) handles client projects
- **Use Notion** for internal planning (already free)

---

## 💵 **Budget Summary**

### **Year 1 (Launch - Month 1-6):**
```
ESSENTIAL:
Vercel Hobby                $0
Resend                      $0-20/month
Google Analytics 4          $0
Stripe                      2.9% + $0.30 per transaction
───────────────────────────
Subtotal:                   ~$10/month + transaction fees
```

### **Year 1 (Growing - Month 6-12):**
```
Add:
Dubsado OR HubSpot          $25-45/month
Vimeo Pro                   $20/month
Make                        $0-29/month (free tier initially)
───────────────────────────
Subtotal:                   ~$65-104/month
```

### **Year 2 (Established):**
```
Add:
Claude API                  $30-50/month
ConvertKit                  $30/month
Canva Pro                   $10/month
Google Drive 2TB            $10/month
───────────────────────────
Subtotal:                   ~$145-204/month
```

### **Year 3 (Scaling):**
```
Add:
Ahrefs OR Semrush          $99-139/month
Zapier/Make Pro            $29-60/month
───────────────────────────
Subtotal:                   ~$273-403/month
```

**Total 3-Year Investment:** ~$7,000-12,000 in SaaS
**vs. hiring VA/assistant:** $24,000-36,000 per year

---

## 🎯 **Decision Priorities (What to Decide NOW)**

### **URGENT (This Week):**
1. ✅ **Google Analytics 4** - Set up account, add measurement ID (DONE - code installed)
2. ⏸️ **Dubsado vs. HubSpot vs. Airtable** - Choose your CRM approach

### **SOON (This Month):**
3. ⏸️ **Vimeo Pro** - Set up when first film is ready to deliver
4. ⏸️ **Stripe Account** - Create account, get API keys
5. ⏸️ **Make Account** - Set up, connect to website

### **LATER (Month 2-3):**
6. ⏸️ **Claude API** - Implement proposal generator
7. ⏸️ **Email Marketing** - When you have 50+ subscribers

---

## 📝 **Next Actions**

### **For Google Analytics 4:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account → Create property → Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID`
4. Add to Vercel environment variables (Production, Preview, Development)
5. Redeploy site
6. Verify tracking in GA4 dashboard (24-48 hours for data)

### **For CRM Decision:**
1. Trial Dubsado (14-day free trial)
2. Trial HubSpot (free forever, test paid features)
3. Decide within 2 weeks
4. Commit and set up properly

### **For Make:**
1. Create account at [make.com](https://make.com)
2. Start with free tier (1,000 operations/month)
3. First scenario: Form submission → Airtable → Email
4. Upgrade to Pro ($29/month) when needed

---

## 🔗 **Integration Map (Future State)**

```
┌─────────────────────────────────────────┐
│  Your Website (Next.js + Vercel)        │
│  ├── Consultation Form                  │
│  ├── Client Portal (custom)             │
│  ├── Tradition Pages                    │
│  └── AI Features (Claude API)           │
└──────────────┬──────────────────────────┘
               │
               ↓ (webhooks, APIs)
┌─────────────────────────────────────────┐
│  Make (Automation Layer)                │
│  ├── Form → CRM workflow                │
│  ├── Status → Email triggers            │
│  └── Payment → Notification             │
└──────────────┬──────────────────────────┘
               │
      ┌────────┼────────┐
      ↓        ↓        ↓
┌──────────┐ ┌──────┐ ┌─────────┐
│ Dubsado/ │ │Resend│ │ Vimeo   │
│ HubSpot  │ │(Email│ │ (Video) │
│ (CRM)    │ │      │ │         │
└──────────┘ └──────┘ └─────────┘
      │
      ↓
┌──────────┐
│  Stripe  │
│ (Payment)│
└──────────┘
```

---

## 📚 **Resources & Documentation**

**Tool Documentation:**
- [Make Academy](https://make.com/en/academy) - Learn automation
- [Dubsado Help Center](https://help.dubsado.com/)
- [HubSpot Academy](https://academy.hubspot.com/) - Free courses
- [Airtable Universe](https://airtable.com/universe) - Template gallery
- [Claude API Docs](https://docs.anthropic.com/)
- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/9304153)

**Related Project Docs:**
- [CONSULTATION_FORM_SETUP.md](./CONSULTATION_FORM_SETUP.md) - Resend integration guide
- [Client Estimator Plan](./project-plans/client-estimator-page-plan.md) - Quote builder spec
- [Wax Seal Kit Concept](./product-concepts/wax-seal-kit-supporter-item.md) - Product expansion

---

## ✍️ **Decision Log**

| Date | Decision | Reasoning |
|------|----------|-----------|
| Nov 2024 | Chose Make over Zapier | More powerful, cheaper, better for technical users |
| Nov 2024 | Chose Claude API over OpenAI | Better writing quality, larger context window |
| Nov 2024 | Installed GA4 | Essential analytics, free, industry standard |
| Nov 2024 | Chose Resend over SendGrid | Modern API, better DX, generous free tier |
| Pending | Dubsado vs HubSpot vs Airtable | Evaluating CRM options |

---

**This is a living document.** Update as decisions are made, tools are added, or strategy changes.

**Last review:** November 2024
**Next review:** January 2025
