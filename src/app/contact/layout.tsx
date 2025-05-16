import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "Contact – Adit Luthra",
  description: "Reach out to Adit Luthra — whether it's for collaboration, hiring, or just to talk about weird tech ideas.",
  openGraph: {
    title: "Contact – Adit Luthra",
    description: "Get in touch with Adit Luthra — maker, thinker, and builder.",
    url: "https://aditluthra.com/contact",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Adit Luthra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Adit Luthra",
    description: "Collaboration? Internship? Just vibing? Email Adit or drop a message.",
    images: ["https://aditluthra.com/images/og-contact.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
