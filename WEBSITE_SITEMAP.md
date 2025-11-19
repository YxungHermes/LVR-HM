# Love, Violeta Rose - Complete Website Sitemap

*Last Updated: 2025-11-19*

---

## 🗺️ Complete Site Structure

```
/ (Homepage)
├── /films
├── /about
├── /weddings (Wedding Traditions Hub)
│   ├── /catholic
│   ├── /hindu
│   ├── /muslim
│   ├── /jewish
│   ├── /greek-orthodox
│   ├── /chinese
│   ├── /nigerian
│   ├── /korean
│   ├── /filipino
│   ├── /sikh
│   └── /mexican
├── /offerings
│   ├── /elopements
│   ├── /wedding-day-films
│   ├── /destination-weddings
│   └── /couples-films
├── /process
│   ├── /approach
│   ├── /what-to-expect
│   └── /investment
├── /consultation
│   └── /success
├── /briefing (Post-booking client questionnaire)
├── /contact
│   └── /inquiry
└── /login (Client portal)
```

---

## 📄 Page-by-Page Breakdown

### 🏠 **Homepage** (`/`)
**Purpose:** Primary landing, brand intro, drive conversions

**Sections:**
1. **Hero** - Video background with poster image
   - Primary CTA: "Book Consultation" → `/consultation`
   - Secondary CTA: "View Our Films" → `/films`

2. **Choose Your Story** - Full-screen section
   - Grid of 4 offering types (bento-box layout)
   - Links to:
     - Elopements → `/offerings/elopements`
     - Wedding Day Films → `/offerings/wedding-day-films`
     - Destination Weddings → `/offerings/destination-weddings`
     - Couples Films → `/offerings/couples-films`

3. **Contact CTA** - Full-screen section
   - Primary CTA: "Start Your Inquiry" → `/contact/inquiry`
   - Secondary CTA: "Book a Consultation" → `/consultation`

**What Changed:**
- ✅ Removed SignatureWork component (was showing 3 featured films)
- Now cleaner: Hero → Choose Your Story → Contact

---

### 🎬 **Films Page** (`/films`)
**Purpose:** Portfolio showcase, film carousel

**Sections:**
1. **Hero Carousel** - Full-screen interactive carousel
   - Vimeo video backgrounds for each film
   - Navigation arrows + thumbnail dots
   - "Watch Full Film" opens Vimeo in new tab

2. **All Films Grid** - Card layout of all films
   - Click to jump to carousel
   - Film info overlays

3. **CTA Section** - "Ready to Create Your Film?" → `/consultation`

**Films Featured:**
- Selene & Isidro (Utah)
- Courtney & Sterling (Connecticut)
- Brianna & Steven (New Jersey)

---

### 👰 **About Page** (`/about`)
**Purpose:** Personal connection, brand story, build trust

**Sections:**
1. **Hero** - Introduction to Michael/Violeta Rose
2. **Story** - Background and philosophy
3. **My Approach** - Filmmaking style and values
4. **Services Offered** - Grid of what's offered
5. **CTA** - Book consultation

**Navigation TO:** `/consultation`, `/films`
**Navigation FROM:** Header navigation (About)

---

### 💒 **Wedding Traditions Hub** (`/weddings`)
**Purpose:** Educational resource for couples and guests

**Overview Page Sections:**
1. **Hero** - "Understanding Cultural & Religious Wedding Traditions"
2. **Traditions Grid** - 11 tradition cards with hero images
3. **Why This Matters** - Educational value proposition
4. **CTA** - Soft CTA, purely educational (no booking pressure)

**Individual Tradition Pages:** (`/weddings/[tradition]`)

