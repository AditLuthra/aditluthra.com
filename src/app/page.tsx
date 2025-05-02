"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FriendlyDashboard from "../components/FriendlyDashboard";

export default function LandingPage() {
  const router = useRouter();

  const goHacker = () => {
    router.push("/boot");
  };

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
      <FriendlyDashboard />
      <div className="mt-8 text-center">
        <button
          onClick={goHacker}
          className="text-xs px-4 py-2 mt-4 border border-terminal-green text-terminal-green hover:bg-terminal-neon hover:text-black transition"
        >
          💻 Enter Hacker Mode
        </button>
      </div>
    </div>
  );
}
