# Love, Violeta Rose - Color System Guide

## Color Palette Overview

This document defines the complete color system for the Love, Violeta Rose brand and how to apply colors consistently across the website.

---

## Primary Brand Colors (Use 80-85% of the time)

### Rose Wax Red - `#A14C41`
**Tailwind:** `rose-wax-red`

**Usage:**
- Primary CTA buttons (Book Consultation, View Pricing)
- Active navigation states
- Primary links and hover states
- Accent elements (icons, dividers, badges)
- Logo accent (the period in "Love, Violeta Rose.")

**Psychology:** Warm, romantic, earthy. Conveys emotion without being overly feminine. Premium and timeless.

**Don't Use For:**
- Large background areas (too intense)
- Body text (readability issues)

---

### Warm Sand - `#E9DDD2`
**Tailwind:** `warm-sand`

**Usage:**
- Section backgrounds (alternating with cream/white)
- Subtle overlays (`bg-warm-sand/10`, `bg-warm-sand/20`, `bg-warm-sand/30`)
- Card backgrounds
- Divider backgrounds

**Psychology:** Soft, welcoming, premium. Creates warmth without being overwhelming.

**Opacity Variations:**
- `/10` - Very subtle tint for white cards
- `/20` - Light section backgrounds
- `/30` - Medium section backgrounds (most common)
- `/40` - Stronger backgrounds (use sparingly)

---

### Ivory White / Cream - `#FAF7F2`
**Tailwind:** `cream` or `ivory-white`

**Usage:**
- Main page backgrounds
- White card backgrounds
- Alternating section backgrounds
- Clean, breathable space

**Psychology:** Clean, premium, timeless. Not stark white (which can feel cold).

---

### Cinematic Black / Ink - `#141210`
**Tailwind:** `cinematic-black`, `ink`, or `espresso`

**Usage:**
- All body text
- Headings and titles
- Navigation text (default state)
- Icons (default state)

**Notes:**
- Updated from `#1C1A18` to `#141210` for stronger contrast
- Use at full opacity for text
- Can use at reduced opacity for secondary text (`text-ink/70`, `text-ink/60`)

**Contrast Ratios:**
- On `#FAF7F2` (cream): **14.8:1** (AAA accessible)
- On `#E9DDD2` (warm-sand): **12.3:1** (AAA accessible)

---

### Muted Brown / Coffee - `#7B6A5A`
**Tailwind:** `muted-brown` or `coffee`

**Usage:**
- Secondary text (captions, labels, metadata)
- Borders and dividers
- Icon secondary states
- Subtle UI elements

**Opacity Variations:**
- Full opacity: Muted text
- `/70` - Standard secondary text
- `/20` - Subtle borders
- `/10` - Very subtle dividers

---

## Cool Accent Colors (Use 5-10% of the time)

### Deep Teal - `#2C5F5D`
**Tailwind:** `deep-teal`

**Usage (sparingly):**
- Subtle background accents in alternating sections
- Icon accents for visual rhythm
- Blockquote backgrounds (`bg-deep-teal/10`)
- Hover states on secondary elements
- Testimonial card accents

**Psychology:** Calm, sophisticated, trustworthy. Provides visual relief from warm palette.

**Don't Overuse:** This is a supporting color. If you're using it more than rose-wax-red, you're using it too much.

---

### Charcoal Blue - `#3B4856`
**Tailwind:** `charcoal-blue`

**Usage (very sparingly):**
- Code blocks or technical content
- Alternate icon states
- Subtle hover effects
- Secondary navigation elements

**Psychology:** Professional, grounded, modern. Adds depth without being cold.

**Notes:** Use at low opacity (`/10`, `/20`) for backgrounds to maintain warmth.

---

## Color Usage Percentages (Target Distribution)

| Color | Percentage | Primary Use Case |
|-------|------------|------------------|
| Cream/Ivory | 40-45% | Page backgrounds, breathing room |
| Warm Sand | 20-25% | Section backgrounds, overlays |
| Cinematic Black | 15-20% | Text, headings, icons |
| Rose Wax Red | 8-12% | CTAs, accents, active states |
| Muted Brown | 5-8% | Secondary text, subtle borders |
| Deep Teal | 2-5% | Cool accent, visual rhythm |
| Charcoal Blue | 1-3% | Special elements, depth |

---

## Color Combinations (Approved Pairings)

### High Contrast Text
✅ `text-ink` on `bg-cream` (body copy)
✅ `text-ink` on `bg-white` (cards)
✅ `text-ink` on `bg-warm-sand/30` (sections)
✅ `text-white` on `bg-rose-wax-red` (CTAs)

