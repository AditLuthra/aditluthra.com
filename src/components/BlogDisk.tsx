"use client";

import Link from "next/link";

interface BlogDiskProps {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
}

export default function BlogDisk({ slug, title, excerpt, date }: BlogDiskProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="border border-terminal-green p-4 rounded-xl bg-[#1a1a1a] hover:bg-terminal-neon hover:text-black transition-all">
        <div className="text-lg mb-1 flex items-center gap-2">🧠 {title}</div>
        {date && (
          <div className="text-xs text-terminal-gray mb-2">
            {new Date(date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        )}
        {excerpt && <p className="text-sm text-terminal-green mb-1">{excerpt}</p>}
        <div className="text-sm text-terminal-gray">Read more →</div>
      </div>
    </Link>
  );
}
