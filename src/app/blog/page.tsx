"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useTheme } from "@/context/ThemeContext";

import FriendlyNav from "@/components/FriendlyNav";
import BlogDisk from "@/components/BlogDisk";

const posts = [
  { slug: "why-i-build-weird-things", title: "Why I Build Weird Things" },
  { slug: "robots-i-loved", title: "Robots I Loved" },
];

export default function BlogListPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (theme === "hacker") {
      router.push("/cli");
    }
  }, [theme, router]);

  if (!hydrated || theme === "hacker") return null;

  return (
    <>
      <FriendlyNav />
      <div className="pt-20 md:pt-24">
        <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
          <h1 className="text-xl mb-4 text-terminal-neon">💾 Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <BlogDisk key={post.slug} slug={post.slug} title={post.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
