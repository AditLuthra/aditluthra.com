import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("log_entries")
      .select("project_slug");

    if (error) throw new Error(error.message);
    if (!data) throw new Error("No data returned");

    const slugs = Array.from(
      new Set(
        data
          .map((entry) => entry.project_slug)
          .filter((slug): slug is string => typeof slug === "string" && slug.length > 0)
      )
    );

    return NextResponse.json({ projects: slugs });
  } catch (err) {
    console.error("🔥 Supabase error:", err);
    return NextResponse.json(
      { error: (err as Error).message || "Unknown error" },
      { status: 500 }
    );
  }
}
