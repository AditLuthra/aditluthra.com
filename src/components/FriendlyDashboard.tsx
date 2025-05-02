"use client";

import Link from "next/link";

export default function FriendlyDashboard() {
  const items = [
    { title: "About", href: "/about", emoji: "👤", color: "bg-[#222]" },
    { title: "Projects", href: "/projects", emoji: "🛠️", color: "bg-[#2e2e2e]" },
    { title: "Blog", href: "/blog", emoji: "📓", color: "bg-[#333]" },
    { title: "Contact", href: "/contact", emoji: "📬", color: "bg-[#1e1e1e]" },
  ];

  return (
    <div className="min-h-screen p-8 font-pixel bg-terminal-black text-terminal-green">
      <h1 className="text-2xl mb-6 text-terminal-neon">Welcome to the Friendly Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`p-6 border border-terminal-green rounded-xl hover:bg-terminal-neon hover:text-black transition-all ${item.color}`}
          >
            <h2 className="text-lg mb-2">
              {item.emoji} {item.title}
            </h2>
            <p className="text-sm">Visit {item.title.toLowerCase()} section</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
