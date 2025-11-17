# Project Context for Claude Code

## Business Model

Love, Violeta Rose is a wedding videography business. Every recommendation should consider:

- **We're bootstrapped** - Prefer free/low-cost solutions over expensive SaaS
- **Time is money** - Sir works full-time bridge painting job, automate everything possible
- **Mobile-first portfolio** - Couples browse on phones at coffee shops and venues
- **Professional appearance on tight budget** - Compete with bigger studios using AI/automation
- **NYC market** - High-end aesthetic expectations, competitive pricing
- **Relationship-based business** - Personal connection drives bookings, not just portfolio

## Current Focus

1. **Building n8n automation workflows**
   - Inquiry form → Airtable client record
   - Consultation submission → Email drafts
   - Pinterest boards → Notion inspiration database

2. **Setting up Airtable client database**
   - Client inquiries (name, date, location, event type)
   - Active bookings (timeline, deliverables, payments)
   - Vendor contacts (venues, planners, florists)
   - Package templates (pricing, inclusions)

3. **Improving website conversion (inquiry → booking)**
   - Simplify consultation form flow
   - Add social proof (testimonials, recent films)
   - Optimize mobile experience
   - Clarify pricing and packages

4. **Separating wedding vs commercial work**
   - Love, Violeta Rose = weddings (luxury, emotional)
   - YxungHermes = commercial/branded content (different vibe)

## Tech Philosophy

- **Use AI/automation to compete with bigger studios** - Level the playing field with smart tools
- **Modern stack but practical** - Next.js + React is fine, but don't overcomplicate
- **Own our data** - Prefer self-hosted when possible, avoid vendor lock-in
- **API-first thinking** - Everything should connect to n8n for automation
- **Performance = credibility** - Slow site = amateur perception
- **Mobile experience is the real first impression** - Most couples browse portfolio on phones

## When I Ask For Help With:

### "Automation" or "workflows"

**Assume:**
- n8n is the platform (not Zapier, Make, or custom code)
- Airtable is the data storage layer
- Show complete workflow diagrams with trigger → actions → outputs

**Include:**
- Error handling (what happens if email fails, API is down, etc.)
- Testing steps (how to validate workflow before going live)
- Webhook URLs and authentication setup
- Example data structures (what fields n8n sends to Airtable)

**Example response structure:**
```
Workflow: New Inquiry → Airtable + Email Draft

Trigger: Webhook (POST from /api/inquiry)
↓
Node 1: Parse webhook data (name, email, date, eventType)
↓
Node 2: Create Airtable record in "Client Inquiries" base
↓
Node 3: Draft Gmail response using template
↓
Node 4: Send Slack notification (optional)
```

### "Client management" or "CRM"

**Assume:**
- Airtable is our CRM (not HubSpot, Salesforce, or custom DB)
- Show table structures with field types and relationships
- Consider what n8n needs to query (linked records, formulas)

**Include:**
- Base structure (tables and their purpose)
- Field definitions (Single line text, Date, Select, etc.)
- Relationships (linked records between tables)
- Views (Grid, Calendar, Kanban for different workflows)
- Automations (Airtable native vs n8n external)

**Example response structure:**
```
Airtable Base: "Love, Violeta Rose - Clients"

Table 1: Client Inquiries
- Name (Single line text)
- Email (Email)
- Wedding Date (Date)
- Event Type (Single select: Elopement, Wedding Day, Destination, Adventure)
- Status (Single select: New, Contacted, Consulted, Proposal Sent, Booked, Archived)
- Linked to "Bookings" table

Table 2: Bookings
- Client (Link to "Client Inquiries")
- Package (Single select: from pricing.ts)
- Contract Signed (Checkbox)
- Deposit Paid (Checkbox)
- Timeline (Airtable blocks or linked "Timeline" table)
```

### "Content" or "copy"

**Brand voice:**
- Warm, authentic, not salesy
- Cinematic and artistic language
- Storytelling over features
- Emotional connection over technical specs

**Target audience:**
- NYC couples planning weddings
- Budget: $5,000-$15,000 total wedding spend
- Values: authenticity, artistry, not cookie-cutter
- Aesthetic: modern, clean, editorial (not rustic/boho)

**Tone examples:**
- ✅ "Your wedding film should feel like you — authentic, cinematic, timeless."
- ❌ "We use the latest 4K cameras and professional editing software."
- ✅ "We capture the quiet moments between the big ones."
- ❌ "Packages start at $2,200 with a 50% deposit required."

**Emphasize:**
- Storytelling and emotion
- Cinematic quality and artistry
- Authenticity over perfection
- The couple's unique story

### "Website features"

**Performance matters:**
- Fast load for portfolio (hero video, signature work cards)
- Mobile-first (most traffic is mobile)
- Core Web Vitals (Google ranking factor)
- Lazy load below-fold content

**SEO critical:**
- Organic traffic is primary acquisition channel
- Compete for "NYC wedding videographer" and similar terms
- Proper heading structure (h1 → h2 → h3)
- Meta descriptions and Open Graph tags
- Fast page load speeds

**Mobile experience priority:**
- Couples browse portfolio on phones at venues/coffee shops
- Forms should be easy to fill on mobile
- Videos should autoplay and be thumb-scrollable
- CTAs (consultation, inquiry) prominent and tappable

**Consider Vercel deployment constraints:**
- Serverless function timeouts (10s on Hobby plan)
- Edge network caching strategies
- Environment variable management
- Preview deployments for testing

## Don't Suggest:

