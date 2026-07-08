/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ── Stitch Design System Color Tokens ──────────────────────────────
      colors: {
        primary:          "#00D4FF",   // Electric cyan – CTA, highlights, pills
        secondary:        "#7C3AED",   // Deep purple – gradient partner
        tertiary:         "#06B6D4",   // Cyan-600 – hover states
        background:       "#0A0F1E",   // Deep navy – page background
        surface:          "#111827",   // Dark slate – alternate bg
        "card-surface":   "#1A2235",   // Glass card background
        "border-accent":  "#1E3A5F",   // Card border
        "text-primary":   "#F1F5F9",   // Near-white
        "text-secondary": "#94A3B8",   // Muted slate
      },
      // ── Typography (matches Stitch fonts) ──────────────────────────────
      fontFamily: {
        headline: ["Sora", "sans-serif"],
        display:  ["Sora", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        label:    ['"Space Grotesk"', "sans-serif"],
      },
      // ── Border radius (ROUND_EIGHT from Stitch) ─────────────────────────
      borderRadius: {
        DEFAULT: "0.5rem",
        lg:      "0.75rem",
        xl:      "1rem",
        "2xl":   "1.25rem",
        full:    "9999px",
      },
      // ── Animations ──────────────────────────────────────────────────────
      animation: {
        "float":     "float 6s ease-in-out infinite",
        "pulse-slow":"pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-in":   "fadeIn 0.5s ease forwards",
        "slide-up":  "slideUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      // ── Box shadows ─────────────────────────────────────────────────────
      boxShadow: {
        "glow-sm":  "0 0 12px rgba(0, 212, 255, 0.3)",
        "glow":     "0 0 24px rgba(0, 212, 255, 0.4)",
        "glow-lg":  "0 0 48px rgba(0, 212, 255, 0.25)",
        "card":     "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover":"0 12px 40px rgba(0, 212, 255, 0.12)",
      },
      // ── Background sizes ────────────────────────────────────────────────
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
}
