import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(
    { error: "Admin API is disabled for static Cloudflare Pages hosting." },
    { status: 410 }
  );
}
