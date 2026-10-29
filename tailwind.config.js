/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Laptop-height viewports, where the sticky sidebar needs tighter spacing
        short: { raw: "(max-height: 900px)" },
        tiny: { raw: "(max-height: 720px)" },
      },
      colors: {
        canvas: "#0F172A",
        panel: "#111C33",
        tile: { DEFAULT: "#1A2438", hover: "#22304A" },
        line: { DEFAULT: "#1E293B", strong: "#334155" },
        muted: "#64748B",
        body: "#94A3B8",
        soft: "#CBD5E1",
        heading: "#E2E8F0",
        accent: { DEFAULT: "#5EEAD4", tint: "rgba(45, 212, 191, 0.1)" },
        progress: "#FCD34D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
      boxShadow: {
        tip: "0 6px 20px rgba(2, 6, 23, 0.5)",
      },
    },
  },
  plugins: [],
};
