export const dynamic = "force-dynamic"; // Disable static caching

export async function GET() {
  const username = "aditluthra"; // 🔁 change if needed
  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch GitHub repos" }), {
      status: 500,
    });
  }

  const data = await res.json();

  const cleaned = data
    .filter((repo: any) => !repo.fork && !repo.private)
    .map((repo: any) => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || "No description.",
      url: repo.html_url,
      source: "github" as const,
      stars: repo.stargazers_count,
      tags: [],
    }));

  return new Response(JSON.stringify(cleaned), {
    headers: { "Content-Type": "application/json" },
  });
}
