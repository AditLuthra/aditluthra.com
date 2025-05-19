// scripts/generateBlogIndex.ts

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const blogDir = path.join(__dirname, "../src/content/blog");
const outputPath = path.join(__dirname, "../src/content/blogIndex.json");

function generateIndex(): void {
  const files: string[] = fs.readdirSync(blogDir);

  const posts = files
    .filter((file: string) => file.endsWith(".md"))
    .map((file: string) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        coverImage: data.coverImage || "",
        content: content.trim(),
      };
    });

  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
  console.log(`✅ Blog index generated with ${posts.length} entries.`);
}

generateIndex();
