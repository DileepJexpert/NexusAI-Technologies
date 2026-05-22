import { clientIp, Env, json } from "../_lib";

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  try {
    const body = (await request.json().catch(() => ({}))) as { path?: string };
    const path = String(body.path || "/").slice(0, 300);
    const userAgent = request.headers.get("User-Agent") || "";
    const referrer = request.headers.get("Referer") || "";

    await env.DB.prepare(
      "INSERT INTO page_views (path, ip, user_agent, referrer, created_at) VALUES (?, ?, ?, ?, datetime('now'))"
    )
      .bind(path, clientIp(request), userAgent.slice(0, 500), referrer.slice(0, 500))
      .run();

    return json({ ok: true });
  } catch {
    return json({ ok: false }, { status: 500 });
  }
}
