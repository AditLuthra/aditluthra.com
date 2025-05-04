"use client";

import TerminalOutput from "../TerminalOutput";

const posts = [
  { slug: "why-i-build-weird-things", title: "Why I Build Weird Things" },
  { slug: "robots-i-loved", title: "Robots I Loved" },
];

export default function BlogOutput() {
  return (
    <TerminalOutput
      title="💾 Blog Archive"
      lines={[
        "> cat ./philosophy.md",
        "",
        ...posts.map(
          (post) => `📄 ${post.title} — read at /blog/${post.slug}`
        ),
        "",
        "Use: open(/blog/slug) to read.",
      ]}
    />
  );
}
