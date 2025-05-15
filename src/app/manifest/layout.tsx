import "../../styles/globals.css";
import { inter, vt323 } from "@/fonts";

export const metadata = {
  title: "Adit Luthra — Manifest",
  description: "Download Adit's resume and explore projects.",
};

export default function ManifestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAFA] text-black font-sans">
        {children}
      </body>
    </html>
  );
}
