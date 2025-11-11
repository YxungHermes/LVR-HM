import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const access = req.cookies.get("p_access")?.value;
  if (!access) return NextResponse.json({ error: "no_token" }, { status: 401 });

  const r = await fetch("https://api.pinterest.com/v5/boards?page_size=25", {
    headers: { Authorization: `Bearer ${access}` },
    cache: "no-store",
  });

  if (!r.ok) {
    return NextResponse.json({ error: "boards_fetch_failed" }, { status: 400 });
  }

  const data = await r.json();
  // Normalize a bit
  const boards = (data.items || []).map((b: any) => ({
    id: b.id,
    name: b.name,
    url: `https://www.pinterest.com/${b.owner?.username}/${encodeURIComponent(b.name)}/`,
    description: b.description || "",
    media: b.media || null,
  }));

  return NextResponse.json({ boards });
}
