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
  const url = req.nextUrl;

  // Redirect /pricing to /offerings (navigation renamed)
  if (url.pathname === "/pricing") {
    return NextResponse.redirect(new URL("/offerings", req.url));
  }

  // No password protection - publicly accessible preview
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!favicon.ico).*)"], // gate everything except the favicon
};
