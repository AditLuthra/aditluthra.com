"use client";

import { useEffect, useState } from "react";

export default function TerminalLine({ line, delay = 0 }: { line: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        setDisplayedText(line.slice(0, current + 1));
        current++;
        if (current === line.length) clearInterval(interval);
      }, 20);
    }, delay);

    return () => clearTimeout(timeout);
  }, [line, delay]);

  return <div className="text-sm leading-relaxed">{displayedText}</div>;
}
