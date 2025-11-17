# Love, Violeta Rose - Website Sitemap & Architecture

## Current Website Structure (Bird's Eye View)

```
/ (Home)
├── /films (NEW!)
├── /offerings
│   ├── /elopements
│   ├── /wedding-day-films
│   ├── /destination-weddings
│   └── /adventure-sessions
├── /process
├── /consultation (Comprehensive Form)
│   └── /success
└── /contact
    └── /inquiry (NEW! Simple Inquiry Form)
```

---

## Page Details & Navigation Flow

### 🏠 **Homepage** (`/`)
**Purpose:** Primary landing page, brand introduction, drive conversions

**Sections:**
1. **Hero** - Video background with CTAs
   - Primary CTA: "Book Consultation" → `/consultation`
   - Secondary CTA: "View Our Films" → `/films` ✅ (just updated!)

2. **Choose Your Story** (Full-screen section)
   - Grid of 4 offering types (bento-box layout)
   - Links to each offering page:
     - Elopements → `/offerings/elopements`
     - Wedding Day Films → `/offerings/wedding-day-films`
     - Destination Weddings → `/offerings/destination-weddings`
     - Adventure Sessions → `/offerings/adventure-sessions`

3. **Signature Work** (Full-screen section)
   - 3 featured films displayed as video cards
   - Each card links to → `/films`
   - Films shown:
     - Selene & Isidro (Utah)
     - Courtney & Sterling (Connecticut)
     - Brianna & Steven (New Jersey)

4. **Contact CTA** (Full-screen section) ✅ NEW!
   - Primary CTA: "Start Your Inquiry" → `/contact/inquiry`
   - Secondary CTA: "Book a Consultation" → `/consultation`
   - Trust indicators (24hr reply, personalized consultation, etc.)

**Footer:**
- Links to social media
- Navigation menu
- Copyright

---

### 🎬 **Films Page** (`/films`) ✅ NEW!
**Purpose:** Showcase portfolio, allow clients to view work in carousel format

**Sections:**
1. **Hero Carousel** (Full-screen)
   - Interactive carousel of signature films
   - Full-screen Vimeo video backgrounds
   - Navigation arrows + thumbnail dots
   - "Watch Full Film" CTA opens Vimeo player in new tab

2. **All Films Grid**
   - All 3 signature films displayed as cards
   - Click to jump to carousel at top
   - Scroll to view

3. **CTA Section**
   - "Ready to Create Your Film?"
   - "Book Consultation" → `/consultation`

**Navigation TO:**
- `/consultation` (Book button)
- External Vimeo player (Watch Full Film)

**Navigation FROM:**
- Homepage (Hero CTA, Signature Work cards)
- Header navigation (Films menu)
- Header mega menu (Latest Films submenu)

---

### 📋 **Offerings Hub** (`/offerings`)
**Purpose:** Overview of all service collections, pricing information

**Sections:**
- Overview of 4 main collections
- Pricing for each collection
- "Book Consultation" CTAs

**Sub-pages:**
- `/offerings/elopements`
- `/offerings/wedding-day-films`
- `/offerings/destination-weddings`
- `/offerings/adventure-sessions`

**Navigation TO:**
- `/consultation` (multiple CTAs)
- Individual offering pages

**Navigation FROM:**
- Homepage (Choose Your Story section)
- Header navigation (Offerings menu)
- Header mega menu

---

### 💼 **Process Page** (`/process`)
**Purpose:** Explain workflow, timeline, what to expect

**Sections:**
- How We Work
- Timeline & Planning
- What to Expect

**Navigation TO:**
- `/consultation` (CTAs)

**Navigation FROM:**
- Header navigation (Process menu)

---

### 📝 **Consultation Page** (`/consultation`)
**Purpose:** Comprehensive booking form for serious inquiries

**Sections:**
- Detailed multi-section form:
  - Your Information (names, email, phone, role selector)
  - Event Details (type, date, location, tradition, venue)
  - Your Story (how you met, film feel preferences)
  - Pinterest Inspiration Board integration
  - Investment & Preferences (budget, contact method)
  - Additional Notes

**Success Page:** `/consultation/success`

**Navigation TO:**
- `/consultation/success` (on successful submission)
- `/offerings` (back link)
- Pinterest API integration

**Navigation FROM:**
- Homepage (Hero primary CTA, Contact section secondary CTA)
- Films page (CTA section)
- Offerings pages (multiple CTAs)
- Process page (CTAs)
- Header navigation (primary CTA button)
- Contact inquiry page (upgrade link)

---

### 📧 **Inquiry Page** (`/contact/inquiry`) ✅ NEW!
**Purpose:** Quick, simple contact form for initial inquiries

**Sections:**
- Simple 3-section form:
  - Tell Me About You (names, email, phone)
  - Your Celebration (event type, date, location)
  - Your Vision (message/details)

**Navigation TO:**
- `/consultation/success` (on successful submission)
- `/consultation` (link to upgrade to full consultation)

