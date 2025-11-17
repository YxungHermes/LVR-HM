# About Page - Content Assets Needed

This document outlines all the content assets and information needed to complete the About Me page.

## 🖼️ Image Assets Required

### 1. Portrait Photo (PRIORITY)
- **File name suggestion**: `about-portrait.jpg` or `michael-portrait.jpg`
- **Location**: Save to `/public/media/`
- **Specifications**:
  - Aspect ratio: **3:4 portrait orientation** (e.g., 600px × 800px or 900px × 1200px)
  - Background: Warm neutral tone (beige, tan, soft cream)
  - Style: Professional, well-lit, friendly but polished
  - Subject: Professional headshot of Michael/Violeta Rose
  - Format: JPG or WebP (optimized for web)
  - Max file size: 500KB recommended

**Where to add in code**: `/app/about/page.tsx` line ~186
```tsx
<img
  src="/media/about-portrait.jpg"
  alt="Michael Andrade - Wedding Filmmaker"
  className="w-full h-full object-cover"
/>
```

---

### 2. Service/Work Image
- **File name suggestion**: `about-service.jpg` or `about-bts.jpg`
- **Location**: Save to `/public/media/`
- **Specifications**:
  - Aspect ratio: **4:5 portrait orientation** (e.g., 800px × 1000px)
  - Options for subject matter:
    - Behind-the-scenes filming shot
    - Wedding detail (bouquet, rings, decor)
    - Equipment/camera setup
    - Elegant film still from a wedding
  - Style: Editorial, complements portrait but different subject
  - Format: JPG or WebP (optimized for web)
  - Max file size: 500KB recommended

**Where to add in code**: `/app/about/page.tsx` line ~239
```tsx
<img
  src="/media/about-service.jpg"
  alt="Behind the scenes wedding filming"
  className="w-full h-full object-cover"
/>
```

---

## ✏️ Text Content to Update

### 1. Professional Information (Left Column)

**Current placeholders** (lines 153-182 in `/app/about/page.tsx`):

- **Professional Title**: Currently "Wedding Filmmaker"
  - Update to actual title (e.g., "Videographer", "Cinematographer", "Wedding Filmmaker")

- **Specialty**: Currently "Cinematic Weddings"
  - Update to actual specialty (e.g., "Wedding Videography", "Weddings", "Luxury Weddings")

- **Website**: Currently "VIOLETAROSE.COM"
  - Update to actual website URL
  - Also update the href link

### 2. Social Media Links

**Current placeholders** (lines 184-224):

Update these URLs with actual profile links:
- **Instagram**: Replace `https://instagram.com` with actual Instagram profile
- **Vimeo**: Replace `https://vimeo.com` with actual Vimeo profile
- **LinkedIn**: Replace `https://linkedin.com` with actual LinkedIn profile

**To remove a social platform**: Simply delete the entire `<a>` tag for that platform.

**To add other platforms**: Add icons/links for YouTube, TikTok, Facebook, etc.

---

### 3. Bio Paragraph (Right Column)

**Current placeholder** (lines 230-242):

The current bio is generic. Replace with a **150-200 word bio** about Michael/Violeta Rose that includes:

- Who they are as a filmmaker
- Their approach to videography
- Background/experience (music, fashion, commercial, weddings)
- What makes their work unique
- Their mission/philosophy

**Example structure**:
```
[Opening statement about capturing moments/stories]

[Background and experience - what types of projects you've worked on]

[Your approach and philosophy - what drives your work]

[What clients can expect - your unique perspective]
```

---

### 4. Services Accordion Content

**Current content** (lines 290-315 in `/app/about/page.tsx`):

The accordion currently has 5 service items with placeholder descriptions. You can:

**Option A - Keep services focus**, update descriptions to be more specific:
1. Elopements & Intimate Gatherings
2. Full Wedding Day Coverage
3. Destination Wedding Films
4. Engagement & Adventure Sessions
5. Post-Production & Delivery

**Option B - Change to process/approach focus**:
1. Initial Consultation
2. Pre-Wedding Planning
3. Wedding Day Coverage
4. Post-Production
5. Final Delivery & Support

**To edit**: Update the `services` array starting at line 290, changing the `title` and `description` fields.

---

### 5. CTA Section Heading & Text

**Current content** (lines 289-310):

- **Heading**: "Ready to Create Something Beautiful?"
- **Subheading**: "Let's discuss your vision..."

Feel free to customize this CTA section to match your voice and brand.

---

## 🎨 Optional Customizations

### Color Adjustments
The page uses your existing color scheme:
- Rose/Wine accent: `rose-wax-red` (#A14C41)
- Cream background: `cream` (#FAF7F2)
- Dark text: `ink` (#1C1A18)
- Secondary text: `espresso`/`coffee` (#7B6A5A)

All colors are already configured in your Tailwind setup.

### Typography
The page uses:
- **Serif** (headings): Playfair Display
- **Sans-serif** (body): Inter

These are already loaded via Google Fonts in your project.

---

## 📝 Quick Implementation Checklist

- [ ] 1. Add portrait photo to `/public/media/`
- [ ] 2. Add service image to `/public/media/`
- [ ] 3. Update professional title and specialty
- [ ] 4. Update website URL
- [ ] 5. Update social media links
- [ ] 6. Write custom bio paragraph (150-200 words)
- [ ] 7. Review and customize accordion content
- [ ] 8. Review CTA section text
- [ ] 9. Update image paths in code (uncomment image tags)
- [ ] 10. Test on mobile and desktop

---

## 🚀 How to Update the Page

1. **Add your images** to `/public/media/`

2. **Edit `/app/about/page.tsx`**:
   - Update text content (professional info, bio, accordion)
   - Uncomment image tags (lines ~186 and ~239)
   - Update image src paths to match your filenames
   - Update social media hrefs

3. **Test locally**:
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000/about`

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📍 Code Locations Reference

| Content | File | Line Numbers |
|---------|------|--------------|
| Professional Info | `/app/about/page.tsx` | 153-182 |
| Social Links | `/app/about/page.tsx` | 184-224 |
| Portrait Image | `/app/about/page.tsx` | ~186 |
| Bio Paragraph | `/app/about/page.tsx` | 230-242 |
| Service Image | `/app/about/page.tsx` | ~239 |
| Accordion Content | `/app/about/page.tsx` | 290-315 |
| CTA Section | `/app/about/page.tsx` | 319-337 |

---

## 💡 Additional Notes

- The page is fully responsive (mobile, tablet, desktop)
- Smooth animations are built-in using Framer Motion
- Accordion allows one item open at a time
- All interactions are accessible (keyboard navigation, ARIA labels)
- The page follows your existing design system and patterns

**Questions?** Review the code comments in `/app/about/page.tsx` for detailed implementation notes.
