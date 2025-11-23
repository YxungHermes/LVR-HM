# Security Audit Report
**Date:** 2025-11-23
**Auditor:** Claude Code
**Website:** LVR-HM (Love Stories by Michael Andrade)

---

## Executive Summary

A comprehensive security audit was conducted on the website codebase. The audit identified **3 CRITICAL** and **2 MEDIUM** severity vulnerabilities, along with several good security practices already in place.

**CRITICAL issues have been fixed** in this commit. Additional recommendations require configuration changes in your hosting environment.

---

## 🔴 CRITICAL Vulnerabilities (FIXED)

### 1. Exposed Password in Repository
- **Severity:** CRITICAL 🔴
- **File:** `vercel.json:8`
- **Issue:** Site password `"lvr2024"` was hardcoded in plaintext in version control
- **Risk:** Anyone with repository access (including all git history) can see the password
- **Status:** ✅ **FIXED** - Removed hardcoded password from vercel.json
- **Action Required:**
  1. Set `SITE_PASSWORD` as an environment variable in Vercel dashboard
  2. Use a strong, unique password (minimum 16 characters, mix of uppercase, lowercase, numbers, special characters)
  3. Consider rotating the password since it was exposed in git history

### 2. Cloudflare Turnstile - Invalid Domain Configuration
- **Severity:** CRITICAL 🔴
- **File:** `components/Turnstile.tsx`
- **Issue:** Using test key `1x00000000000000000000AA` which only works on localhost
- **Symptoms:**
  - "Invalid domain" error message
  - Widget refreshes every few seconds
  - Shows "verifying" briefly then fails
- **Root Cause:** Test key is hardcoded as fallback, production environment doesn't have proper site key configured
- **Status:** ✅ **FIXED** - Added validation and better error handling
- **Action Required:**
  1. Get production site key from Cloudflare Turnstile dashboard: https://dash.cloudflare.com/
  2. Create a new Turnstile widget with your production domain(s)
  3. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (public site key) in Vercel environment variables
  4. Set `TURNSTILE_SECRET_KEY` (secret key) in Vercel environment variables
  5. **IMPORTANT:** Add your production domain(s) to the allowed domains list in Cloudflare Turnstile settings

### 3. Missing Rate Limiting on Login Endpoint
- **Severity:** HIGH 🟠
- **File:** `app/api/auth/login/route.ts`
- **Issue:** No rate limiting allowed unlimited login attempts
- **Risk:** Attackers could brute-force the password
- **Status:** ✅ **FIXED** - Added rate limiting (5 attempts per 15 minutes)

---

## 🟡 MEDIUM Severity Issues

### 4. In-Memory Rate Limiter in Serverless Environment
- **Severity:** MEDIUM 🟡
- **File:** `lib/rateLimit.ts`
- **Issue:** Uses `Map()` for storage, which resets per serverless function instance
- **Risk:** Rate limits can be bypassed by triggering different serverless instances
- **Recommendation:** For production, implement rate limiting using:
  - Vercel Edge Config
  - Upstash Redis
  - Vercel KV Storage
  - Or use a dedicated rate limiting service like Arcjet

### 5. Simple Password Authentication
- **Severity:** MEDIUM 🟡
- **Files:** `middleware.ts`, `app/api/auth/login/route.ts`
- **Issue:** Single shared password stored in plaintext (not hashed)
- **Current State:** Acceptable for staging/preview site protection
- **Recommendation:** For production CRM/admin access, consider:
  - Proper user authentication (email/password with hashing)
  - OAuth integration (Google, Microsoft)
  - Magic link authentication
  - Multi-factor authentication (MFA)

---

## ✅ Good Security Practices Found

