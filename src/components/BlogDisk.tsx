"use client";

import Link from "next/link";

export default function BlogDisk({ slug, title }: { slug: string; title: string }) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="border border-terminal-green p-4 rounded-xl bg-[#1a1a1a] hover:bg-terminal-neon hover:text-black transition-all">
        <div className="text-lg mb-2 flex items-center gap-2">
          🧠 {title}
        </div>
        <div className="text-sm text-terminal-gray">
          Read more →
        </div>
      </div>
    </Link>
  );
}
