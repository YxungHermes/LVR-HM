import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Only gate Preview deployments, never Production
function isPreviewEnv(req: NextRequest) {
  // Vercel sets these automatically
  const vercelEnv = process.env.VERCEL_ENV; // "development" | "preview" | "production"
  if (vercelEnv) return vercelEnv === "preview";

  // Fallback: heuristic based on host
  const host = req.headers.get("host") || "";
  return host.includes("-vercel.app") && !host.startsWith("www.");
}

export function middleware(req: NextRequest) {
  if (!isPreviewEnv(req)) return NextResponse.next();

  const url = req.nextUrl;

  // Allow Next static internals without auth loop
  if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/api/health")) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");
  const basic = "Basic " + Buffer.from(
    `${process.env.STAGING_PROTECT_USERNAME}:${process.env.STAGING_PROTECT_PASSWORD}`
  ).toString("base64");

  if (auth === basic) {
    // Add noindex headers on staging
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return res;
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="LVR Preview"',
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

export const config = {
  matcher: ["/((?!favicon.ico).*)"], // gate everything except the favicon
};
