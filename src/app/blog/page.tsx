import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

import BlogDisk from "@/components/BlogDisk";
import FriendlyNav from "@/components/FriendlyNav";

export const metadata: Metadata = {
  title: "💾 Blog | Adit Luthra",
};

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
}

function getBlogPosts(): Post[] {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const content = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data } = matter(content);
      const slug = file.replace(/\.md$/, "");

      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        date: data.date || "1970-01-01",
      };
    })
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());
}

export default function BlogListPage() {
  const posts = getBlogPosts();

  return (
    <>
      <FriendlyNav />
      <main className="pt-20 md:pt-24 px-6">
        <h1 className="text-xl mb-6 text-terminal-neon">💾 Blog</h1>
        {posts.length === 0 ? (
          <p className="text-sm text-terminal-gray">No blog posts yet. Stay tuned!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogDisk
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
        )}

        <div className="mt-12 border-t border-terminal-green pt-6 text-sm text-terminal-gray">
          <p>
            Want more? Follow my builds and brainwaves.{" "}
            <a href="/contact" className="underline text-terminal-neon">
              Let’s build something.
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
