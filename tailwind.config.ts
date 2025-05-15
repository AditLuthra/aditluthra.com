import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-vt323)", "monospace"], // For pixel headings
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"], // For body content
      },
      colors: {
        "terminal-green": "#00FF41",
        "terminal-black": "#000000",
        "terminal-neon": "#39FF14",
        "terminal-gray": "#555555",
        "terminal-orange": "#FFA500",
        "floppy-red": "#4B0000",
        "floppy-orange": "#FF4500",
        "project-blue": "#0D1A2D",
      },
      animation: {
        blink: "blink 1.2s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Optional: for Markdown rendering
  ],
};

export default config;
