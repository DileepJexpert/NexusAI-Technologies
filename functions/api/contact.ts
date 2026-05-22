import { clientIp, Env, json } from "../_lib";

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "General").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return json({ error: "Name, email and message are required." }, { status: 400 });
    }

    await env.DB.prepare(
      "INSERT INTO contacts (name, email, subject, message, ip, created_at) VALUES (?, ?, ?, ?, ?, datetime('now'))"
    )
      .bind(name, email, subject, message, clientIp(request))
      .run();

    return json({ ok: true });
  } catch {
    return json({ error: "Unable to save contact." }, { status: 500 });
  }
}
