"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutBox() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-8 font-pixel">
      <div className="max-w-4xl mx-auto border border-terminal-green rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 bg-[#1a1a1a] shadow-lg">
        <Image
          src="/images/adit-avatar.png"
          alt="Adit Avatar"
          width={220}
          height={220}
          className="rounded-full border border-terminal-green shadow-xl"
        />
        <div className="text-sm leading-relaxed space-y-4">
          <h1 className="text-2xl font-bold text-terminal-neon">> Hello, World. I'm Adit 🧠⚡</h1>

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

          <div className="pt-4 border-t border-terminal-green space-y-2">
            <p className="text-terminal-gray italic">Wanna peek into the multiverse?</p>
            <ul className="list-disc list-inside space-y-1">
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
