import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "nexusai.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        ip TEXT DEFAULT '',
        created_at TEXT DEFAULT (datetime('now'))
      );
      CREATE TABLE IF NOT EXISTS page_views (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        path TEXT NOT NULL,
        ip TEXT DEFAULT '',
        user_agent TEXT DEFAULT '',
        referrer TEXT DEFAULT '',
        created_at TEXT DEFAULT (datetime('now'))
      );
      CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at);
      CREATE INDEX IF NOT EXISTS idx_views_created ON page_views(created_at);
      CREATE INDEX IF NOT EXISTS idx_views_path ON page_views(path);
    `);
  }
  return _db;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  created_at: string;
}

export interface PageView {
  id: number;
  path: string;
  ip: string;
  user_agent: string;
  referrer: string;
  created_at: string;
}

export function insertContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip?: string;
}) {
  const db = getDb();
  const stmt = db.prepare(
    "INSERT INTO contacts (name, email, subject, message, ip) VALUES (?, ?, ?, ?, ?)"
  );
  return stmt.run(data.name, data.email, data.subject, data.message, data.ip || "");
}

export function insertPageView(data: {
  path: string;
  ip?: string;
  user_agent?: string;
  referrer?: string;
}) {
  const db = getDb();
  const stmt = db.prepare(
    "INSERT INTO page_views (path, ip, user_agent, referrer) VALUES (?, ?, ?, ?)"
  );
  return stmt.run(data.path, data.ip || "", data.user_agent || "", data.referrer || "");
}

export function getContacts(limit = 100, offset = 0): Contact[] {
  const db = getDb();
  return db
    .prepare("SELECT * FROM contacts ORDER BY created_at DESC LIMIT ? OFFSET ?")
    .all(limit, offset) as Contact[];
}

export function getContactCount(): number {
  const db = getDb();
  return (db.prepare("SELECT COUNT(*) as count FROM contacts").get() as { count: number }).count;
}

export function getPageViewStats() {
  const db = getDb();

  const totalViews = (
    db.prepare("SELECT COUNT(*) as count FROM page_views").get() as { count: number }
  ).count;

  const todayViews = (
    db.prepare(
      "SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = date('now')"
    ).get() as { count: number }
  ).count;

  const uniqueIps = (
    db.prepare(
      "SELECT COUNT(DISTINCT ip) as count FROM page_views WHERE ip != ''"
    ).get() as { count: number }
  ).count;

  const topPages = db
    .prepare(
      "SELECT path, COUNT(*) as views FROM page_views GROUP BY path ORDER BY views DESC LIMIT 10"
    )
    .all() as { path: string; views: number }[];

  const recentVisitors = db
    .prepare(
      "SELECT path, ip, user_agent, created_at FROM page_views ORDER BY created_at DESC LIMIT 20"
    )
    .all() as PageView[];

  const dailyViews = db
    .prepare(
      `SELECT date(created_at) as day, COUNT(*) as views
       FROM page_views
       WHERE created_at >= datetime('now', '-30 days')
       GROUP BY day ORDER BY day DESC LIMIT 30`
    )
    .all() as { day: string; views: number }[];

  return { totalViews, todayViews, uniqueIps, topPages, recentVisitors, dailyViews };
}

export function deleteOldData(days = 30) {
  const db = getDb();
  const cutoff = `datetime('now', '-${days} days')`;
  const contactsDeleted = db
    .prepare(`DELETE FROM contacts WHERE created_at < ${cutoff}`)
    .run().changes;
  const viewsDeleted = db
    .prepare(`DELETE FROM page_views WHERE created_at < ${cutoff}`)
    .run().changes;
  return { contactsDeleted, viewsDeleted };
}
