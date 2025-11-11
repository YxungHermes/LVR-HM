import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.PINTEREST_CLIENT_ID!;
  const redirectUri = encodeURIComponent(process.env.PINTEREST_REDIRECT_URI!);
  const scope = encodeURIComponent("boards:read");
  const state = crypto.randomUUID();

  // Send to Pinterest OAuth
  const authUrl = `https://www.pinterest.com/oauth/?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

  // Minimal state cookie
  const res = NextResponse.redirect(authUrl);
  res.cookies.set("p_state", state, { httpOnly: true, path: "/", sameSite: "lax" });
  return res;
}
