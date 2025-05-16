import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "About – Adit Luthra",
  description: "Who is Adit Luthra? Get to know the maker, thinker, and builder behind the projects — from circuits to storytelling.",
  openGraph: {
    title: "About – Adit Luthra",
    description: "Learn more about Adit — a maker of weird things, driven by curiosity and impact.",
    url: "https://aditluthra.com/about",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-about.png", // Optional OG image
        width: 1200,
        height: 630,
        alt: "About Adit Luthra",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About – Adit Luthra",
    description: "The human behind the code. Get to know Adit beyond the portfolio.",
    images: ["https://aditluthra.com/images/og-about.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="font-pixel bg-terminal-black text-terminal-green">
        <ThemeProvider>
          <ModeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
