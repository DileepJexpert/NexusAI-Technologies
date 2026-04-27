import { NextRequest, NextResponse } from "next/server";
import { deleteOldData } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "nexusai2024";
const CRON_SECRET = process.env.CRON_SECRET || "";

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const isAdmin = auth === `Bearer ${ADMIN_PASSWORD}`;
  const isCron = CRON_SECRET && req.headers.get("x-cron-secret") === CRON_SECRET;

  if (!isAdmin && !isCron) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = deleteOldData(30);
    return NextResponse.json({
      success: true,
      deleted: result,
      message: `Deleted ${result.contactsDeleted} contacts and ${result.viewsDeleted} page views older than 30 days`,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