**Current Status:**
- ✅ Catholic - Complete with quickFacts, glossary, guestEtiquette
- ✅ Hindu - Complete with quickFacts, glossary, guestEtiquette
- ✅ Muslim - Complete with quickFacts, glossary, guestEtiquette
- ✅ Jewish - Complete with quickFacts, glossary, guestEtiquette
- ✅ Greek Orthodox - Complete with quickFacts, glossary, guestEtiquette
- ✅ Chinese - Complete with quickFacts, glossary, guestEtiquette
- ✅ Nigerian - Complete with quickFacts, glossary, guestEtiquette
- ✅ Korean - Complete with quickFacts, glossary, guestEtiquette
- ✅ Filipino - Complete with quickFacts, glossary, guestEtiquette
- ✅ Sikh - Complete with quickFacts, glossary, guestEtiquette
- ✅ Mexican - Complete with quickFacts, glossary, guestEtiquette

**Each Complete Tradition Page Includes:**
- Hero with tradition-specific image
- Introduction
- Quick Facts (duration, venue, dress code, guest count, music)
- Glossary of key terms with pronunciations (foreign language only)
- Guest Etiquette (8 tips for guests attending)
- Key Moments (ceremony flow)
- Cultural Considerations
- Common Questions FAQ

**Purpose:**
- Educational SEO content
- Helpful for guests preparing to attend weddings
- Position as cultural expert
- No sales pressure, purely informative

---

### 📋 **Offerings Hub** (`/offerings`)
**Purpose:** Service collections, pricing transparency

**Sections:**
1. **Hero** - "Collections & Investment"
2. **Collections Overview** - 4 main collections with pricing
3. **What's Included** - Deliverables breakdown
4. **Optional Add-ons** - Extra services available
5. **CTA** - Multiple "Book Consultation" buttons

**Sub-pages:**
- `/offerings/elopements` - Intimate weddings, micro-weddings
- `/offerings/wedding-day-films` - Full wedding day coverage
- `/offerings/destination-weddings` - Travel weddings
- `/offerings/couples-films` - Anniversary, engagement, love story films

Each sub-page has:
- Detailed description
- Pricing tiers
- What's included
- Sample timeline
- CTAs to book

---

### ⚙️ **Process Pages** (NEW STRUCTURE!)

**Main Page** (`/process`)
**Sections:**
1. **Hero** - "The Process"
2. **Your Complete Timeline** - 8 timeline cards from inquiry to delivery
3. **Why the Process Matters** - Brief philosophy
4. **Explore the Details** - 3 navigation cards pointing to subpages

**Subpage: Our Approach** (`/process/approach`)
**Sections:**
1. **Hero** - "Our Approach"
2. **Why the Process Matters** - Full expanded philosophy
3. **What We Need from You** - 5 collaborative checkpoints with timelines
4. **Testimonial** - Client quote
5. **CTA** - Links to What to Expect & Investment

**Subpage: What to Expect** (`/process/what-to-expect`)
**Sections:**
1. **Hero** - "What to Expect"
2. **Wedding Day Details** - 4-grid layout:
   - Arrival & Setup
   - Equipment & Approach
   - During the Ceremony
   - Reception & Timeline
3. **CTA** - Link to Investment & Consultation

**Subpage: Investment & Payment** (`/process/investment`)
**Sections:**
1. **Hero** - "Investment & Payment"
2. **How Payments Work** - 3-step payment structure
3. **What's Included** - Comprehensive grid of deliverables
4. **Optional Add-ons** - Extra services with pricing
5. **FAQ Section** - 10 common questions answered
6. **Still Have Questions CTA** - Book consultation

**What Changed:**
- ✅ Split massive single /process page into 4 focused pages
- ✅ Removed redundant Roadmap component (save for consultation success only)
- ✅ Clean information architecture with natural flow
- ✅ Cross-page CTAs guide user journey

---

### 📝 **Consultation Page** (`/consultation`)
**Purpose:** Comprehensive booking form for serious inquiries

**Form Sections:**
1. Your Information (names, email, phone, role)
2. Event Details (type, date, location, tradition, venue)
3. Your Story (how you met, film feel preferences)
4. Pinterest Inspiration Board integration
5. Investment & Preferences (budget, contact method)
6. Additional Notes

**Success Page:** `/consultation/success`
- Shows Roadmap component (1-8 step process)
- Confirmation message
- What happens next

**Navigation TO:** `/consultation/success`
**Navigation FROM:**
- Homepage Hero (primary CTA)
- Films page
- All offerings pages
- Process pages
- Header (Book Consultation button)

