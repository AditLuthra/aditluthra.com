"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutBox() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-10 font-pixel">
      <div className="max-w-5xl mx-auto border border-terminal-green rounded-xl p-10 flex flex-col md:flex-row items-center gap-10 bg-[#1a1a1a] shadow-lg">
        <Image
          src="/images/adit-avatar.png"
          alt="Adit Avatar"
          width={240}
          height={240}
          className="rounded-full border border-terminal-green shadow-xl"
        />
        <div className="leading-relaxed space-y-6 text-base">
          <h1 className="text-3xl font-bold text-terminal-neon">
            {"> Hello, World. I'm Adit 🧠⚡"}
          </h1>

          <p>
            I build weird things that sometimes work and always spark curiosity. Founder @ <strong>MakrX</strong> — on a mission to create the <b>ultimate playground for makers, rebels, and garage geniuses</b>.
          </p>

          <p>
            Currently cooking up: robots that misbehave 🤖, walls that glow 🌌, tools that teach themselves 🧰, and machines that make more machines 🧪.
          </p>

          <p>
            I believe in <em>"Build first, debug later"</em> and that <strong>chaos is a feature, not a bug</strong>. If it blinks, spins, floats, explodes, or accidentally becomes sentient — I’m probably behind it.
          </p>

          <p>
            Operating out of Chandigarh, India 🇮🇳 — but mentally stationed in a maker space orbiting Saturn. 🌍🪐
          </p>

          <div className="pt-5 border-t border-terminal-green space-y-2">
            <p className="text-sm text-terminal-gray italic">Wanna peek into the multiverse?</p>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>
                <Link
                  href="https://github.com/AditLuthra"
                  target="_blank"
                  className="text-terminal-neon underline"
                >
                  GitHub — home of broken-but-beautiful code 💾
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/AditLuthra"
                  target="_blank"
                  className="text-terminal-neon underline"
                >
                  LinkedIn — let's pretend to be professional 🕴️
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
