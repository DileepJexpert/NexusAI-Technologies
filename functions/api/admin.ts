import { Env, json, requireAdmin } from "../_lib";

export async function onRequestGet({ request, env }: { request: Request; env: Env }) {
  if (!requireAdmin(request, env)) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
  const limit = 25;
  const offset = (page - 1) * limit;

  const contactsResult = await env.DB.prepare(
    "SELECT * FROM contacts ORDER BY created_at DESC LIMIT ? OFFSET ?"
  )
    .bind(limit, offset)
    .all();
  const totalContactsRow = (await env.DB.prepare(
    "SELECT COUNT(*) as count FROM contacts"
  ).first()) as { count: number } | null;

  const totalViewsRow = (await env.DB.prepare(
    "SELECT COUNT(*) as count FROM page_views"
  ).first()) as { count: number } | null;
  const todayViewsRow = await env.DB.prepare(
    "SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = date('now')"
  ).first() as { count: number } | null;
  const uniqueIpsRow = (await env.DB.prepare(
    "SELECT COUNT(DISTINCT ip) as count FROM page_views WHERE ip != ''"
  ).first()) as { count: number } | null;
  const topPages = await env.DB.prepare(
    "SELECT path, COUNT(*) as views FROM page_views GROUP BY path ORDER BY views DESC LIMIT 10"
  ).all();
  const recentVisitors = await env.DB.prepare(
    "SELECT path, ip, user_agent, created_at FROM page_views ORDER BY created_at DESC LIMIT 20"
  ).all();
  const dailyViews = await env.DB.prepare(
    `SELECT date(created_at) as day, COUNT(*) as views
     FROM page_views
     WHERE created_at >= datetime('now', '-30 days')
     GROUP BY day ORDER BY day DESC LIMIT 30`
  ).all();

  const totalContacts = totalContactsRow?.count || 0;

  return json({
    contacts: contactsResult.results || [],
    totalContacts,
    totalPages: Math.ceil(totalContacts / limit),
    currentPage: page,
    totalViews: totalViewsRow?.count || 0,
    todayViews: todayViewsRow?.count || 0,
    uniqueIps: uniqueIpsRow?.count || 0,
    topPages: topPages.results || [],
    recentVisitors: recentVisitors.results || [],
    dailyViews: dailyViews.results || [],
  });
}
