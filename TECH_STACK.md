# Love, Violeta Rose - Tech Stack

> Last Updated: 2025-11-17
> This document helps Claude Code understand our complete technology ecosystem for better advice and automation recommendations.

## 🎯 Business Context

Wedding videography business serving NYC area
- **Brand**: Love, Violeta Rose (luxury wedding films)
- **Partners**: Sir (videography) + Caitlyn (photography)
- **Revenue model**: Package-based bookings ($1,200 - $5,500+)
- **Collections**: Elopements ($2,200), Wedding Day Films ($3,500), Destination Weddings ($5,500), Adventure Sessions ($1,200)
- **Target market**: NYC couples, $5-15k wedding budget
- **Brand voice**: Warm, authentic, cinematic storytelling (not salesy)

---

## 💻 Frontend Stack

### Framework & Core

- **Next.js**: 14.2.3
  - App Router architecture (`/app` directory)
  - API routes for backend functionality
  - Server and Client Components
  - React Strict Mode enabled
- **React**: 18.3.1
- **TypeScript**: 5.4.5
  - Strict mode enabled
  - Path aliases configured (`@/*` maps to root)
  - Target: ES2017

### Styling

- **Tailwind CSS**: 3.4.3
  - Custom brand color palette:
    - `rose-wax-red`: #A14C41 (primary brand color)
    - `warm-sand`: #E9DDD2 (soft backgrounds)
    - `ivory-white`: #FAF7F2 (light backgrounds)
    - `cinematic-black`: #1C1A18 (text/dark accents)
    - `muted-brown`: #7B6A5A (secondary text)
  - Custom font families:
    - Serif: Playfair Display (headings, elegant copy)
    - Sans: Inter (body text, UI elements)
  - PostCSS 8.4.38 + Autoprefixer 10.4.19
- **No UI component library** (custom components built from scratch)

### Animation & Interactions

- **Framer Motion**: 11.2.10
  - Page transitions
  - Scroll animations
  - Hover effects on video cards
  - Reduced motion support (`prefers-reduced-motion`)

### Icons & Utilities

- **Lucide React**: 0.553.0 (modern icon library)
- **clsx**: 2.1.1 (conditional className utility)
- **js-cookie**: 3.0.5 (client-side cookie handling)
- **cookie**: 1.0.2 (server-side cookie parsing)

### Key Pages

- `/` - Homepage with hero video and signature work
- `/about` - Team and story
- `/films` - Portfolio showcase
- `/process` - Client journey roadmap + FAQ
- `/offerings` - Package overview with detail pages:
  - `/offerings/elopements`
  - `/offerings/wedding-day-films`
  - `/offerings/destination-weddings`
  - `/offerings/adventure-sessions`
- `/contact/inquiry` - Quick inquiry form
- `/consultation` - Comprehensive briefing form (multi-step)
- `/briefing` - Alternative briefing form
- `/login` - Password-protected access

---

## 🔧 Backend & APIs

### API Routes

Located in `/app/api/`:

1. **`/api/inquiry`** (POST)
   - Quick inquiry form submissions
   - Sends formatted email via Resend
   - Fields: name, email, phone, date, location, eventType, message

2. **`/api/consultation`** (POST)
   - Comprehensive consultation form
   - Detailed wedding briefing data
   - Supports planner/parent inquiries
   - Pinterest board integration
   - Sends beautifully formatted HTML emails

3. **`/api/pinterest/connect`** (GET)
   - Initiates Pinterest OAuth flow
   - Redirects to Pinterest authorization

4. **`/api/pinterest/callback`** (GET)
   - Handles Pinterest OAuth callback
   - Exchanges code for access token

5. **`/api/pinterest/boards`** (GET)
   - Fetches user's Pinterest boards
   - Used for inspiration board selection in forms

6. **`/api/auth/login`** (POST)
   - Basic password protection
   - Cookie-based authentication
   - Protects staging/preview deployments

7. **`/api/health`** (GET)
   - Health check endpoint

8. **`/api/test-email`** (POST)
   - Email testing endpoint for development

### External APIs & Integrations

- **Resend**: 6.4.2
  - Transactional email service
  - Used for inquiry and consultation form submissions
  - Beautifully designed HTML email templates
  - Environment vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`

- **Pinterest API**
  - OAuth 2.0 authentication
  - Board browsing for client inspiration
  - Environment vars: `PINTEREST_CLIENT_ID`, `PINTEREST_CLIENT_SECRET`, `PINTEREST_REDIRECT_URI`

### Data Storage

- **No database currently**
  - Form data sent via email (Resend)
  - Static content in `/content` directory (TypeScript files)
  - Future plan: Integrate with Airtable for client records

---

## 🚀 Deployment & Hosting

### Platform

- **Vercel** (inferred from `@vercel/speed-insights` package)
  - Automatic deployments from GitHub
  - Preview deployments for pull requests
  - Environment variable management
  - CDN and edge network

### Environment Variables Needed

Required (see `.env.example`):
```bash
# Pinterest Integration
PINTEREST_CLIENT_ID=
PINTEREST_CLIENT_SECRET=
PINTEREST_REDIRECT_URI=

