import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['var(--font-vt323)', 'monospace']
      },
      colors: {
        terminal: {
          green: '#39FF14',
          black: '#000000',
          neon: '#00FFE1',
          gray: '#888888',
          orange: '#FF6F00'
        }
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
