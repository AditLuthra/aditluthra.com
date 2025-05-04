"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext";

export default function EntryPage() {
  const router = useRouter();
  const { setTheme } = useTheme();

  const handleSelect = (mode: "human" | "hacker") => {
    setTheme(mode); // optional — keep if using ThemeContext globally
    router.push(mode === "human" ? "/human" : "/boot");
  };

  return (
    <div className="min-h-screen bg-black text-[#39FF14] flex flex-col justify-center items-center text-center font-pixel px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest mb-4">
        CTRL + ALT + ADIT
      </h1>
      <p className="text-[#e04e2a] text-xl mb-10">
        &gt; maker of weird things. thinker of strange thoughts.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => handleSelect("human")}
          className="border border-[#39FF14] px-10 py-4 text-2xl rounded hover:bg-[#39FF14] hover:text-black transition"
        >
          👤 I’m a Normal Human
        </button>
        <button
          onClick={() => handleSelect("hacker")}
          className="border border-[#39FF14] px-10 py-4 text-2xl rounded hover:bg-[#39FF14] hover:text-black transition"
        >
          💻 I’m a Hacker
        </button>
      </div>

      <div className="mt-16 text-4xl">🧠 💾 🧪</div>
    </div>
  );
}