- ❌ **Expensive SaaS ($100+/month)** - We're bootstrapped, need ROI-positive tools
- ❌ **Zapier** - We use n8n instead (open-source, self-hosted option, cheaper at scale)
- ❌ **Complex custom backends** - Keep it simple, use Vercel serverless + Airtable
- ❌ **WordPress** - We're Next.js committed, no going back
- ❌ **Heavy JavaScript frameworks** - Performance matters, keep it lean
- ❌ **Salesforce/HubSpot** - Overkill for 2-person business
- ❌ **Custom video hosting** - Vimeo works great, no need to reinvent

## Do Suggest:

- ✅ **Open-source alternatives** - n8n over Zapier, Plausible over Google Analytics (if privacy matters)
- ✅ **n8n-compatible tools** - Check if it has a webhook, API, or n8n node
- ✅ **Free tiers that scale** - Airtable, Resend, Vercel all have generous free plans
- ✅ **Tools other wedding videographers don't use** - Competitive advantage through tech
- ✅ **AI-powered solutions** - Claude for email drafting, ChatGPT for content ideation
- ✅ **Performance optimizations** - Image compression, lazy loading, CDN usage
- ✅ **Mobile-first features** - Thumb-friendly navigation, large tap targets
- ✅ **API-first tools** - Everything should potentially connect to n8n

## Planned Integrations (Prioritize These)

When suggesting features, consider how they integrate with:

1. **n8n workflows** - Can it trigger on events? Does it have webhooks or API?
2. **Airtable data** - Can n8n read/write to it? Can we display it on the website?
3. **Notion content** - Can we pull blog posts, shot lists, vendor contacts?
4. **Gmail automation** - Can we draft personalized emails based on form data?
5. **Pinterest inspiration** - Can we show client boards or curate our own?

## Success Metrics

What we care about (in order):

1. **Inquiry → Consultation conversion** - Getting couples to book a call
2. **Consultation → Booking conversion** - Closing the deal after meeting
3. **Website load speed** - First impression = portfolio performance
4. **Time saved by automation** - Sir's time is worth $X/hour, every workflow should save time
5. **SEO ranking** - Organic traffic = free leads
6. **Mobile experience** - Most traffic is mobile, optimize for it

What we DON'T care about (yet):

- ❌ Blog traffic (no blog yet, content in Notion)
- ❌ Social media followers (Instagram is separate strategy)
- ❌ Email newsletter (not doing email marketing yet)
- ❌ Upsells/cross-sells (one service = wedding films)

## Development Workflow Preferences

**When writing code:**
- Use TypeScript for everything (strict mode enabled)
- Follow existing Tailwind patterns (custom colors in `tailwind.config.ts`)
- Keep components small and reusable
- Write clear comments for complex logic
- Test on mobile (use Chrome DevTools mobile view)

**When suggesting features:**
- Show code examples, not just descriptions
- Explain trade-offs (performance, cost, complexity)
- Consider existing integrations (n8n, Airtable, Resend)
- Think about future automation potential

**When debugging:**
- Check browser console first (client errors)
- Check terminal second (server errors)
- Verify environment variables are set
- Test API routes with curl or Thunder Client

## Architecture Patterns to Follow

**Data flow:**
```
User fills form (website)
  ↓
Next.js API route validates data
  ↓
Resend sends email notification
  ↓ (future)
n8n webhook receives same data
  ↓
n8n creates Airtable record
  ↓
n8n drafts Gmail response
  ↓
Sir reviews and sends (human in loop)
```

**Content management:**
```
Content in /content/*.ts (TypeScript files)
  ↓ (future)
Some content in Notion (blog, shot lists)
  ↓
n8n pulls Notion content via API
  ↓
n8n updates Airtable or triggers rebuild
  ↓
Website displays updated content
```

**Client journey:**
```
Inquiry (website form) → Airtable "Client Inquiries"
  ↓
Consultation (Calendly or manual) → Update status
  ↓
Proposal sent (email or PDF) → Link in Airtable
  ↓
Booking confirmed → Move to "Bookings" table
  ↓
Contract + deposit → Update checkboxes
  ↓
Pre-production → Timeline in Airtable
  ↓
Wedding day → Shot list in Notion
  ↓
Post-production → Delivery timeline tracking
  ↓
Delivery → Archive and request testimonial
```

## Brand Personality (for content generation)

If Claude Code is writing copy, channel this vibe:

- **Cinematic** - Think Wes Anderson meets wedding films
- **Intimate** - Small moments matter more than big spectacle
- **Authentic** - Real emotions, not posed perfection
- **Editorial** - Vogue wedding feature, not Pinterest DIY
- **Warm but sophisticated** - Approachable luxury, not stuffy or overly casual

**Example brand voice:**
> "Your wedding film isn't just a video — it's the way you'll remember this day for the rest of your lives. We capture the quiet glances, the unexpected laughter, the moments you didn't even know happened. Cinematic. Timeless. Authentically you."

## Common Questions (Pre-answered)

**Q: Should we add a blog?**
A: Not yet. Focus on portfolio and conversion. Content lives in Notion for now.

**Q: Should we build a custom CMS?**
A: No. Use Airtable + n8n for dynamic content when needed. Keep it simple.

**Q: Should we add online booking/payments?**
A: Future. Manual process works for now (relationship-based business). Add Stripe/Square later.

**Q: Should we migrate from Resend to SendGrid?**
A: No. Resend is working great, simpler API, better DX.

**Q: Should we switch from Vimeo to self-hosted video?**
A: No. Vimeo is professional, reliable, and handles autoplay/background video well.

**Q: Should we add user accounts/login?**
A: Only for Sir/Caitlyn (to access admin features later). Clients don't need accounts.

---

**Last updated:** 2025-11-17
**Review frequency:** Update when tech stack or business priorities change
