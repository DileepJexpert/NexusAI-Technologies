import { NextRequest, NextResponse } from "next/server";
import { getContacts, getContactCount, getPageViewStats } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "nexusai2024";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) return false;
  return auth.slice(7) === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = 20;
    const offset = (page - 1) * limit;

    const contacts = getContacts(limit, offset);
    const totalContacts = getContactCount();
    const viewStats = getPageViewStats();

    return NextResponse.json({
      contacts,
      totalContacts,
      totalPages: Math.ceil(totalContacts / limit),
      currentPage: page,
      ...viewStats,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