### XSS Prevention
- ✅ Proper HTML sanitization in `lib/sanitize.ts`
- ✅ Escapes all special characters (&, <, >, ", ', /)
- ✅ Recursive object sanitization

### Input Validation
- ✅ Email format validation
- ✅ Phone number validation
- ✅ Required field validation on forms

### SQL Injection Prevention
- ✅ Using Supabase parameterized queries (prevents SQL injection)
- ✅ Search parameter sanitization in `/api/leads` endpoint

### API Security
- ✅ CAPTCHA verification on public form endpoints
- ✅ Rate limiting on `/api/consultation` and `/api/inquiry` (5 requests per 15 min)
- ✅ Authentication checks on sensitive endpoints (`/api/leads/*`)
- ✅ CRON endpoint authentication using `Bearer` token

### Payment Security
- ✅ Stripe webhook signature verification
- ✅ Server-side payment validation
- ✅ Proper webhook event handling
- ✅ Secure metadata handling

### Cookie Security
- ✅ `httpOnly` flag (prevents XSS cookie theft)
- ✅ `secure` flag in production (HTTPS only)
- ✅ `sameSite: 'lax'` (CSRF protection)

### Environment Variables
- ✅ Proper separation of public (`NEXT_PUBLIC_*`) and private variables
- ✅ API keys stored in environment variables (not hardcoded)
- ✅ `.env.example` file with documentation

---

## 📋 Action Items

### Immediate (Required for Production)

1. **Configure Cloudflare Turnstile:**
   ```bash
   # In Vercel Dashboard → Your Project → Settings → Environment Variables
   # Add these variables:
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_actual_site_key
   TURNSTILE_SECRET_KEY=your_actual_secret_key
   ```
   - Get keys from: https://dash.cloudflare.com/?to=/:account/turnstile
   - Add your production domain(s) to allowed domains in Cloudflare settings

2. **Set Strong Site Password:**
   ```bash
   # In Vercel Dashboard → Environment Variables
   SITE_PASSWORD=your_strong_password_here
   ```
   - Use minimum 16 characters
   - Mix uppercase, lowercase, numbers, special characters
   - Do NOT reuse "lvr2024" (it was exposed in git history)

3. **Verify Environment Variables:**
   - Ensure all required variables are set in Vercel
   - Check `.env.example` for required variables
   - Test after deployment

### Short-term (Recommended within 1-2 weeks)

4. **Upgrade Rate Limiting:**
   - Implement persistent rate limiting using Upstash Redis or Vercel KV
   - Or use a service like Arcjet for comprehensive protection

5. **Security Headers:**
   - Add security headers in `next.config.js`:
     - Content-Security-Policy
     - X-Frame-Options
     - X-Content-Type-Options
     - Referrer-Policy

6. **Monitoring & Logging:**
   - Set up error tracking (Sentry, LogRocket, etc.)
   - Monitor for failed CAPTCHA attempts
   - Alert on suspicious login patterns

### Long-term (Future Enhancements)

7. **Authentication Upgrade:**
   - Implement proper user authentication for CRM access
   - Add role-based access control (RBAC)
   - Enable multi-factor authentication (MFA)

8. **Security Testing:**
   - Regular penetration testing
   - Automated security scanning (Snyk, Dependabot)
   - OWASP Top 10 compliance verification

---

## 🔧 Changes Made in This Commit

1. ✅ Removed hardcoded password from `vercel.json`
2. ✅ Added rate limiting to login endpoint (5 attempts / 15 min)
3. ✅ Fixed Cloudflare Turnstile infinite refresh issue
4. ✅ Added proper error handling for missing CAPTCHA configuration
5. ✅ Added validation to prevent using test keys in production
6. ✅ Added developer warnings in console for misconfiguration

---

## 📚 Resources

### Cloudflare Turnstile
- Dashboard: https://dash.cloudflare.com/
- Documentation: https://developers.cloudflare.com/turnstile/
- Widget Setup: Create widget → Add your domain → Copy site key and secret

### OWASP Resources
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- XSS Prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- Authentication: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html

### Vercel Security
- Environment Variables: https://vercel.com/docs/environment-variables
- Security Best Practices: https://vercel.com/docs/security

---

## Testing Checklist

After deploying these fixes, verify:

- [ ] Cloudflare Turnstile widget loads without errors
- [ ] CAPTCHA verification works on form submissions
- [ ] No "Invalid domain" error messages
- [ ] No infinite refresh loops
- [ ] Login rate limiting works (try 6 failed attempts)
- [ ] Site password is set in Vercel environment variables
- [ ] Forms submit successfully after CAPTCHA verification
- [ ] Console shows no configuration errors

---

## Contact

For questions or concerns about this security audit:
- Review the fixes in this commit
- Check Vercel environment variable configuration
- Verify Cloudflare Turnstile domain settings

**Next Steps:** Deploy these changes and configure the required environment variables in Vercel.
