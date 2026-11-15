/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0d0d0d",
        card: "#121212",
        "card-hover": "#171717",
        primary: "#f1f2f3",
        "text-muted": "rgba(241, 242, 243, 0.6)",
        "text-subtle": "rgba(241, 242, 243, 0.35)",
        "border-subtle": "rgba(241, 242, 243, 0.12)",
        "accent-cyan": "#00e5ff",
        "accent-blue": "#2563eb",
      },
      fontFamily: {
        sans: ['"FK Grotesk"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        glow: 'pulseGlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
