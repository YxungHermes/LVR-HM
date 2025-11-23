import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_PASSWORD = process.env.SITE_PASSWORD || "lvr2024";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Redirect /pricing to /offerings (navigation renamed)
  if (url.pathname === "/pricing") {
    return NextResponse.redirect(new URL("/offerings", req.url));
  }

  // Allow access to login page, auth API, webhooks, and static assets
  // ✅ SECURITY: Webhook routes MUST bypass auth (Stripe needs direct access)
  if (
    url.pathname === "/login" ||
    url.pathname.startsWith("/api/auth") ||
    url.pathname.startsWith("/api/stripe/webhook") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/static") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = req.cookies.get("site-auth");

  if (!authCookie || authCookie.value !== SITE_PASSWORD) {
    // Redirect to login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!favicon.ico).*)"], // gate everything except the favicon
};
