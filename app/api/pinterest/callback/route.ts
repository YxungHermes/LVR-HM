import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const stored = req.cookies.get("p_state")?.value;

  if (!code || !state || state !== stored) {
    return NextResponse.redirect("/consultation?pin_error=oauth_state");
  }

  const tokenRes = await fetch("https://api.pinterest.com/v5/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.PINTEREST_REDIRECT_URI!,
      client_id: process.env.PINTEREST_CLIENT_ID!,
      client_secret: process.env.PINTEREST_CLIENT_SECRET!,
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.redirect("/consultation?pin_error=token");
  }

  const token = await tokenRes.json(); // { access_token, token_type, scope, ... }

  // Store short-lived access token in httpOnly cookie for this session
  const res = NextResponse.redirect("/consultation?pin_connected=1");
  res.cookies.set("p_access", token.access_token, { httpOnly: true, path: "/", sameSite: "lax" });
  return res;
}
