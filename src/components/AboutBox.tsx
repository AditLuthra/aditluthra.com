"use client";

import Image from "next/image";

export default function AboutBox() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-8 font-pixel">
      <div className="max-w-3xl mx-auto border border-terminal-green rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 bg-[#1a1a1a]">
        <Image
          src="/images/adit-avatar.png"
          alt="Adit Avatar"
          width={100}
          height={100}
          className="rounded-full border border-terminal-green"
        />
        <div>
          <h1 className="text-xl mb-2 text-terminal-neon">Hi, I&#39;m Adit 👋</h1>
          <p className="text-sm leading-relaxed">
            Founder @ <strong>MakrX</strong> and Botness Technologies. I&#39;m
            building the world&#39;s largest maker ecosystem — one experiment at a
            time.
            <br />
            <br />I love weird robots 🤖, DIY tools 🛠, and teaching through
            creation. If it blinks, spins, or explodes, I&#39;m probably interested.
          </p>
          <p className="text-sm mt-4 text-terminal-gray italic">
            Location: Chandigarh, India 🇮🇳
          </p>
        </div>
      </div>
    </div>
  );
}
