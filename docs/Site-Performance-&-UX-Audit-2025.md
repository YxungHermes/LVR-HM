# Site Performance & UX Audit – 2025

Use this file as the master checklist for improving the site.

## 1. Performance / Speed

- [ ] Lighthouse scores (Desktop / Mobile):
  - Home:
  - Consultation:
  - Pricing / Offerings:
- [ ] Image strategy:
  - [ ] Proper formats (WebP/AVIF where possible)
  - [ ] Lazy-loading where needed
- [ ] Script usage:
  - [ ] Remove unused libraries
  - [ ] Check layout shift from animations

## 2. UX & Interaction

- [x] Navigation clarity (desktop + mobile) - Mobile nav with curved wipe transition implemented
- [ ] Clear primary action: **Book Consultation**
- [ ] Smooth transitions between pages
- [x] Hero section: full-height layout, scroll behavior feels intentional - Full-screen hero with snap-proximity implemented
- [ ] Mobile form experience (inputs, keyboard type, error states)

## 3. Visual Consistency

- [x] Typography scale and line-height per breakpoint - Hero refined with larger typography
- [x] Color palette usage (hero, buttons, backgrounds) - Gradient overlay and white CTAs implemented
- [ ] Iconography and micro interactions
- [ ] Book Consultation button motion (lava lamp animation) on all relevant views

## 4. SEO & Content

- [ ] Titles, meta descriptions, and OG tags
- [ ] Accessible headings (H1/H2) per page
- [ ] Alt text for key images / video poster frames
- [ ] Schema for local business / wedding services (future)

## 5. Open Issues / Ideas

Use this as a running list of improvements Claude finds:

- [ ] Test scroll snap behavior on real iOS devices (Safari address bar handling)
- [ ] Consider adding video poster image for faster perceived load
- [ ] Optimize Vimeo embed parameters for performance
- [ ] Add loading states for form submissions in Contact section
- [ ] Consider progressive enhancement for scroll affordance (works without JS)
- [ ] Test keyboard navigation through scroll sections
- [ ] Add analytics tracking for scroll depth and section engagement
