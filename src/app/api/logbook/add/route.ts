import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// 🔐 Use environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { project_slug, content } = await req.json();

    console.log("📥 New Log Entry:", { project_slug, content });

    if (!project_slug || !content) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ✅ Validate slug against GitHub
    const githubRes = await fetch("https://api.github.com/users/aditluthra/repos");
    const githubRepos = await githubRes.json();

    const validSlugs = githubRepos.map((r: any) => r.name);
    if (!validSlugs.includes(project_slug)) {
      return NextResponse.json({ error: "Invalid project slug" }, { status: 400 });
    }

    // ✅ Insert log
    const { error } = await supabase.from("log_entries").insert([
      { project_slug, content },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("🔥 Crash in POST /api/logbook/add:", err);
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
}
