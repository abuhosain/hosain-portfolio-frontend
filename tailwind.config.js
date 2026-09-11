/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0A0D",
          card: "#111116",
          surface: "#17171F",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.18)",
          subtle: "#1F1F2B",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          glow: "var(--accent-glow)",
          hover: "rgb(var(--accent-rgb) / <alpha-value>)",
          muted: "rgb(var(--accent-rgb) / <alpha-value>)",
          dark: "rgb(var(--accent-rgb) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          glow: "rgba(139, 92, 246, 0.25)",
        },
        emerald: {
          telemetry: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-line": "glowLine 3s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        glowLine: {
          "0%": { opacity: "0.3", filter: "drop-shadow(0 0 2px #00F0FF)" },
          "100%": { opacity: "1", filter: "drop-shadow(0 0 10px #00F0FF)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
