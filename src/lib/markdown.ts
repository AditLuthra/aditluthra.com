import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Untitled",
      date: data.date || null,
      slug: data.slug || slug,
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      original_link: data.original_link || "",
      coverImage: data.coverImage || "",
      content,
    };
  } catch (err) {
    return null;
  }
}