---

### 📧 **Contact Inquiry Page** (`/contact/inquiry`)
**Purpose:** Quick, simple contact form for initial inquiries

**Form Sections:**
1. Tell Me About You (names, email, phone)
2. Your Celebration (event type, date, location)
3. Your Vision (message/details)

**Navigation TO:**
- `/consultation/success` (shared success page)
- `/consultation` (upgrade link)

**Navigation FROM:**
- Homepage Contact section

---

### 📋 **Briefing Page** (`/briefing`)
**Purpose:** Post-booking client questionnaire for booked couples

**Form Sections:**
1. Basic Information
2. Event Details
3. Shot List / Must-Capture Moments
4. Music Preferences
5. Deliverable Preferences
6. Special Requests

**Access:** Typically sent to clients after booking
**Navigation:** Limited (internal tool)

---

### 🔐 **Login Page** (`/login`)
**Purpose:** Client portal access (future development)

**Current Status:** Placeholder/basic implementation
**Future Use:** Client gallery access, file sharing, communication

---

## 🧭 Header Navigation Structure

**Left Side:**
- **Home** → `/`
- **Films** → `/films`
- **About** → `/about`
- **Offerings** → `/offerings`
  - Dropdown:
    - Elopements → `/offerings/elopements`
    - Wedding Day Films → `/offerings/wedding-day-films`
    - Destination Weddings → `/offerings/destination-weddings`
    - Couples Films → `/offerings/couples-films`

**Right Side:**
- **Process** → `/process`
  - Dropdown:
    - Our Approach → `/process/approach`
    - What to Expect → `/process/what-to-expect`
    - Investment → `/process/investment`
- **Book Consultation** (Primary CTA button) → `/consultation`

---

## 🎯 Key User Journeys

### Journey 1: High Intent (Direct Booking)
```
/ → Book Consultation → /consultation → /consultation/success ✅
```

### Journey 2: Portfolio First
```
/ → View Films → /films → Watch → Book → /consultation → Success ✅
```

### Journey 3: Price Discovery
```
/ → Choose Your Story → /offerings/[type] → Review Pricing → Book → /consultation → Success ✅
```

### Journey 4: Quick Inquiry (Low Friction)
```
/ → Contact CTA → /contact/inquiry → Submit → Success ✅
OR upgrade to → /consultation
```

### Journey 5: Educational (Wedding Traditions)
```
Google Search "Hindu wedding traditions"
→ /weddings/hindu
→ Learn about ceremony
→ Soft CTA to /consultation (if they're planning a wedding)
```

### Journey 6: Process Understanding
```
/ → Process → /process
→ Explore: /process/approach, /process/what-to-expect, /process/investment
→ CTA to /consultation
```

---

## 📊 Pages Missing / Future Considerations

### High Priority (Suggested)
1. **Testimonials Page** (`/testimonials`)
   - Client reviews
   - Video testimonials
   - Social proof aggregation

2. **FAQ Page** (`/faq`)
   - Answer common questions
   - Reduce consultation friction
   - SEO benefit

3. **Privacy Policy** (`/privacy`) - LEGAL REQUIREMENT
   - GDPR compliance
   - Data usage

4. **Terms of Service** (`/terms`) - LEGAL REQUIREMENT
   - Contract terms
   - Booking policies

### Medium Priority (Future)
1. **Blog/Journal** (`/journal` or `/blog`)
   - Real wedding stories
   - Planning tips
   - SEO content
   - Recent work showcase

2. **Individual Film Pages** (`/films/[slug]`)
   - Deep dive per wedding
   - Couple's story
   - SEO benefit
   - Shareable links

3. **Resources Page** (`/resources`)
   - Planning checklists
   - Timeline templates
   - Lead generation

---

## 🎨 Visual Site Map

