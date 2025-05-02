// REMOVE: "use client"
import fs from "fs";
import path from "path";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import BlogDisk from "../../components/BlogDisk";

export default function BlogListPage() {
  const posts = fs
    .readdirSync("src/content/blog")
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({
      slug: f.replace(/\.md$/, ""),
      title: f.replace(/\.md$/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    }));

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
      <h1 className="text-xl mb-4 text-terminal-neon">📓 Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <BlogDisk key={post.slug} slug={post.slug} title={post.title} />
        ))}
      </div>
    </div>
  );
}
