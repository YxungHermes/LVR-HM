# Love, Violeta Rose - Site Improvement Notes

**Status**: Website is currently down - safe to add extensive notes
**Last Updated**: 2025-11-20
**Priority Legend**: 🔴 High | 🟡 Medium | 🟢 Low

---

## 1. BRANDING & IDENTITY

### 1.1 Contact Information Updates
**Priority**: 🔴 High - Affects credibility

- [ ] **Email Domain**: Update `contact@michael-andrade.com` to match new brand
  - Location: `/app/briefing/page.tsx:1232`
  - Suggested: `hello@violetarose.com` or `contact@violetarose.com`

- [ ] **About Page Social Links**: Update generic placeholder URLs
  - Location: `/app/about/page.tsx:140-168`
  - Instagram: Change from `https://instagram.com` to `https://instagram.com/lovevioletarose`
  - Vimeo: Change from `https://vimeo.com` to `https://vimeo.com/lovevioletarose`
  - LinkedIn: Update or remove if not applicable

- [ ] **About Page Website Link**: Currently shows "VIOLETAROSE.COM" but links to `https://violetarose.com`
  - Location: `/app/about/page.tsx:124`
  - Verify correct domain and update if needed

### 1.2 Profile Images
**Priority**: 🔴 High - Visual branding

- [ ] **About Page**: Change photographer reference
  - Location: `/app/about/page.tsx:178`
  - Current: `michael-andrade.jpg`
  - Update to: `violeta-rose.jpg` or appropriate headshot
  - Alt text: Change from "Michael Andrade - Wedding Filmmaker" to "Violeta Rose - Wedding Filmmaker"

- [ ] **Footer Photo**: Already references violeta-rose.jpg
  - Location: `/components/Footer.tsx:32`
  - ✅ Correct reference, just needs file upload to `/public/media/violeta-rose.jpg`

---

## 2. VISUAL ASSETS - IMAGE PLACEHOLDERS

### 2.1 Testimonials Section
**Priority**: 🔴 High - Social proof

Need 4 couple photos for testimonials:
- [ ] `/public/testimonials/couple-1.jpg` - Sarah & Michael (Multicultural wedding)
- [ ] `/public/testimonials/couple-2.jpg` - Priya & Raj (Hindu wedding)
- [ ] `/public/testimonials/couple-3.jpg` - David & Jonathan (Korean wedding)
- [ ] `/public/testimonials/couple-4.jpg` - Emma & James (Catholic wedding)

**Specs**:
- Aspect ratio: 4:3 or similar landscape
- Resolution: 1200x900px minimum
- Format: JPG or WebP
- Facial features visible, emotional moments preferred

**Note**: Component has gradient placeholder fallback with couple initials

### 2.2 About Page Service Image
**Priority**: 🟡 Medium

- [ ] Create/upload service image: `/public/media/about-service.jpg`
  - Location placeholder: `/app/about/page.tsx:217-231`
  - Aspect ratio: 4:5 (portrait)
  - Suggested content: Behind-the-scenes filming or wedding detail
  - Current: Gray placeholder with specs visible

### 2.3 Cultural Wedding Hero Images
**Priority**: 🟡 Medium - Enhanced storytelling

All 11 cultural wedding pages support optional hero images:
- [ ] `/public/weddings/catholic-hero.jpg`
- [ ] `/public/weddings/jewish-hero.jpg`
- [ ] `/public/weddings/hindu-hero.jpg`
- [ ] `/public/weddings/muslim-hero.jpg`
- [ ] `/public/weddings/greek-orthodox-hero.jpg`
- [ ] `/public/weddings/chinese-hero.jpg`
- [ ] `/public/weddings/nigerian-hero.jpg`
- [ ] `/public/weddings/korean-hero.jpg`
- [ ] `/public/weddings/filipino-hero.jpg`
- [ ] `/public/weddings/sikh-hero.jpg`
- [ ] `/public/weddings/mexican-hero.jpg`

**Specs**:
- Aspect ratio: 16:9 or similar
- Resolution: 1920x1080px minimum
- Show cultural-specific ceremony moments
- Fallback: Gradient backgrounds (already implemented)

