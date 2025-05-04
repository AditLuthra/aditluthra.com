"use client";

import Image from "next/image";
import Link from "next/link";

export default function FriendlyDashboard() {
  return (
    <div className="min-h-screen bg-black text-[#39FF14] font-pixel p-8 flex flex-col items-center">
      <header className="text-center mb-14 select-none">
        <h1 className="text-[4rem] leading-none tracking-[0.2em] font-extrabold text-[#39FF14]">
          CTRL + ALT + ADIT
        </h1>
        <p className="text-[#e04e2a] text-xl mt-4">
          &gt; maker of weird things. thinker of strange thoughts.
        </p>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
        {/* ABOUT */}
        <Link
          href="/about"
          className="border border-[#39FF14] p-8 rounded-md bg-black hover:bg-[#39FF14] hover:text-black transition"
        >
          <h2 className="text-2xl mb-4 font-bold text-[#39FF14]">👨‍🔧 ABOUT</h2>
          <div className="flex gap-6 items-start">
            <Image
              src="/images/adit-avatar.png"
              alt="Adit pixel avatar"
              width={100}
              height={100}
              className="border border-[#39FF14] pixelated"
            />
            <div className="text-base leading-snug">
              <p className="text-xl font-bold">Adit Luthra</p>
              <p>engineer, roboticist</p>
              <p>nerd. doing my part to make the future a little bolder</p>
            </div>
          </div>
        </Link>

        {/* PROJECTS */}
        <Link
          href="/projects"
          className="border border-[#39FF14] p-8 rounded-md relative overflow-hidden hover:bg-[#39FF14] hover:text-black transition"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(57,255,20,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(57,255,20,0.08) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            backgroundColor: "#0a1a3a",
          }}
        >
          <h2 className="text-2xl mb-4 font-bold text-[#39FF14]">
            🛠️ PROJECTS
          </h2>
          <div className="bg-black border border-[#39FF14] p-4">
            <p className="mb-2 font-mono">&gt; ./weird_robots</p>
            <p className="text-sm">#hardware #nonsense</p>
          </div>
        </Link>

        {/* BLOG */}
        <Link
          href="/blog"
          className="relative border-[10px] border-[#d94a2a] p-8 rounded-md bg-gradient-to-br from-[#4B0000] to-black hover:bg-[#d94a2a] hover:text-black transition"
        >
          <h2 className="text-2xl mb-4 font-bold text-[#d94a2a]">💾 BLOG</h2>
          <div className="bg-black border border-[#39FF14] p-4">
            <p className="mb-2 text-[#f4ce6a] font-semibold">
              cat <span className="text-[#39FF14]">./philosophy.md</span>
            </p>
            <p className="text-[#f4ce6a] font-semibold leading-snug">
              rants,
              <br />
              maker philosophy,
              <br />
              stuff
            </p>
          </div>
          {/* Floppy Notch */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-[10px] bg-black border border-[#39FF14] rounded-sm" />
        </Link>

        {/* CONTACT */}
        <Link
          href="/contact"
          className="relative border border-[#39FF14] p-8 rounded-md bg-[#0a1a3a] hover:bg-[#39FF14] hover:text-black transition"
        >
          <h2 className="text-2xl mb-4 font-bold text-[#39FF14]">📬 CONTACT</h2>
          <p className="text-[#7ea9e6] text-base mb-6 leading-snug">
            send me an email
            <br />
            or some cool ASCII art
          </p>
          <div className="inline-block px-6 py-2 bg-[#d9a14a] text-black font-bold text-base rounded-sm shadow-[4px_4px_0_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform">
            EMAIL
          </div>
        </Link>
      </main>
    </div>
  );
}
