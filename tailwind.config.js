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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Dark theme (default)
        dark: {
          bg: '#0a0f1c',
          card: '#0f1422',
          border: '#1f2937',
        },
        // Accent colors
        accent: {
          blue: '#3b82f6',
          blueDark: '#2563eb',
          cyan: '#06b6d4',
          emerald: '#10b981',
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