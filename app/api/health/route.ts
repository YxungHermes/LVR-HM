export async function GET() {
  return new Response(JSON.stringify({ ok: true, env: process.env.VERCEL_ENV }), {
    headers: { "content-type": "application/json" },
  });
}
