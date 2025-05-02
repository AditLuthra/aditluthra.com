"use client";

import { useState } from "react";

export default function ASCIIForm() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const mailtoLink = `mailto:adit@makrx.org?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      {sent ? (
        <p className="text-terminal-neon text-sm">🎉 Redirecting to email client...</p>
      ) : (
        <>
          <label className="text-sm">
            Name:
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-terminal-black border border-terminal-green px-2 py-1 w-full mt-1 font-pixel text-sm text-terminal-green outline-none"
            />
          </label>
          <label className="text-sm">
            Message:
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-terminal-black border border-terminal-green px-2 py-1 w-full mt-1 font-pixel text-sm text-terminal-green outline-none"
            />
          </label>
          <button
            type="submit"
            className="border border-terminal-green px-4 py-1 text-sm text-terminal-green hover:bg-terminal-neon hover:text-black transition"
          >
            ✉️ Send Message
          </button>
        </>
      )}
    </form>
  );
}