**Navigation FROM:**
- Homepage (Contact section primary CTA)

---

## 📊 Current Navigation Structure

### Header Navigation (Left Side)
- **Home** → `/`
- **Films** → `/films`
  - Mega Menu:
    - Latest Films
      - Selene & Isidro → `/films`
      - Courtney & Sterling → `/films`
      - Brianna & Steven → `/films`
    - Explore
      - View All Films → `/films`
      - Book Consultation → `/consultation`
- **Offerings** → `/offerings`
  - Mega Menu:
    - Collections
      - Elopements & Intimate Gatherings → `/offerings#elopements`
      - Wedding Day Films → `/offerings#wedding-day-films`
      - Destination Wedding Films → `/offerings#destination-weddings`
      - Adventure Sessions & Stories → `/offerings#adventure-sessions`
    - Explore
      - View All Collections → `/offerings`
      - Book Consultation → `/consultation`

### Header Navigation (Right Side)
- **Process** → `/process`
  - Mega Menu:
    - How We Work
      - Our Approach → `/process#approach`
      - Timeline & Planning → `/process#timeline`
      - What to Expect → `/process#expect`
- **Book Consultation** → `/consultation` (Primary CTA button)

---

## 🔄 User Journey Flows

### Primary Conversion Paths

**Path 1: Direct Consultation (High Intent)**
```
/ (Homepage)
  → Hero CTA "Book Consultation"
    → /consultation
      → /consultation/success ✅
```

**Path 2: Browse Then Book (Research Phase)**
```
/ (Homepage)
  → "View Our Films"
    → /films
      → View carousel, watch films
        → "Book Consultation" CTA
          → /consultation
            → /consultation/success ✅
```

**Path 3: Explore Offerings (Price Discovery)**
```
/ (Homepage)
  → Choose Your Story section
    → /offerings/[collection]
      → Review pricing & details
        → "Book Consultation" CTA
          → /consultation
            → /consultation/success ✅
```

**Path 4: Quick Inquiry (Low Friction)**
```
/ (Homepage)
  → Contact CTA section
    → "Start Your Inquiry"
      → /contact/inquiry
        → /consultation/success ✅
        OR
        → upgrade to /consultation ↑
```

---

## ✨ Recommendations & Potential Enhancements

### 1. **About/Story Page** 🆕 SUGGESTED
**Proposed URL:** `/about` or `/story`
**Purpose:** Personal connection, build trust, tell Violeta's story
**Content:**
- Violeta's background & philosophy
- Why she started Love, Violeta Rose
- Team (if applicable)
- Personal photos
- Values & approach
**Links TO:** `/consultation`, `/films`
**Links FROM:** Footer, possibly header "About" menu

### 2. **Blog/Journal** 🆕 SUGGESTED
**Proposed URL:** `/journal` or `/blog`
**Purpose:** SEO, showcase expertise, inspire couples, share recent work
**Content:**
- Real weddings (detailed stories)
- Planning tips
- Vendor recommendations
- Behind-the-scenes
- Inspiration boards
**Links TO:** `/consultation`, `/offerings/[collection]`, `/films`
**Links FROM:** Header navigation, homepage

### 3. **Testimonials/Reviews Page** 🆕 SUGGESTED
**Proposed URL:** `/testimonials` or `/reviews`
**Purpose:** Social proof, build credibility
**Content:**
- Full client testimonials
- Video testimonials (if available)
- Review aggregation (Google, WeddingWire, The Knot)
**Links TO:** `/consultation`
**Links FROM:** Header navigation, homepage, offerings pages

### 4. **FAQ Page** 🆕 SUGGESTED
**Proposed URL:** `/faq`
**Purpose:** Answer common questions, reduce consultation form friction
**Content:**
- Pricing questions
- Process questions
- Technical questions (formats, delivery, etc.)
- Travel & availability
**Links TO:** `/consultation`, `/process`, `/offerings`
**Links FROM:** Footer, possibly header, offerings pages

### 5. **Individual Film Pages** 🆕 CONSIDERATION
**Proposed URL:** `/films/[slug]` (e.g., `/films/selene-and-isidro`)
**Purpose:** Deep dive into each wedding story, SEO, shareable links
**Content:**
- Full film embed
- Couple's story
- Event details
- Photo gallery
- Vendor credits
**Links TO:** `/consultation`, related offerings
**Links FROM:** `/films` grid, homepage signature work

### 6. **Resources/Planning Tools** 🆕 CONSIDERATION
**Proposed URL:** `/resources`
**Purpose:** Lead generation, provide value, build email list
**Content:**
- Wedding planning checklist
- Timeline templates
- Vendor questionnaire
- Music licensing info
- Gated content (email signup)
**Links TO:** `/consultation`
**Links FROM:** Header navigation, blog posts

### 7. **Contact Page Consolidation** 🔄 IMPROVE
**Current:**
- `/contact/inquiry` (simple form)
- `/consultation` (comprehensive form)

