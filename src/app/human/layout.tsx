import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "Adit Luthra – Human Mode",
  description: "Welcome to the human-readable version of Adit Luthra’s portfolio. Friendly, visual, and personal.",
  openGraph: {
    title: "Adit Luthra – Human Mode",
    description: "Explore Adit Luthra’s projects, story, and work in a clear, visual, and approachable way.",
    url: "https://aditluthra.com/human",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-human.png", // Optional visual
        width: 1200,
        height: 630,
        alt: "Adit Luthra Portfolio – Human Mode",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adit Luthra – Human-Friendly Portfolio",
    description: "Explore Adit’s creative portfolio in an elegant, readable format.",
    images: ["https://aditluthra.com/images/og-human.png"],
  },
};

export default function HumanLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="bg-white text-black font-sans">
        <ThemeProvider>
          <ModeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
