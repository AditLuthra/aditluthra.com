"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,  // Updated icon from react-icons
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";  // Updated import for newer icons

export default function VisualContactCard() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const mailtoLink = `mailto:adit@makrx.org?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.location.href = mailtoLink;
  };

  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/aditluthra",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/aditluthra",
    },
    {
      icon: <FaXTwitter />,
      label: "X (Twitter)",
      href: "https://x.com/aditluthra",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com/aditluthra",
    },
    {
      icon: <FaYoutube />,
      label: "YouTube",
      href: "https://youtube.com/@aditluthra",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:adit@makrx.org",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-terminal-green font-pixel">
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="border border-terminal-green p-6 rounded-xl bg-[#1a1a1a]"
      >
        <h2 className="text-terminal-neon text-xl mb-4">✍️ Say Hello</h2>
        <label className="block mb-4 text-sm">
          Name:
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-3 py-1 bg-terminal-black border border-terminal-green text-terminal-green font-pixel"
          />
        </label>
        <label className="block mb-4 text-sm">
          Message:
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full mt-1 px-3 py-1 bg-terminal-black border border-terminal-green text-terminal-green font-pixel"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-1 border border-terminal-green text-terminal-green hover:bg-terminal-neon hover:text-black font-pixel transition"
        >
          ✉️ Send Message
        </button>
        {sent && (
          <p className="text-sm mt-2 text-terminal-neon">
            ✅ Opening your email client...
          </p>
        )}
      </form>

      {/* Social Icons */}
      <div className="border border-terminal-green p-4 rounded-lg bg-[#111]">
        <h2 className="text-terminal-neon text-xl mb-2">🔗 Find me online</h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl">
          {socials.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-terminal-green px-4 py-2 rounded-md hover:bg-terminal-neon hover:text-black transition"
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
