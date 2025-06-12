import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// ✅ Read from env instead of hardcoding
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { project_slug, content } = await req.json();

    console.log("📥 New Log:", { project_slug, content });

    const { error } = await supabase.from("log_entries").insert([
      { project_slug, content },
    ]);

    if (error) {
      console.error("❌ Insert error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("🔥 Crash:", err);
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
}
