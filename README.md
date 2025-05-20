# ⚡ CTRL + ALT + ADIT — Adit Luthra’s Personal Playground

Welcome to [aditluthra.com](https://aditluthra.com) — not just a website, but a living, breathing interface into the chaotic mind of a maker. It's built for misfits, tinkerers, thinkers, and people who build weird things just because they can.

This site is a dual-mode experience:  
👤 **Human Mode** if you're a curious browser.  
💻 **CLI Mode** if you're wired a little different.

---

## 🧠 What’s Inside?

- 🎛️ Toggleable **Human / Hacker** interface — pick your vibe  
- 🛠️ **Projects** — some smart, some strange, all hand-built  
- 💾 **Blog** — raw notes from the lab, filled with ideas, mistakes, and sparks  
- 📡 **Contact** — like shouting into a void, but cooler  
- 📷 Each page has its own **custom OG image**, so sharing it doesn’t feel lame  

This site evolves as I do. If something feels broken, it might be a feature.

---

## 🧰 Built Using

- **Next.js 14+** — App Router edition  
- **TailwindCSS** — minimal, but expressive  
- **Custom Fonts** — VT323 (for the hacker heart), Inter (for readability)  
- **Markdown + JSON** — because structured chaos is still structure  
- **Vercel** — instant deploys, zero config  
- **Analytics** — but the chill kind

---

## 🔍 File Glimpse

```
src/
├── app/                    # Main routes
│   ├── cli/                # Terminal-style interface
│   ├── blog/               # Markdown-based thoughts
│   ├── projects/           # Dynamic GitHub + manual projects
│   ├── contact/            # Ping me
│   └── ...                 # Maybe more. Maybe not. Try exploring.
│
├── components/             # UI building blocks
├── content/                # Blog posts, project data
├── context/                # Theme switcher
├── fonts.ts                # Font loading
├── styles/                 # Tailwind config
└── public/                 # Favicon, OG images, avatars
```

---

## ⚙️ Local Setup

Wanna run it locally and poke around?

```bash
git clone https://github.com/AditLuthra/aditluthra.com.git
cd aditluthra.com
npm install
npm run dev
```

---

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com), because time is better spent building, not configuring.

Things to check:
- `favicon.ico` → lives in `/public`  
- OG images → one per route, also in `/public/images`  
- `themeColor` → use the new `viewport` export, not `metadata`

---

## 🧬 Philosophy

Build weird things. Break boring patterns. Don’t just ship — shape.  
If it makes you feel something, it’s probably working.

---

## 📄 License

MIT — because ideas want to be free.  
Just don’t make it boring.

> Made with loose wires, caffeine-free chaos, and a lot of joy.  
> — Adit