```
                    ┌─────────────┐
                    │  HOMEPAGE   │
                    │      /      │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐      ┌─────▼─────┐     ┌─────▼─────┐
   │  FILMS  │      │  ABOUT    │     │ WEDDINGS  │
   │ /films  │      │  /about   │     │ /weddings │
   └─────────┘      └───────────┘     └─────┬─────┘
                                             │
                                      ┌──────┴──────┐
                                      │ 11 Tradition│
                                      │   Pages     │
                                      └─────────────┘
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐      ┌─────▼─────┐     ┌─────▼─────┐
   │OFFERINGS│      │ PROCESS   │     │CONSULTATION│
   │/offerings│     │ /process  │     │/consultation│
   └────┬────┘      └─────┬─────┘     └─────┬─────┘
        │                 │                  │
   ┌────┴────┐      ┌─────┴─────┐          │
   │4 Service│      │3 Subpages:│          │
   │  Pages  │      │ approach  │          │
   └─────────┘      │ what-to-  │          │
                    │  expect   │          │
                    │ investment│          │
                    └───────────┘          │
                                           │
                    ┌──────────────────────┘
                    │
             ┌──────▼──────┐
             │   SUCCESS   │
             │  /success   │
             └─────────────┘
```

---

## ✨ Recent Major Changes

### November 19, 2025
- ✅ Removed SignatureWork from homepage (cleaner flow)
- ✅ Split Process page into 4 focused subpages
- ✅ Removed Roadmap from /process (keep only on success page)
- ✅ Added educational sections to all 11 wedding traditions (quickFacts, glossary, guestEtiquette)
- ✅ Removed all em dashes site-wide (except testimonial attributions)
- ✅ Removed pronunciation guides for English terms
- ✅ Removed duration times from all keyMoments

### Previous Updates
- ✅ Created Films page with carousel
- ✅ Created Contact Inquiry page
- ✅ Added About page
- ✅ Created Wedding Traditions hub with 11 traditions
- ✅ Made all sections full-screen
- ✅ Updated navigation structure

---

## 🚀 Implementation Roadmap

### ✅ Phase 1: Core Pages (COMPLETE)
- [x] Homepage with Hero, Choose Your Story, Contact
- [x] Films page with carousel
- [x] Offerings hub + 4 sub-pages
- [x] Process overview + 3 sub-pages
- [x] Consultation form
- [x] Contact inquiry form
- [x] About page
- [x] Wedding traditions hub + 11 tradition pages
- [x] Briefing questionnaire

### ✅ Phase 2: Polish & Content (COMPLETE)
- [x] Remove unnecessary CTAs
- [x] Clean up copy (remove AI tells)
- [x] Add educational content to all 11 wedding traditions
- [x] Complete educational sections (quickFacts, glossary, guestEtiquette) for all traditions

### 🚧 Phase 2.5: Additional Content (PENDING)
- [ ] Add testimonials to relevant pages
- [ ] Create FAQ page
- [ ] Add Privacy Policy
- [ ] Add Terms of Service

### 📅 Phase 3: Content Marketing (FUTURE)
- [ ] Blog/Journal system
- [ ] Individual film pages
- [ ] Resources/downloads
- [ ] Email capture integration

### 📅 Phase 4: Optimization (ONGOING)
- [ ] A/B test CTAs
- [ ] Optimize form conversion
- [ ] Mobile experience improvements
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Analytics setup

---

## 📈 SEO Strategy

### Primary Keywords Target
- "NYC wedding videographer"
- "NYC wedding filmmaker"
- "Luxury wedding films NYC"
- "Destination wedding videographer"
- "Elopement videographer"
- "[Culture] wedding traditions" (Hindu, Jewish, Muslim, etc.)

### Content Strategy
- Wedding traditions pages for educational SEO
- Blog posts for long-tail keywords
- Individual film pages for location-based SEO
- Process pages for service-based queries

---

## 📱 Mobile Optimization Status

### ✅ Optimized
- Full-screen sections
- Touch-friendly navigation
- Responsive forms
- Optimized video loading
- Sticky header

### 🔄 Needs Review
- Form input sizes on mobile
- Video carousel swipe gestures
- Long page scroll performance

---

*Website: lovevioletarose.com*
*Documentation maintained in: `/WEBSITE_SITEMAP.md`*
