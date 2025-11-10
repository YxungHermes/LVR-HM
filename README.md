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

- **Hero**: Title, subtitle, video URL, poster image
- **Signature Work**: Wedding film reels with titles and videos
- **Packages**: Pricing, features, and descriptions
- **Testimonials**: Client quotes and details
- **Navigation**: Menu items and social links

## Media Assets

Place your media files in the `/public/media` directory:

- `hero-poster.jpg` — Hero video poster image
- `reel-1.jpg`, `reel-1.mp4` — Signature work videos and posters
- `reel-2.jpg`, `reel-2.mp4`
- `reel-3.jpg`, `reel-3.mp4`

Currently using Dropbox direct link for the hero video. For production, host videos on a CDN or self-host for better performance.

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

## License

© 2025 Love, Violeta Rose. All rights reserved.
