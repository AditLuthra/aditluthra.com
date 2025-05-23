// src/app/sitemap.xml/route.ts

export async function GET() {
  const baseUrl = "https://aditluthra.com";

  const staticRoutes = [
    "",
    "about",
    "projects",
    "blog",
    "contact",
    "cli",
    "human",
  ];

  // Optionally fetch slugs from blogIndex.json (or your blog CMS)
  const blogPosts: string[] = [
    "embracing-the-marvel-of-aphantasia",
    "the-artful-alchemy-of-science-where-creativity-ignites-discovery",
    "embracing-uniqueness-the-art-of-being-a-weirdo",
    "the-cypherpunk-revolution",
    "welcome-to-my-brain",
    "unleashing-the-art-of-culinary-creation",
    "i-am-sorry-hopeful-and-thankful-to-iit",
  ];

  const pages = [
    ...staticRoutes.map((path) => `${baseUrl}/${path}`),
    ...blogPosts.map((slug) => `${baseUrl}/blog/${slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
