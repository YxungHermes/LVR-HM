# Love, Violeta Rose — Luxury Wedding Films Homepage

A clean, DG-style homepage for a cinematic wedding film brand. Built with Next.js, TailwindCSS, and Framer Motion.

## Features

- **Full-bleed hero video** with autoplay and responsive controls
- **Sticky header** with center logo and color transitions on scroll
- **Signature work section** with hover-to-play video cards
- **Package comparison** with elegant hover reveals
- **Testimonials** with watercolor accents
- **Contact form** with 6 clean fields
- **Responsive design** optimized for all devices
- **Accessibility-first** with reduced motion support
- **Typography**: Cormorant Garamond + Inter from Google Fonts
- **Color palette**: Watercolor coffee tones (cream, espresso, rose)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production

```bash
npm run build
npm start
```

## Content Management

Edit content in `content/home.ts`:

- **Hero**: Title, subtitle, Vimeo video ID, poster image
- **Signature Work**: Wedding film reels with titles and videos
- **Packages**: Pricing, features, and descriptions
- **Testimonials**: Client quotes and details
- **Navigation**: Menu items and social links

### Hero Video

The hero section uses **Vimeo** for reliable video hosting:
- Current video: `vimeoId: "1057598499"`
- To change: Upload your video to Vimeo and update the ID in `content/home.ts`
- Vimeo's background mode ensures smooth autoplay and looping

## Media Assets

Place your media files in the `/public/media` directory:

- `hero-poster.jpg` — Hero video poster image (optional fallback)
- `reel-1.jpg`, `reel-1.mp4` — Signature work videos and posters
- `reel-2.jpg`, `reel-2.mp4`
- `reel-3.jpg`, `reel-3.mp4`

## Design Philosophy

**Short copy. Generous whitespace. Symmetry. Let the video carry the emotion.**

Inspired by clean luxury brands, this homepage prioritizes:
- Visual storytelling through video
- Minimal chrome and distraction
- High contrast and readability
- Smooth micro-interactions
- Performance and accessibility

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Google Fonts** (Cormorant Garamond, Inter)

## Customization

### Colors

Edit color tokens in `app/globals.css` and `tailwind.config.ts`:

```css
--cream: #FAF6F0;
--espresso: #2A1E17;
--coffee: #4B3621;
--rose-1: #B58B83;
--rose-2: #8B5C58;
--ink: #0F0F10;
```

### Typography

Fonts are configured in `app/layout.tsx`. To change fonts:

1. Import new Google Fonts
2. Update the `fontFamily` in `tailwind.config.ts`
3. Apply the CSS variables in your layout

## Performance Considerations

- Videos use `preload="metadata"` for faster initial load
- Lazy loading implemented for below-the-fold sections
- Motion reduced for users with `prefers-reduced-motion`
- Optimized images with Next.js Image component (when using local images)

## Browser Support

Tested and optimized for:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)

## Pricing & Consultation

### Pricing System

The pricing system is centralized in `content/pricing.ts` and includes 4 wedding film collections:

- **Elopements & Intimate Gatherings** — Starting at $2,200
- **Wedding Day Films** — Starting at $3,500
- **Destination Wedding Films** — Starting at $5,500
- **Adventure Sessions & Stories** — Starting at $1,200

**Routes:**
- `/pricing` — Overview page showing all collections
- `/pricing/elopements` — Elopement collection details
- `/pricing/wedding-day-films` — Wedding day collection details
- `/pricing/destination-weddings` — Destination collection details
- `/pricing/adventure-sessions` — Adventure sessions details

**To update pricing:**
1. Edit `/content/pricing.ts`
2. Update the `startingFrom`, `range`, and collection details
3. Changes automatically reflect across all pricing pages

### Collection Images

Collection images are stored in `/public/collections/`:

```
/public/collections/
  ├── elopements.jpg
  ├── wedding-day.jpg
  ├── destination.jpg
  └── adventure.jpg
```

**To update images:**
1. Replace files in `/public/collections/` with matching filenames
2. Recommended specs: 2000-3000px wide, landscape orientation, JPG/PNG format
3. Images use forced aspect ratios for consistent display:
   - Pricing cards: 16:10 aspect ratio
   - Detail page heroes: 21:9 aspect ratio

### Consultation Form

The consultation form is available at `/consultation` and includes:

- Contact information (name, email, phone)
- Event details (type, date, location, guest count)
- Story fields (how you met, desired film feel)
- Planner mode (for wedding planners inquiring on behalf of clients)
- Budget range and contact preferences
- Privacy consent

Form submissions can be integrated with your preferred backend or email service.

### Custom 404 Page

A branded 404 page is available at `/app/not-found.tsx` with:
- Brand voice messaging
- Quick navigation to home, consultation, and pricing
- Consistent styling with the rest of the site

## Roadmap System