**Consideration:**
- Create `/contact` as hub page
- Explain differences between inquiry vs. consultation
- Let users choose their path
- Better UX than having two separate entry points

---

## 🎯 SEO & Link Optimization Recommendations

### Internal Linking Strategy
1. **Homepage** should link to ALL main sections (currently good ✅)
2. **Offerings pages** should cross-link to each other ("Also consider...")
3. **Process page** should link to relevant offerings
4. **Blog posts** (if created) should link to offerings, films, consultation
5. **Every page** should have at least ONE CTA to `/consultation`

### Missing Breadcrumbs
Consider adding breadcrumbs to:
- Offering sub-pages (e.g., `Home > Offerings > Elopements`)
- Film individual pages (if created)
- Blog posts (if created)

### Footer Navigation
Ensure footer includes:
- All main pages
- Social media links (Instagram, Vimeo) ✅
- Legal pages (Privacy Policy, Terms - currently missing?)

---

## 📱 Mobile Experience Check

All pages should prioritize mobile:
- Full-screen sections ✅ (just implemented!)
- Touch-friendly navigation
- Optimized video loading
- Simplified forms on mobile
- Sticky header ✅

---

## 🔐 Missing Legal/Required Pages

### Recommended Additions:
1. **Privacy Policy** (`/privacy`)
   - Required for GDPR, email collection
   - Explain data usage, analytics

2. **Terms of Service** (`/terms`)
   - Contract terms
   - Usage rights
   - Booking policies

3. **Accessibility Statement** (`/accessibility`)
   - WCAG compliance
   - Contact for accessibility issues

---

## 📈 Analytics & Conversion Tracking

### Key Conversion Points:
1. ✅ Consultation form submission → `/consultation/success`
2. ✅ Inquiry form submission → `/consultation/success`
3. Film views (Vimeo embeds)
4. Outbound clicks (social media, Vimeo full-screen)
5. Navigation mega menu clicks

### Recommended Goal Tracking:
- Time on site
- Pages per session
- Most viewed films
- Most popular offerings
- Form abandonment rates
- CTA button click rates

---

## 🎨 Visual Sitemap

```
┌─────────────────────────────────────────────────────────┐
│                    HOMEPAGE (/)                          │
│  • Hero (video + CTAs)                                  │
│  • Choose Your Story (4 offerings)                      │
│  • Signature Work (3 films)                             │
│  • Contact CTA                                          │
└─────┬───────────────────────────────────────────────────┘
      │
      ├─────> /films (NEW!)
      │       └─> Carousel + Grid + CTAs
      │
      ├─────> /offerings
      │       ├─> /elopements
      │       ├─> /wedding-day-films
      │       ├─> /destination-weddings
      │       └─> /adventure-sessions
      │
      ├─────> /process
      │
      ├─────> /consultation (Comprehensive Form)
      │       └─> /success
      │
      └─────> /contact/inquiry (NEW! Simple Form)
              └─> /success (shared)

POTENTIAL ADDITIONS:
├─> /about (Tell Violeta's story)
├─> /journal (Blog/real weddings)
├─> /testimonials (Social proof)
├─> /faq (Answer questions)
├─> /resources (Planning tools)
├─> /privacy (Legal)
└─> /terms (Legal)
```

---

## 🚀 Priority Implementation Roadmap

### Phase 1: Polish Current Structure ✅ COMPLETE
- [x] Fix scrolling issues (remove snap behavior)
- [x] Make all sections full-screen
- [x] Create Films page with carousel
- [x] Create inquiry form page
- [x] Update navigation to reflect actual films
- [x] Create inquiry API endpoint

### Phase 2: Content & Trust (SUGGESTED NEXT)
- [ ] Create About/Story page
- [ ] Add Testimonials page
- [ ] Add FAQ page
- [ ] Add Privacy Policy & Terms

### Phase 3: Content Marketing (FUTURE)
- [ ] Set up Blog/Journal
- [ ] Create individual film pages
- [ ] Add Resources section
- [ ] Email capture integration

### Phase 4: Optimization (ONGOING)
- [ ] A/B test CTAs
- [ ] Optimize form conversion
- [ ] Improve mobile experience
- [ ] SEO optimization
- [ ] Performance optimization

---

## 📝 Notes

- All full-screen sections now implemented ✅
- Scrolling issues fixed (removed SmoothSnapScroll) ✅
- Two inquiry paths: simple (`/contact/inquiry`) and comprehensive (`/consultation`) ✅
- Films page fully functional with carousel ✅
- Navigation updated with correct film names ✅
- API endpoints created for both forms ✅

**Next Steps:**
1. Test all navigation flows
2. Review mobile experience
3. Consider adding About page
4. Plan blog/journal strategy
5. Add legal pages (privacy, terms)

---

*Last Updated: 2025-11-17*
*Website: Love, Violeta Rose (lovevioletarose.com)*