---

## 3. CONVERSION OPTIMIZATION

### 3.1 Homepage Improvements
**Priority**: 🔴 High

- [ ] **Add Film Showcase**: Consider adding a "Latest Work" or "Featured Films" section
  - Could use 2-3 Vimeo embeds with film metadata
  - Place between ChooseYourStory and Testimonials sections

- [ ] **Packages Section**: Currently commented out in code
  - Location: `/app/page.tsx:26-27`
  - Decision needed: Re-enable or remove completely?
  - If re-enabling, update pricing and details in `/content/home.ts:82-143`

- [ ] **Trust Signals**: Add to hero or early in homepage
  - Years of experience
  - Number of weddings filmed
  - Awards or features
  - Client satisfaction metrics

### 3.2 Contact & CTA Enhancement
**Priority**: 🟡 Medium

- [ ] **Phone Number Consistency**: Verify (347) 774-7840 is correct
  - Found in: `/app/briefing/page.tsx:1235`
  - Ensure it appears consistently across all CTAs

- [ ] **Consultation Success Page**: Review messaging
  - Location: `/app/consultation/success/page.tsx`
  - Add next steps, timeline expectations
  - Consider thank you video or personal message

- [ ] **Add Urgency Elements**: Where appropriate
  - "Limited dates available for [year]"
  - Calendar integration showing availability
  - Booking timeline indicators

### 3.3 Forms & User Experience
**Priority**: 🟡 Medium

- [ ] **Consultation Form**: Currently 775 lines (wizard style)
  - Consider A/B testing shorter version
  - Add progress saving (local storage)
  - Auto-save draft functionality

- [ ] **Briefing Form**: 1,262 lines (accordion style)
  - Good for booked clients
  - Consider adding file upload for timeline PDFs
  - Timeline link parsing could be automated

---

## 4. CONTENT & COPYWRITING

### 4.1 About Page Updates
**Priority**: 🟡 Medium

- [ ] **Bio Text**: Review for brand voice alignment
  - Location: `/app/about/page.tsx:193-197`
  - Current mentions "A videographer" - consider "I'm Violeta Rose, and I..."
  - References "mission" and "my approach" - ensure consistent first/third person

- [ ] **Services Descriptions**: Well-written, consider expanding
  - Location: `/app/about/page.tsx:59-80`
  - Add specific deliverables or sample timelines
  - Link to relevant portfolio pieces

### 4.2 SEO & Metadata
**Priority**: 🟡 Medium

- [ ] **Meta Descriptions**: Review for all pages
  - Homepage: ✅ Good
  - Individual offering pages: Check consistency
  - Cultural wedding pages: Add unique descriptions

- [ ] **Schema Markup**: Add structured data
  - Organization schema
  - Service schema for offerings
  - Review schema for testimonials
  - Video schema for embedded films

- [ ] **Open Graph Images**: Create social sharing images
  - 1200x630px for Facebook/LinkedIn
  - 1200x600px for Twitter
  - Custom per page type (weddings, offerings, etc.)

---

## 5. TECHNICAL IMPROVEMENTS

### 5.1 Performance Optimization
**Priority**: 🟢 Low

- [ ] **Image Optimization**: Once real images added
  - Use Next.js Image component (already in use ✅)
  - Ensure proper `sizes` attribute
  - Consider WebP with JPG fallback
  - Lazy loading for below-fold images

- [ ] **Video Loading**: Vimeo embeds
  - Consider lazy loading iframes below fold
  - Add loading="lazy" attribute where possible
  - Preconnect already implemented ✅

- [ ] **Font Loading**: Currently using Google Fonts
  - Location: `/app/layout.tsx:12-25`
  - Using `display: swap` ✅
  - Consider self-hosting for performance

### 5.2 Analytics & Tracking
**Priority**: 🟡 Medium

- [ ] **Event Tracking**: Already implemented for CTAs ✅
  - Verify all CTAs have tracking
  - Add scroll depth tracking to more pages
  - Form abandonment tracking

- [ ] **Conversion Tracking**: Set up goals
  - Consultation form submissions
  - Briefing form completions
  - Film video plays
  - Social link clicks

