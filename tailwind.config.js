import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D4F6C',   /* Deep teal — trust, medicine */
          light: '#1A7FA0',     /* Mid teal — CTAs */
          dark: '#082F42',
        },
        secondary: {
          DEFAULT: '#1A7FA0',   /* Mid teal — CTAs */
        },
        accent: {
          DEFAULT: '#E8A598',   /* Blush pink — warmth, hope */
          light: '#F5CFC9',
        },
        bg: '#F8F9FB',          /* Off-white background */
        surface: '#FFFFFF',     /* Card surfaces */
        text: '#1C2B35',        /* Near-black text */
        muted: '#5A6B77',       /* Secondary text */
        border: '#E2E8ED',      /* Subtle borders */
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
