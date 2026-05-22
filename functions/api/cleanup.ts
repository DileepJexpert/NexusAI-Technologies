import { Env, json, requireAdmin } from "../_lib";

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  if (!requireAdmin(request, env)) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  const contacts = await env.DB.prepare(
    "DELETE FROM contacts WHERE created_at < datetime('now', '-30 days')"
  ).run();
  const views = await env.DB.prepare(
    "DELETE FROM page_views WHERE created_at < datetime('now', '-30 days')"
  ).run();

  return json({
    message: "Cleanup complete",
    contactsDeleted: contacts.meta.changes || 0,
    viewsDeleted: views.meta.changes || 0,
  });
}
