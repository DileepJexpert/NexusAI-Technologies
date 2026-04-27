import { NextRequest, NextResponse } from "next/server";
import { insertPageView } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path } = body;

    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "Path is required" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const user_agent = req.headers.get("user-agent") || "";
    const referrer = req.headers.get("referer") || "";

    insertPageView({ path, ip, user_agent, referrer });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
