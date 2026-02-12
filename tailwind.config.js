/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#070A0F",
        panelDark: "#0E131B",
        accentCyan: "#00E0FF",
        accentTeal: "#26FFAB",
        accentBlue: "#4A9BFF",
        textSoft: "#D8E1E8"
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 224, 255, 0.35)",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas"]
      },
      keyframes: {
        "float-soft": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "pulse-soft": {
          "0%,100%": { opacity: 0.35 },
          "50%": { opacity: 0.9 }
        },
        "scroll-diag": {
          "0%": { transform: "translateX(-10%) translateY(10%)" },
          "100%": { transform: "translateX(10%) translateY(-10%)" }
        }
      },
      animation: {
        "float-soft": "float-soft 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 8s ease-in-out infinite",
        "scroll-diag-slow": "scroll-diag 18s linear infinite alternate"
      }
    },
  },
  plugins: [],
};
