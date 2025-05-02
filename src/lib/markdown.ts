import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const title = fileContents.split("\n")[0].replace(/^# /, "").trim();
    const content = fileContents;

    return { title, content };
  } catch (err) {
    return null;
  }
}
