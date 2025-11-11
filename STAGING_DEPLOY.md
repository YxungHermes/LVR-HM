# LVR-HM • Staging Deploy (Private Preview on Vercel)

**Goal:** Put the site on the internet for select viewers while keeping it hidden from search engines and gated by a simple password.

---

## 1) Connect Repo to Vercel

1. Create a [Vercel account](https://vercel.com) and click **New Project** → **Import Git Repository**
2. Select `YxungHermes/LVR-HM`
3. **Framework:** Next.js
4. **Build settings** (leave defaults unless custom):
   - Build Command: `next build`
   - Install Command: `pnpm install` or `npm i` (match the repo)
   - Output Directory: `.next`
5. Click **Create Project**

Vercel will build a Preview URL on each push. Keep the default `*.vercel.app` domains for now.

---

## 2) Environment Variables

Create `.env.local` in dev and add the same keys in **Vercel → Project → Settings → Environment Variables:**

```bash
# Staging gate
STAGING_PROTECT_USERNAME=preview
STAGING_PROTECT_PASSWORD=lovevioletarose

# Site mode
NEXT_PUBLIC_SITE_ENV=staging

# Pinterest (existing)
PINTEREST_CLIENT_ID=your_client_id_here
PINTEREST_CLIENT_SECRET=your_client_secret_here
PINTEREST_REDIRECT_URI=https://your-preview-url.vercel.app/api/pinterest/callback
```

**Important:** Set these variables for the **Preview** environment in Vercel. You can change the preview credentials any time.

---

## 3) How It Works

### Password Protection on Preview Only

The `middleware.ts` file automatically:
- Gates all **Preview** deployments with Basic Auth
- Leaves **Production** open (no password)
- Adds `X-Robots-Tag: noindex` headers to prevent indexing

When users visit a preview URL, they'll see a browser Basic Auth dialog asking for username and password.

### SEO Protection

Multiple layers of staging protection:
1. **`middleware.ts`** - Adds `X-Robots-Tag: noindex, nofollow, noarchive` headers
2. **`app/robots.ts`** - Returns `disallow: /` for all bots on preview
3. **`app/layout.tsx`** - Sets `robots: { index: false, follow: false }` metadata on preview

### Staging Badge

A small "Staging Preview" badge appears in the bottom-left corner when `NEXT_PUBLIC_SITE_ENV=staging`. This helps testers know they're on the preview site.

### Health Check

`/api/health` endpoint stays open on staging so uptime monitors don't hit the auth wall.

---

## 4) GitHub Workflow

### For Testing/Preview:
1. Push to any branch (e.g., `staging` or your feature branch)
2. Vercel automatically builds a Preview URL
3. Share the URL + credentials with clients/testers
4. Basic Auth protects the preview, and bots ignore it

### For Production Launch:
1. Set `NEXT_PUBLIC_SITE_ENV=production` in Vercel **Production** environment
2. Connect your custom domain `lovevioletarose.com` in Vercel
3. Merge your changes to the main branch
4. Vercel deploys to production (no password, indexable)

---

## 5) Quick Checklist

- [ ] Vercel project created and linked to `LVR-HM` repo
- [ ] Environment variables added in Vercel for **Preview** environment:
  - `STAGING_PROTECT_USERNAME`
  - `STAGING_PROTECT_PASSWORD`
  - `NEXT_PUBLIC_SITE_ENV=staging`
- [ ] Push a branch → confirm Preview URL prompts for password
- [ ] Share preview URL + credentials with testers
- [ ] Test that robots.txt returns `disallow: /` on preview

---

## 6) Sharing Preview Access

**Preview URL format:**
```
https://lvr-hm-{branch-name}-{hash}.vercel.app
```

**Credentials to share:**
```
Username: preview
Password: lovevioletarose
```

When testers visit the URL, they'll see a browser dialog asking for these credentials. Once entered, they can browse the entire site normally.

---

## 7) Later, For Launch

When you're ready to go live:

1. **Switch to Production mode:**
   - In Vercel → Settings → Environment Variables
   - Set `NEXT_PUBLIC_SITE_ENV=production` for **Production** environment only
   - Keep `staging` value for **Preview** environment

2. **Add your domain:**
   - In Vercel → Settings → Domains
   - Add `lovevioletarose.com` and `www.lovevioletarose.com`
   - Vercel will provide DNS instructions

3. **Deploy to production:**
   - Merge your branch to `main`
   - Vercel auto-deploys
   - No password on production
   - `robots.txt` allows indexing
   - Staging badge hidden

4. **Optional enhancements:**
   - Add analytics (Vercel Analytics, Google Analytics, etc.)
   - Set up error monitoring (Sentry)
   - Configure custom error pages

---

## 8) Troubleshooting

**Problem:** Basic Auth not appearing on preview
- Check that `VERCEL_ENV=preview` (Vercel sets this automatically)
- Verify environment variables are set for **Preview** scope in Vercel
- Clear browser cache and try incognito mode

**Problem:** Staging badge not showing
- Verify `NEXT_PUBLIC_SITE_ENV=staging` is set
- Remember: `NEXT_PUBLIC_*` vars must be set at build time
- Redeploy after adding the variable

**Problem:** Bots still indexing preview
- Check `/robots.txt` on your preview URL
- Verify middleware is adding `X-Robots-Tag` header (check Network tab)
- Give crawlers time to re-crawl (can take days)

---

## My Opinion

Ship a gated preview now. Keep production closed until your nav, pricing, and consultation flow feel steady. A slick private link shows momentum without exposing half-done work.

**Filmmaker Fuel:** Before any launch, record a 30-sec screen capture that walks a couple from hero → "What I Offer" → "Book Consultation." Watch it back with sound off. If every step reads without narration, your UX is clear.

---

## Files Created

- `middleware.ts` - Password protection and noindex headers
- `app/robots.ts` - Dynamic robots.txt based on environment
- `components/StagingBadge.tsx` - Visual indicator for staging
- `app/api/health/route.ts` - Health check endpoint
- `app/layout.tsx` - Updated with robots metadata and staging badge
- `.env.example` - Updated with staging variables
- `STAGING_DEPLOY.md` - This guide

---

Ready to deploy? Push this branch and watch Vercel build your first protected preview!
