import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function POST() {
  return NextResponse.json(
    { error: "Cleanup API is disabled for static Cloudflare Pages hosting." },
    { status: 410 }
  );
}
