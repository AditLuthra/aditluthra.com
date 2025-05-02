"use client";

import { useState } from "react";

export default function VisualContactCard() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const mailtoLink = `mailto:adit@makrx.org?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto border border-terminal-green p-6 rounded-xl bg-[#1a1a1a]">
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
        <p className="text-sm mt-2 text-terminal-neon">✅ Opening your email client...</p>
      )}
    </form>
  );
}
