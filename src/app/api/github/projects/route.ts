export const dynamic = "force-dynamic"; // Disable static caching

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  private: boolean;
  stargazers_count: number;
}

export async function GET() {
  const username = "aditluthra";
  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch GitHub repos" }), {
      status: 500,
    });
  }

  const data: GitHubRepo[] = await res.json();

  const cleaned = data
    .filter((repo) => !repo.fork && !repo.private)
    .map((repo) => ({
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
