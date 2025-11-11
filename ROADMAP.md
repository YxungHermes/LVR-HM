# Love, Violeta Rose — Website Roadmap

This document tracks planned features and improvements for the LVR website.

---

## 🎯 High Priority

### Tradition / Cultural Context Pages
**Status:** Planned
**Timeline:** Q1 2025
**Effort:** Medium (2-3 weeks)

Create individual SEO-optimized pages for each wedding tradition/cultural context.

#### Why This Matters
- **SEO**: Each page targets specific searches ("Hindu wedding videographer", "Jewish wedding filmmaker")
- **Trust**: Demonstrates cultural competence and experience
- **Marketing**: Shareable content for specific communities
- **Cost**: Essentially free - static pages cost nothing to host on Vercel

#### Pages to Create (21 main traditions)
Based on `data/traditions.ts`:

**Priority Tier 1** (Most common in your market):
- `/traditions/hindu-wedding` - Hindu Wedding (Vedic)
- `/traditions/jewish-wedding` - Jewish Wedding
- `/traditions/christian-catholic-wedding` - Christian Wedding — Catholic
- `/traditions/sikh-wedding` - Sikh Wedding (Anand Karaj)
- `/traditions/muslim-wedding` - Muslim Wedding (Nikah/Walima)
- `/traditions/chinese-wedding` - Chinese Wedding (Tea Ceremony)
- `/traditions/korean-wedding` - Korean Wedding (Paebaek)

**Priority Tier 2** (Expand coverage):
- `/traditions/persian-wedding` - Persian Wedding (Sofreh Aghd / Aroosi)
- `/traditions/greek-orthodox-wedding` - Greek Orthodox Wedding
- `/traditions/filipino-wedding` - Filipino Wedding (Cord & Veil)
- `/traditions/vietnamese-wedding` - Vietnamese Wedding
- `/traditions/nigerian-wedding` - Nigerian Wedding
- `/traditions/american-traditional-wedding` - American Wedding (Traditional/Non-religious)
- `/traditions/civil-ceremony` - Civil Ceremony / City Hall

**Priority Tier 3** (Complete coverage):
- All remaining traditions from `data/traditions.ts`

#### Content Structure for Each Page

```markdown
# [Tradition Name] Wedding Films

## Overview
- Brief, respectful description of the tradition
- What makes it unique and beautiful to film
- Your experience filming this tradition

## Key Moments We Capture
- Timeline of ceremony/event
- Sacred moments that must be filmed
- Cultural elements to highlight
- Common venue types

## What to Expect
- Typical duration
- Important rituals/customs
- Family dynamics and roles
- Pre/post-ceremony events

## Planning Tips
- Timeline recommendations
- What couples should communicate to vendors
- Common questions answered

## Featured Films
- 2-3 example wedding films from this tradition
- Testimonials from couples

## Book Your Consultation
- CTA to consultation page with tradition pre-selected

## SEO Elements
- Meta title: "[Tradition] Wedding Videographer | Love, Violeta Rose"
- Meta description: Optimized for local + tradition keywords
- Schema markup for LocalBusiness + Service
```

#### Technical Implementation

**File structure:**
```
app/
  traditions/
    page.tsx              # Main traditions index/gallery
    [slug]/
      page.tsx            # Dynamic tradition detail page
      layout.tsx          # Shared layout
data/
  traditions.ts           # Already exists - tradition list
  traditions-content/
    hindu-wedding.md      # Markdown content for each tradition
    jewish-wedding.md
    ...
```

**Features:**
- Dynamic routes using Next.js App Router
- Static generation at build time (ISR for updates)
- Breadcrumbs for navigation
- Related traditions sidebar
- Consultation CTA with tradition pre-selected
- Rich snippets / Schema markup
- Open Graph images for social sharing

**Phase 1:** Create 5-7 high-priority pages with real content
**Phase 2:** Add remaining pages with template content
**Phase 3:** Enhance with video embeds and testimonials

---

## 📌 Other Planned Features

### Pinterest Integration Enhancement
**Status:** ✅ Completed (2025-01)
- OAuth connect flow
- Board selection UI
- Paste link fallback

### Tradition Selector
**Status:** ✅ Completed (2025-01)
- Comprehensive dropdown with 21+ traditions
- Multicultural/interfaith picker
- Form validation

### Future Enhancements
- Email/CRM integration for form submissions (Resend, Dubsado)
- Client portal for film delivery
- Blog section for wedding tips and behind-the-scenes
- Case studies / featured weddings
- Film gallery with tradition filters
- Instagram feed integration on homepage

---

## 💡 Notes on Costs

**Static Pages (Tradition pages, blog posts, etc.):**
- Cost: $0 additional on Vercel free tier
- Build time impact: Negligible (30s for 50 pages)
- Storage: Minimal (text/HTML is tiny)
- Recommendation: Create as many as needed

**Dynamic Features (Forms, auth, databases):**
- May require paid plans at scale
- Monitor usage and upgrade as needed

**Media (Images, videos):**
- This is where costs come in
- Use optimized images (Next.js Image component)
- Consider CDN for video hosting (Vimeo, YouTube)
- Current setup already optimized

---

## 🚀 How to Use This Roadmap

1. **Prioritize by business impact** - SEO pages = qualified traffic
2. **Build incrementally** - 5 pages → test → add more
3. **Measure results** - Track Google Search Console for tradition keywords
4. **Iterate content** - Update based on which pages perform best

**Questions or want to prioritize differently?** Update this file!
