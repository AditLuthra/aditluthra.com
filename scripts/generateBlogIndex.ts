// scripts/generateBlogIndex.ts

const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "../src/content/blog");
const outputPath = path.join(__dirname, "../src/content/blogIndex.json");

function generateIndex(): void {
  const files: string[] = fs.readdirSync(blogDir);

  const posts = files
    .filter((file: string) => file.endsWith(".md"))
    .map((file: string) => {
      const slug = file.replace(/\.md$/, "");
      const fullContent = fs.readFileSync(path.join(blogDir, file), "utf8");
      const lines: string[] = fullContent.split("\n").filter((line: string) => line.trim().length > 0);
      const title: string = lines[0]?.replace(/^# /, "").trim() || slug;
      const content: string = lines.slice(1).join("\n").trim();

      return { slug, title, content };
    });

  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
  console.log(`✅ Blog index generated with ${posts.length} entries.`);
}

generateIndex();
