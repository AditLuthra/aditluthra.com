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
      <div className="border border-terminal-green p-5 rounded-xl bg-[#1a1a1a] hover:bg-terminal-neon hover:text-black transition-all">
        <div className="text-xl font-semibold mb-2 flex items-center gap-2">🧠 {title}</div>
        {date && (
          <div className="text-sm text-terminal-gray mb-2">
            {new Date(date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        )}
        {excerpt && <p className="text-base text-terminal-green mb-2">{excerpt}</p>}
        <div className="text-base text-terminal-gray font-medium">Read more →</div>
      </div>
    </Link>
  );
}
