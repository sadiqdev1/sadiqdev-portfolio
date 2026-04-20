/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      colors: {
        // Dark theme (default)
        dark: {
          bg: '#0a0a0f',
          card: '#16161f',
          border: '#27273a',
        },
        // Accent colors - Modern palette
        accent: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          tertiary: '#ec4899',
          blue: '#6366f1',
          purple: '#8b5cf6',
          pink: '#ec4899',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        'md': '0.375rem',   // sharp but slightly rounded
        'lg': '0.5rem',
      },
      boxShadow: {
        'glow': '0 0 12px rgba(59,130,246,0.3)',
      },
    },
  },
  plugins: [],
}