import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",

      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        background: "#0F1117",

        surface: "#161A23",

        primary: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
        },

        success: "#22C55E",

        warning: "#FACC15",

        danger: "#EF4444",

        muted: "#94A3B8",

        border: "rgba(255,255,255,0.06)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
      },

      boxShadow: {
        card: "0px 10px 30px rgba(0,0,0,0.25)",

        glow: "0 0 20px rgba(124,58,237,0.2)",
      },

      backgroundImage: {
        "pulse-gradient":
          "radial-gradient(circle at top left, rgba(124,58,237,0.12), transparent 30%)",
      },

      animation: {
        fade: "fadeIn 0.4s ease",
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(4px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;