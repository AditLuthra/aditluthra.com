import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifest – Adit Luthra",
  description: "Adit Luthra’s resume, projects, skills, and creative portfolio – built for hiring and collaboration.",
  openGraph: {
    title: "Adit Luthra – Manifest",
    description: "Explore Adit's resume, projects, and creative work – from full-stack to hardware.",
    url: "https://aditluthra.com/manifest",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/manifest-preview.png", // optional preview
        width: 1200,
        height: 630,
        alt: "Adit Luthra Manifest Resume",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adit Luthra – Resume & Projects",
    description: "Resume, GitHub projects, and skills of Adit Luthra.",
    images: ["https://aditluthra.com/images/manifest-preview.png"],
  },
};

export default function ManifestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAFA] text-black font-sans">{children}</body>
    </html>
  );
}
