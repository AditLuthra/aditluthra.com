export const dynamic = "force-dynamic"; // disable static cache

export async function GET() {
  try {
    const githubRes = await fetch("https://api.github.com/users/aditluthra/repos");
    if (!githubRes.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const repos = await githubRes.json();

    const projectSlugs = repos
      .filter((r: any) => !r.fork && !r.private)
      .map((r: any) => r.name);

    return new Response(JSON.stringify({ projects: projectSlugs }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("🔥 GitHub fetch error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch GitHub projects" }), {
      status: 500,
    });
  }
}
