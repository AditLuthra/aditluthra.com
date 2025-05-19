"use client";

import blogPosts from "@/content/blogIndex.json";
import TerminalOutput from "../TerminalOutput";

export default function BlogOutput() {
  return (
    <TerminalOutput
      title="💾 Blog Archive"
      lines={[
        "> cat ./philosophy.md",
        "",
        ...blogPosts.map((post) => `📄 ${post.title} — read at /blog/${post.slug}`),
        "",
        "Use: read [slug] to read.",
      ]}
    />
  );
}
