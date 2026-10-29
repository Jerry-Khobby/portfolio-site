/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables (see src/index.css) so the theme can switch
// between dark and light; `<alpha-value>` keeps modifiers like `bg-line/55` working.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

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
        canvas: token("canvas"),
        panel: token("panel"),
        tile: { DEFAULT: token("tile"), hover: token("tile-hover") },
        line: { DEFAULT: token("line"), strong: token("line-strong") },
        muted: token("muted"),
        body: token("body"),
        soft: token("soft"),
        heading: token("heading"),
        accent: { DEFAULT: token("accent"), tint: "rgb(var(--c-accent-tint) / 0.1)" },
        progress: token("progress"),
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
  plugins: [
    ({ addVariant }) => addVariant("light", ':root[data-theme="light"] &'),
  ],
};
