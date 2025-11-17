# Claude Code Instructions - Love, Violeta Rose

> **Auto-loaded context for AI assistance on this repository**
> For complete details, see `TECH_STACK.md` and `.claude/project-context.md`

## Quick Context

**Business:** Love, Violeta Rose - NYC wedding videography ($2.2k-$5.5k+ packages)
**Partners:** Sir (videographer) + Caitlyn (photographer)
**Stack:** Next.js 14 + TypeScript + Tailwind + Resend + Vimeo
**Hosting:** Vercel
**Operations:** n8n (automation) + Airtable (CRM) + Notion (content/planning)

---

## Core Principles

### 1. Automation-First
- **Use n8n** for all workflow automation (not Zapier)
- **Use Airtable** for structured data (not custom database)
- **Use Notion** for creative/content work
- Every manual process should eventually become an n8n workflow

### 2. Budget-Conscious
- Bootstrapped business, prefer free/low-cost solutions
- Avoid expensive SaaS unless clear ROI
- Use API-first tools that integrate with n8n

### 3. Performance Matters
- Mobile-first (couples browse portfolio on phones)
- Fast load times = professional credibility
- SEO critical (organic traffic = free leads)

### 4. Keep It Simple
- No custom backend (use Vercel serverless + API routes)
- No database yet (Airtable will be our CRM)
- Static content in `/content/*.ts` files (TypeScript)
- Don't overcomplicate

---

## Tech Stack Summary

### Frontend
- Next.js 14.2.3 (App Router)
- React 18.3.1
- TypeScript 5.4.5 (strict mode)
- Tailwind CSS 3.4.3 (custom brand colors)
- Framer Motion 11.2.10 (animations)

### Backend & APIs
- Next.js API routes (serverless)
- Resend 6.4.2 (transactional email)
- Pinterest API (OAuth, board browsing)
- Cookie-based auth (password protection)

### Integrations
- Google Analytics 4
- Meta Pixel (Facebook/Instagram ads)
- Vercel Speed Insights
- Vimeo (video hosting)
- Dropbox (image hosting)

### Business Tools
- **n8n** - Workflow automation ($20/month cloud)
- **Airtable** - Client database (planned)
- **Notion** - Internal wiki and content

---

## API Routes Reference

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/inquiry` | POST | Quick inquiry form → Resend email |
| `/api/consultation` | POST | Detailed briefing form → Resend email |
| `/api/pinterest/connect` | GET | Start Pinterest OAuth flow |
| `/api/pinterest/callback` | GET | Pinterest OAuth callback |
| `/api/pinterest/boards` | GET | Fetch user's Pinterest boards |
| `/api/auth/login` | POST | Password protection (staging) |
| `/api/health` | GET | Health check |

---

## Environment Variables

See `.env.example` for complete list. Key variables:

```bash
# Required
RESEND_API_KEY=          # Transactional email
RESEND_FROM_EMAIL=       # From address
RESEND_TO_EMAIL=         # Inquiry destination

# Optional
PINTEREST_CLIENT_ID=     # Pinterest OAuth
PINTEREST_CLIENT_SECRET=
NEXT_PUBLIC_GA_MEASUREMENT_ID=  # Google Analytics
NEXT_PUBLIC_META_PIXEL_ID=      # Facebook Pixel
```

---

## When Making Recommendations

### ✅ DO Suggest:
- n8n-compatible tools (webhooks, APIs, existing n8n nodes)
- Airtable-first for data storage needs
- Open-source or free-tier solutions
- Mobile-first features and optimizations
- Performance improvements
- SEO enhancements
- Tools that save Sir's time through automation

### ❌ DON'T Suggest:
- Zapier (we use n8n)
- Expensive SaaS ($100+/month)
- Custom databases (use Airtable)
- WordPress (we're Next.js committed)
- Complex backend architecture
- Features without clear ROI

---

## Brand Voice (for content generation)

**Tone:** Warm, authentic, cinematic, not salesy
**Target:** NYC couples, $5-15k wedding budget
**Values:** Storytelling, authenticity, artistry

**Example:**
> "Your wedding film should feel like you — authentic, cinematic, timeless. We capture the quiet moments between the big ones."

**NOT:**
> "We use the latest 4K cameras and professional editing software. Packages start at $2,200."

---

## Common Tasks

### Adding a feature
1. Consider n8n integration potential
2. Design mobile-first
3. Use existing Tailwind color palette
4. Keep it performant
5. Test on mobile (Chrome DevTools)

### Working with forms
- All forms send data via Resend (email)
- Future: n8n webhook → Airtable record
- Validate on client AND server
- Show clear success/error states
- Mobile-friendly inputs

### Content updates
- Homepage: `/content/home.ts`
- Pricing: `/content/pricing.ts`
- Colors: `/tailwind.config.ts`
- Fonts: `/app/layout.tsx`

### Debugging
1. Browser console (client errors)
2. Terminal (server errors)
3. Verify environment variables
4. Check Vercel deployment logs

---

## Planned Integrations

Priority automation workflows:

1. **Inquiry form → Airtable** - Auto-create client records
2. **Consultation form → Gmail draft** - Pre-fill response templates
3. **Pinterest boards → Notion** - Pull client inspiration
4. **Airtable → Website** - Dynamic content (future)
5. **Calendly/Cal.com** - Auto-schedule consultations

---

## Architecture Patterns

### Current data flow:
```
Form (website)
  → API route (validation)
  → Resend (email notification)
  → Manual process (Sir reads email)
```

### Future data flow:
```
Form (website)
  → API route (validation)
  → Resend (email notification)
  → n8n webhook
  → Airtable (create record)
  → Gmail draft (personalized response)
  → Sir reviews and sends
```

---

## File Structure Quick Reference

```
/app                    # Pages (App Router)
  /api                  # API routes
  /about, /films, etc.  # Static pages
  layout.tsx            # Root layout
  page.tsx              # Homepage

/components             # React components
  Roadmap.tsx           # Client journey
  FinaleBlock.tsx       # Instagram CTA

/content                # Static content (TypeScript)
  home.ts               # Homepage copy
  pricing.ts            # Package data

/public                 # Static assets
  /collections          # Collection images
  /media                # Video posters

/.claude                # AI context (this file!)
  instructions.md       # Auto-loaded instructions
  project-context.md    # Detailed context

TECH_STACK.md           # Complete tech inventory
```

---

## Success Metrics (in priority order)

1. **Inquiry → Consultation conversion** - Get couples to book calls
2. **Consultation → Booking conversion** - Close the deal
3. **Website load speed** - Performance = credibility
4. **Time saved by automation** - Sir's time is valuable
5. **SEO ranking** - Organic traffic = free leads

---

## Questions?

- **Complete tech details:** See `TECH_STACK.md`
- **Business context & philosophy:** See `.claude/project-context.md`
- **Next.js docs:** https://nextjs.org/docs
- **Tailwind docs:** https://tailwindcss.com/docs
- **n8n docs:** https://docs.n8n.io

---

**Last updated:** 2025-11-17
**Repository:** YxungHermes/LVR-HM
**License:** © 2025 Love, Violeta Rose. All rights reserved.