The roadmap visualizes the complete client journey from inquiry to final delivery across multiple pages.

### Pages

- **Full page:** `/process` - Detailed roadmap with FAQ section
- **Mini version:** On `/pricing` - Compact horizontal timeline after explainer section
- **Post-consultation:** `/consultation/success` - Thank-you page with full roadmap

### Component

The Roadmap component is located at `/components/Roadmap.tsx` with two variants:

**Full Variant:**
- Vertical timeline with 8 distinct steps (Consultation and Proposal separated for emotional rhythm)
- Detailed descriptions for each step
- Delivery timeline section (Teaser: 2-3 weeks, Highlight: 6-8 weeks, Feature: 10-12 weeks)
- Optional CTA button

**Mini Variant:**
- Horizontal compact layout with icons
- Step numbers and titles only
- Delivery timeline note
- Optional CTA button

### Usage

```tsx
// Full variant with CTA
<Roadmap variant="full" cta />

// Mini variant without CTA
<Roadmap variant="mini" cta={false} />
```

### How to Update Steps

Edit the `roadmapSteps` array inside `/components/Roadmap.tsx` to change titles, descriptions, or icons. All three pages (process, pricing, consultation success) will automatically reflect the updates.

### Steps Included

1. **Inquiry** - You reach out and share your wedding date, location, and a bit of your story
2. **Consultation** - We meet for a relaxed conversation to understand your vision and energy as a couple
3. **Proposal** - You receive a curated proposal outlining your tailored film experience and investment
4. **Booking** - Once your date is secured, we officially begin this creative journey together
5. **Pre-Production** - We collaborate on your timeline, visual tone, and creative direction
6. **Wedding Day** - We capture your story from quiet moments to the celebration itself with artful precision
7. **Post Production** - Your footage is crafted into a timeless film through editing, color, and sound
8. **Delivery** - Your finished films arrive — cinematic, emotional, and beautifully packaged

## Finale Block (Process & Success)

A shared component that appears at the bottom of `/process` and `/consultation/success` pages to invite users to follow on Instagram and provide a warm brand sign-off.

### Component

- **Location:** `/components/FinaleBlock.tsx`
- **Props:** None (simplified component with no configuration needed)

### Features

**Always included:**
- Instagram invitation: "A little inspiration while you wait"
  - Encourages users to follow [@lovevioletarose](https://www.instagram.com/lovevioletarose/) for recent films, color tests, and behind-the-scenes
  - Instagram icon with external link indicator
  - Rose wax red hover effects
- Brand sign-off: "Love, Violeta Rose" in elegant italic serif

### Usage

```tsx
// Simple usage on any page
<FinaleBlock />
```

**Used on:**
- `/process` - After FAQ section, provides closure to the process overview
- `/consultation/success` - After "While you wait" cards, provides calm closing after form submission

### Design

- Background: warm sand (`bg-warm-sand/30`)
- Typography: Playfair Display italic for "Love, Violeta Rose" sign-off
- Instagram link: Rose wax red with underline and hover effects
- External link icon animates on hover (`translate-x-1`)
- Responsive spacing and Framer Motion animations
- Border separator between Instagram invitation and sign-off

## Section Divider

A reusable component that creates organic wave/mountain transitions between hero sections and content sections. Inspired by clean luxury sites, this replaces hard horizontal breaks with natural, flowing curves.

### Component

**Location:** `/components/SectionDivider.tsx`

**Props:**
- `color` (optional) - Fill color for the SVG wave, defaults to `"#FAF7F2"` (cream)
- `height` (optional) - Height of the wave effect, defaults to `"120px"`
- `flip` (optional) - Boolean to rotate the wave 180 degrees, defaults to `false`

### Usage

```tsx
// Standard wave transition from hero to content
<SectionDivider color="#FAF6F0" height="120px" />

// Flipped wave (inverted)
<SectionDivider color="#FAF6F0" height="100px" flip />

// Minimal usage (uses defaults)
<SectionDivider />
```

**Used on:**
- Homepage hero (`/components/Hero.tsx`) - Transition to ChooseYourStory section
- Pricing hero (`/app/pricing/page.tsx`) - Transition to pricing cards
- Process hero (`/app/process/page.tsx`) - Transition to roadmap

### Implementation

The component uses an SVG path with `preserveAspectRatio="none"` to create a responsive, organic curve that scales smoothly across all screen sizes. It's positioned absolutely at the bottom of hero sections using `absolute bottom-0`.

**Container requirements:**
- Parent section must have `relative` positioning
- Parent section must have `overflow-hidden` to prevent overflow

### Design Philosophy

The wave divider creates a visual "dissolve" between sections, mimicking cinematic transitions. The subtle curve adds elegance without drawing attention away from content, maintaining the luxury brand aesthetic.

## License

© 2025 Love, Violeta Rose. All rights reserved.