# Resend Email Service
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RESEND_TO_EMAIL=

# Optional: Staging Protection
STAGING_PROTECT_USERNAME=
STAGING_PROTECT_PASSWORD=

# Site Environment
NEXT_PUBLIC_SITE_ENV=development|staging|production

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-CWZ8Q1MPE3

# Meta Pixel (Facebook/Instagram Ads)
NEXT_PUBLIC_META_PIXEL_ID=
```

### Media Hosting

- **Vimeo**: Hero videos and portfolio films
  - Background mode for autoplay
  - Reliable streaming
  - Current hero video: `1057598499`
  - Embedded in signature work cards

- **Dropbox**: Static images
  - Product photos, portraits, collection images
  - Configured in `next.config.js` domains

- **Local `/public`**: Some static assets
  - `/public/collections/` - Collection hero images
  - `/public/media/` - Fallback poster images

### Performance Optimizations

- React Strict Mode
- Video preload="metadata" for faster loads
- Lazy loading for below-fold sections
- Next.js automatic image optimization
- Vercel Speed Insights tracking

---

## 🔗 Business Operations Stack

### Automation & Workflows

- **n8n** (Cloud / $20/month)
  - **Purpose**: Workflow automation between tools
  - **Key workflows** (planned):
    - Inquiry form → Airtable client record
    - Consultation submission → Email draft in Gmail
    - Pinterest board → Content inspiration in Notion
  - **Integration points**: Airtable, Gmail, Notion, Resend
  - **Auth**: Personal Access Token (PAT) for Airtable

### Client Database

- **Airtable** (planned)
  - **Purpose**: CRM and client records
  - **Planned bases**:
    - Client inquiries (from website forms)
    - Wedding bookings (active projects)
    - Vendor contacts
    - Package templates
  - **n8n integration**: Automatic record creation from forms
  - **Use case**: Replace email-only inquiry tracking with structured data

### Content Management

- **Notion**
  - **Purpose**: Internal wiki, creative planning, business documentation
  - **Key databases**:
    - Shot lists and filming templates
    - Vendor contacts
    - Business processes and SOPs
    - Content planning (blog, social media)
  - **Used by**: Both partners (Sir + Caitlyn)
  - **n8n integration**: Pull content for website updates

### Communication & Scheduling

- **Gmail**: Primary email
- **Calendly/Cal.com**: (future integration for consultation booking)

### Analytics & Tracking

- **Google Analytics 4**: GA_MEASUREMENT_ID configured
- **Meta Pixel** (Facebook/Instagram Ads): Tracking conversions
- **Vercel Speed Insights**: Performance monitoring (`@vercel/speed-insights`)
- **React Facebook Pixel**: 1.0.4 (client-side event tracking)

---

## 🛠️ Development Tools

### Code Quality

- **TypeScript**: Strict mode, full type checking
- **ESLint**: Next.js default configuration (no custom `.eslintrc.*`)
- **Prettier**: Not explicitly configured (team can add)

### Version Control

- **Git + GitHub**
- **Branch strategy**: Feature branches (`claude/*` for AI-assisted work)
- **Protection**: Main branch likely protected (PR workflow)

### Local Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
```

**No special environment setup required** - standard Next.js development flow

---

## 🎨 Media & Assets

### Video Handling

- **Vimeo**: Primary video hosting
  - Hero videos (background autoplay)
  - Portfolio film embeds
  - Signature work reels
  - **Workflow**: Upload to Vimeo → Get video ID → Update `content/home.ts`

- **No video compression pipeline** (handled by Vimeo)

### Images

- **Dropbox**: External image hosting
  - Added to `next.config.js` allowed domains

- **Local `/public`**: Collection images, posters
  - **Specs**: 2000-3000px wide, landscape, JPG/PNG
  - **Aspect ratios**:
    - Pricing cards: 16:10
    - Detail page heroes: 21:9

- **Next.js Image component**: Automatic optimization when using local images

---

## 🔮 Planned Integrations

Tools we plan to connect:

- [ ] **n8n → Airtable** - Automatic client record creation from inquiry forms
- [ ] **n8n → Gmail** - Draft personalized response emails for consultations
- [ ] **n8n → Notion** - Pull content for website blog/updates
- [ ] **Airtable → Website** - Dynamic content loading (future CMS alternative)
- [ ] **Calendly/Cal.com** - Replace manual consultation scheduling
- [ ] **Stripe/Square** - Online payment processing for deposits/invoices
- [ ] **SendGrid alternative** - Evaluate if Resend meets all needs or complement with marketing emails

---

## 📝 Notes for Claude Code

### When giving advice:

1. ✅ **Recommend solutions that integrate with n8n** - We're building an automation-first workflow
2. ✅ **Suggest Airtable-first for structured data** - It's our planned CRM, not custom databases
3. ✅ **Keep Notion for creative/content work** - Already in use by both partners
4. ✅ **Prioritize low-cost or free tools** - Bootstrapped business, tight budget
5. ✅ **Consider mobile experience** - Couples browse portfolio on phones at venues
6. ✅ **Favor API-first tools** - Everything should potentially connect to n8n
7. ✅ **Maintain brand consistency** - Use existing color palette and fonts
8. ✅ **Performance matters** - Fast load times critical for portfolio showcase
9. ✅ **SEO is important** - Organic traffic is primary acquisition channel

### Architecture decisions:

- **No custom backend** - Use API routes, Vercel serverless functions, and third-party APIs
- **No database (yet)** - Forms → Email → Manual process (soon: Forms → n8n → Airtable)
- **Static-first content** - Content in `/content/*.ts` files (TypeScript) for type safety
- **Tailwind for all styling** - No CSS Modules, no styled-components
- **Custom components over libraries** - Built from scratch for full brand control

### Performance considerations:

- Videos use `preload="metadata"` for faster initial page load
- Lazy loading for below-the-fold content
- Reduced motion support for accessibility
- Next.js automatic code splitting and tree shaking

### SEO requirements:

- Clean semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Fast page loads (Core Web Vitals)
- Mobile-first responsive design

---

## 🆘 Common Tasks

### Adding a new feature

1. Create feature branch: `git checkout -b feature/your-feature-name`
2. Make changes in `/app` or `/components`
3. Test locally: `npm run dev`
4. Build to check for errors: `npm run build`
5. Commit with clear message
6. Push and create PR

### Deploying changes

- **Automatic**: Push to `main` → Vercel deploys automatically
- **Preview**: Any PR gets a preview deployment URL
- **Environment variables**: Set in Vercel dashboard (not in repo)

### Testing integrations

- **Resend emails**: Use `/api/test-email` endpoint in development
- **Pinterest OAuth**: Update `PINTEREST_REDIRECT_URI` for localhost testing
- **n8n workflows**: Test with webhook URLs pointing to Vercel preview deployments
- **API endpoints**: Use `curl`, Postman, or Thunder Client

### Updating content

- **Homepage**: Edit `/content/home.ts`
- **Pricing**: Edit `/content/pricing.ts`
- **Colors**: Edit `/tailwind.config.ts` and `/app/globals.css`
- **Fonts**: Update Google Fonts in `/app/layout.tsx`

### Common debugging steps

1. Check browser console for client-side errors
2. Check terminal for server-side/build errors
3. Verify environment variables are set correctly
4. Clear `.next` folder: `rm -rf .next && npm run dev`
5. Check Vercel deployment logs for production issues

---

## 🔍 Repository Structure

```
/app                  # Next.js App Router pages
  /api                # API routes (serverless functions)
  /about              # About page
  /contact            # Contact/inquiry pages
  /consultation       # Consultation form
  /films              # Portfolio
  /offerings          # Pricing/packages
  /process            # Client journey
  layout.tsx          # Root layout (fonts, metadata)
  page.tsx            # Homepage

/components           # React components
  Roadmap.tsx         # Client journey timeline
  FinaleBlock.tsx     # Instagram CTA footer

/content              # Static content (TypeScript)
  home.ts             # Homepage copy
  pricing.ts          # Pricing data

/public               # Static assets
  /collections        # Collection hero images
  /media              # Video posters, fallbacks

/tailwind.config.ts   # Tailwind configuration
/next.config.js       # Next.js configuration
/tsconfig.json        # TypeScript configuration
/.env.example         # Environment variable template
```

---

## 🏷️ Technology Decision Log

**Why Next.js?**
- Server-side rendering for SEO
- API routes eliminate need for separate backend
- Vercel deployment is seamless
- Image optimization built-in
- React ecosystem and community

**Why Tailwind CSS?**
- Rapid prototyping with utility classes
- Full design control without CSS complexity
- Consistent spacing/sizing system
- PurgeCSS removes unused styles automatically
- Easy to maintain custom brand colors

**Why Resend over SendGrid?**
- Simpler API, developer-friendly
- Better email deliverability
- Modern developer experience
- Transparent pricing
- Built for transactional emails

**Why Vimeo over YouTube?**
- Professional presentation (no ads)
- Background video support
- Better brand alignment
- Privacy controls
- Reliable autoplay on mobile

**Why no traditional CMS?**
- TypeScript content files provide type safety
- No admin panel needed (only 2 team members)
- Version control for content changes
- Faster page loads (no API calls to CMS)
- Future: May integrate Airtable as "CMS" via n8n

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Resend Docs**: https://resend.com/docs
- **Pinterest API Docs**: https://developers.pinterest.com/docs
- **n8n Docs**: https://docs.n8n.io
- **Airtable API**: https://airtable.com/developers/web/api/introduction
- **Framer Motion**: https://www.framer.com/motion/

---

**Questions or suggestions for this tech stack?** Open a discussion or create an issue!

---

_© 2025 Love, Violeta Rose. All rights reserved._