- [ ] **Heat Mapping**: Consider Hotjar or Microsoft Clarity
  - Understand user behavior
  - Identify confusion points
  - Optimize layout based on data

### 5.3 Accessibility
**Priority**: 🟡 Medium

- [ ] **Color Contrast**: Review all text/background combinations
  - Hero text on video background
  - Light text on warm-sand backgrounds
  - Form field labels and errors

- [ ] **Keyboard Navigation**: Test all interactive elements
  - Focus states (already has focus-ring class ✅)
  - Modal/accordion keyboard controls
  - Skip links for long pages

- [ ] **Screen Reader Testing**:
  - Video iframe titles ✅ (implemented)
  - Form field associations
  - Dynamic content announcements

- [ ] **ARIA Labels**: Review and enhance
  - Navigation menus (mega menus)
  - Accordions (already has aria-expanded ✅)
  - Carousel controls on films page

---

## 6. MOBILE EXPERIENCE

### 6.1 Touch Targets & Spacing
**Priority**: 🟡 Medium

- [ ] **Films Page Carousel**: Test swipe gestures
  - Location: `/app/films/page.tsx:68-79`
  - Already has drag functionality ✅
  - Test on various devices
  - Ensure arrows are easy to tap

- [ ] **Mega Menu on Mobile**: Test thoroughly
  - Header navigation
  - Ensure all traditions are accessible
  - Consider simplified mobile nav

- [ ] **Form Inputs**: Mobile keyboard optimization
  - type="tel" for phone ✅
  - type="email" for email ✅
  - type="date" for dates ✅
  - Ensure proper input modes

### 6.2 Mobile Layout Improvements
**Priority**: 🟢 Low

- [ ] **ChooseYourStory Section**: Grid on mobile
  - Currently stacks to single column
  - Consider 2-column grid on tablet
  - Test touch interactions

- [ ] **Timeline Components**: Cultural wedding pages
  - Collapsible sections work well ✅
  - Ensure badges don't wrap awkwardly
  - Test on small screens (320px)

---

## 7. FEATURE ENHANCEMENTS

### 7.1 Interactive Elements
**Priority**: 🟢 Low - Nice to have

- [ ] **Film Filtering**: On films page
  - Filter by tradition (Catholic, Jewish, etc.)
  - Filter by style (Cinematic, Documentary)
  - Filter by location
  - Filter by season

- [ ] **Before/After Slider**: For editing showcase
  - Show raw footage vs. final edit
  - Color grading comparisons
  - Demonstrates value

- [ ] **Calendar Integration**: For availability
  - Show booked vs. available dates
  - Reduce back-and-forth
  - Calendly or similar integration

### 7.2 Content Additions
**Priority**: 🟢 Low

- [ ] **Blog/Journal**: Storytelling platform
  - Wedding planning tips
  - Cultural tradition education
  - Behind-the-scenes content
  - Client features (with permission)

- [ ] **FAQ Section**: Common questions
  - Pricing transparency
  - Process clarity
  - Technical questions
  - Travel policies

- [ ] **Press/Features Page**: If applicable
  - Publications featured in
  - Awards won
  - Industry recognition
  - Client testimonials with media

### 7.3 Client Portal (Future)
**Priority**: 🟢 Low - Long-term

- [ ] **Client Login Area**
  - Timeline sharing
  - File delivery
  - Invoice management
  - Communication hub

---

## 8. CONTENT ACCURACY REVIEW

### 8.1 Wedding Tradition Pages
**Priority**: 🟡 Medium

Review all 11 cultural wedding pages for accuracy:
- [ ] Catholic weddings - Verify timeline and traditions
- [ ] Jewish weddings - Hora, ketubah details
- [ ] Hindu weddings - Multi-day events, rituals
- [ ] Muslim weddings - Nikah ceremony details
- [ ] Greek Orthodox - Stefana crowns, traditions
- [ ] Chinese weddings - Tea ceremony, traditions
- [ ] Nigerian weddings - Cultural variations
- [ ] Korean weddings - Pyebaek ceremony
- [ ] Filipino weddings - Unique traditions
- [ ] Sikh weddings - Anand Karaj ceremony
- [ ] Mexican weddings - Lazo, arras traditions

