import { NextRequest, NextResponse } from 'next/server';

/**
 * Check if request has valid authentication
 */
export function isAuthenticated(request: NextRequest): boolean {
  const authCookie = request.cookies.get('site-auth');
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    console.error('⚠️ SITE_PASSWORD not configured');
    return false;
  }

  return authCookie?.value === sitePassword;
}

/**
 * Require authentication or return 401 response
 * Usage: const auth = requireAuth(request); if (!auth.authorized) return auth.response;
 */
export function requireAuth(request: NextRequest):
  | { authorized: true }
  | { authorized: false; response: NextResponse }
{
  if (!isAuthenticated(request)) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      ),
    };
  }
  return { authorized: true };
}