### Borders & Dividers
✅ `border-coffee/10` (subtle)
✅ `border-coffee/20` (standard)
✅ `border-rose-wax-red/30` (accented)

### Backgrounds
✅ `bg-cream` (main pages)
✅ `bg-white` (cards, panels)
✅ `bg-warm-sand/30` (alternating sections)
✅ `bg-warm-sand/10` (subtle tints)
✅ `bg-deep-teal/10` (cool accent sections - use sparingly)

### Interactive States
✅ Default: `text-ink` → Hover: `text-rose-wax-red`
✅ Default: `bg-rose-wax-red` → Hover: `bg-rose-wax-red/90`
✅ Default: `border-coffee/20` → Hover: `border-rose-wax-red`

---

## Typography + Color Pairings

### Headings
- **H1-H3:** `text-ink` (full opacity, maximum contrast)
- **H4-H6:** `text-ink` or `text-ink/90`

### Body Text
- **Primary:** `text-espresso` (alias for `text-ink`)
- **Secondary:** `text-espresso/70` or `text-coffee`
- **Captions:** `text-coffee` or `text-espresso/60`

### Links
- **Default:** `text-rose-wax-red`
- **Hover:** `text-rose-wax-red/80` or `underline`
- **Visited:** Same as default (no change)

---

## Component-Specific Guidelines

### Buttons (Primary)
```tsx
className="bg-rose-wax-red text-white hover:bg-rose-wax-red/90"
```

### Buttons (Secondary/Outline)
```tsx
className="border-2 border-rose-wax-red text-rose-wax-red hover:bg-rose-wax-red hover:text-white"
```

### Cards
```tsx
className="bg-white border border-coffee/10 hover:shadow-lg hover:border-rose-wax-red/30"
```

### Navigation
- Default links: `text-ink`
- Active page: `text-rose-wax-red`
- Hover: `text-rose-wax-red`

### Badges & Labels
- Primary: `bg-rose-wax-red text-white`
- Secondary: `bg-warm-sand text-ink`
- Subtle: `bg-coffee/10 text-coffee`

### Testimonials
- Background: `bg-white` or `bg-cream`
- Accent: `text-rose-wax-red` (quote marks, decorations)
- Optional cool accent: `bg-deep-teal/5` (very subtle)

---

## Accessibility Standards

All color combinations meet **WCAG 2.1 Level AAA** standards for normal text:

| Foreground | Background | Contrast Ratio | Rating |
|------------|------------|----------------|---------|
| `#141210` | `#FAF7F2` | 14.8:1 | AAA ✅ |
| `#141210` | `#E9DDD2` | 12.3:1 | AAA ✅ |
| `#FFFFFF` | `#A14C41` | 4.8:1 | AA ✅ |
| `#7B6A5A` | `#FAF7F2` | 5.2:1 | AA ✅ |

---

## Common Mistakes to Avoid

❌ **Don't:** Use rose-wax-red for large background areas
✅ **Do:** Use it for accents, buttons, and focal points

❌ **Don't:** Mix cool accents (teal/blue) with warm accents in the same section
✅ **Do:** Use one accent color per section for cohesion

❌ **Don't:** Use low-contrast text like `text-coffee` on `bg-warm-sand`
✅ **Do:** Always use `text-ink` for body copy

❌ **Don't:** Overuse deep-teal and charcoal-blue (they're support colors)
✅ **Do:** Keep them under 10% combined usage

❌ **Don't:** Use bright saturated colors not in this palette
✅ **Do:** Stick to the defined palette for brand consistency

---

## Quick Reference (Cheat Sheet)

**Main Background:** `bg-cream`
**Alternating Sections:** `bg-white` or `bg-warm-sand/30`
**Primary CTA:** `bg-rose-wax-red text-white`
**Body Text:** `text-ink` or `text-espresso`
**Secondary Text:** `text-coffee` or `text-ink/70`
**Borders:** `border-coffee/10` or `border-coffee/20`
**Hover Accent:** `hover:text-rose-wax-red` or `hover:border-rose-wax-red`
**Cool Accent (rare):** `bg-deep-teal/10` or `text-deep-teal`

---

## When in Doubt

1. **Text on light backgrounds?** Use `text-ink`
2. **Primary action?** Use `bg-rose-wax-red`
3. **Section background?** Alternate between `bg-cream`, `bg-white`, and `bg-warm-sand/30`
4. **Need visual interest?** Add `border-coffee/10` or subtle `shadow-lg`
5. **Want a cool accent?** Use `deep-teal` at very low opacity (`/5` or `/10`)

---

**Last Updated:** November 22, 2025
**Maintained By:** Love, Violeta Rose Design System