**Note**: Consider cultural consultant review for authenticity

### 8.2 Legal & Policies
**Priority**: 🟡 Medium

- [ ] **Privacy Policy**: Create/link
  - Form data handling
  - Analytics tracking
  - Email communications
  - GDPR compliance if serving EU

- [ ] **Terms of Service**: For bookings
  - Cancellation policy
  - Weather/emergency policies
  - Copyright and usage rights
  - Payment terms

- [ ] **Cookie Consent**: If needed
  - GA4 tracking disclosure
  - Meta Pixel disclosure
  - User consent management

---

## 9. QUICK WINS - DO FIRST

These can be implemented immediately:

1. ✅ **Replace emojis with SVG icons** - COMPLETED
2. [ ] **Update email from michael-andrade.com** to brand email
3. [ ] **Fix social media links** on About page (Instagram, Vimeo)
4. [ ] **Upload violeta-rose.jpg** to `/public/media/`
5. [ ] **Review and update "About" bio** for first-person voice
6. [ ] **Add 4 testimonial couple photos** (or use current placeholders)
7. [ ] **Test all forms** on mobile devices
8. [ ] **Verify phone number** is correct everywhere
9. [ ] **Add FAQ section** to process or about page
10. [ ] **Create Open Graph images** for social sharing

---

## 10. ONGOING MAINTENANCE

### Regular Tasks
- [ ] **Monthly**: Review analytics, update content based on performance
- [ ] **Quarterly**: Update portfolio with new films
- [ ] **Bi-annually**: Review pricing, packages, offerings
- [ ] **Annually**: Full site audit, refresh testimonials, update bio

### Content Calendar
- [ ] Create 12-month content plan for blog (if adding)
- [ ] Plan seasonal promotions (engagement season, summer weddings)
- [ ] Social media integration strategy

---

## NOTES & DECISIONS NEEDED

### Brand Voice
- Current copy mixes first and third person
- Decision: Commit to "I/my/me" vs "we/our/us" vs third person
- Recommendation: First person for authenticity and connection

### Service Model
- Packages section commented out - re-enable or remove?
- Pricing transparency vs. custom quotes?
- Which deliverables to emphasize?

### Target Market
- Geographic focus (NYC-based, travels worldwide ✅)
- Cultural specialization emphasis
- Budget range positioning (current: $2,500-$6,500)

### Technology Stack
- Next.js 14 with App Router ✅
- Vimeo for video hosting ✅
- Vercel for deployment ✅
- Analytics: GA4 ✅, Meta Pixel ✅
- Missing: CRM integration, payment processing

---

## RESOURCES NEEDED

### Design Assets
- Professional headshot (Violeta Rose)
- 4 couple testimonial photos
- 1 service/BTS photo
- 11 cultural wedding hero images (optional)
- Open Graph images for social sharing

### Content
- Updated bio copy
- FAQ content
- Blog posts (if implementing)
- Video descriptions for films

### Technical
- Domain/email setup (violetarose.com email)
- CRM integration (HoneyBook, Dubsado, etc.)
- Payment processing (Stripe, PayPal)
- Contract management system

---

## PRIORITY ROADMAP

### Phase 1: Brand Alignment (Week 1)
- Email updates
- Social links
- Profile photo
- Bio copy review

### Phase 2: Visual Polish (Week 2-3)
- Testimonial photos
- About page service image
- Open Graph images
- Review all placeholder content

### Phase 3: Conversion Focus (Week 3-4)
- Form optimization
- FAQ section
- Trust signals
- CTA improvements

### Phase 4: Content & SEO (Week 4-6)
- Blog setup (if doing)
- Schema markup
- Cultural page accuracy review
- Meta descriptions

### Phase 5: Advanced Features (Week 6+)
- Film filtering
- Calendar integration
- Client portal planning
- Advanced analytics

---

**Next Steps**: Review this document, prioritize based on launch timeline, assign tasks, and begin Phase 1 improvements.
