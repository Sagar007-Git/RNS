import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // GitHub exact color palette
        github: {
          canvas: {
            default: "#0d1117",
            overlay: "#161b22",
            inset: "#010409",
            subtle: "#21262d",
          },
          fg: {
            default: "#c9d1d9",
            muted: "#8b949e",
            subtle: "#6e7681",
            onEmphasis: "#ffffff",
          },
          border: {
            default: "#30363d",
            muted: "#21262d",
            subtle: "#484f58",
          },
          accent: {
            fg: "#58a6ff",
            emphasis: "#1f6feb",
            muted: "#388bfd26",
            subtle: "#388bfd1a",
          },
          success: {
            fg: "#3fb950",
            emphasis: "#238636",
            muted: "#2ea04326",
            subtle: "#2ea0431a",
          },
          attention: {
            fg: "#d29922",
            emphasis: "#9e6a03",
            muted: "#bb800926",
            subtle: "#bb80091a",
          },
          severe: {
            fg: "#db6d28",
            emphasis: "#bc4c00",
            muted: "#db6d2826",
            subtle: "#db6d281a",
          },
          danger: {
            fg: "#f85149",
            emphasis: "#da3633",
            muted: "#f8514926",
            subtle: "#f851491a",
          },
          done: {
            fg: "#a5a5a5",
            emphasis: "#6e7681",
            muted: "#6e768126",
            subtle: "#6e76811a",
          },
          sponsors: {
            fg: "#db61a2",
            emphasis: "#bf4b8a",
            muted: "#db61a226",
            subtle: "#db61a21a",
          },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Noto Sans"',
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        mono: ['"SFMono-Regular"', "Consolas", '"Liberation Mono"', "Menlo", "Courier", "monospace"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "1" }],
        "6xl": ["60px", { lineHeight: "1" }],
        "7xl": ["72px", { lineHeight: "1" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        github: "6px",
      },
      animation: {
        "fade-in": "fadeIn 200ms ease-out",
        "slide-up": "slideUp 200ms ease-out",
        "scale-in": "scaleIn 200ms ease-out",
        "github-pulse": "githubPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        githubPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      boxShadow: {
        "github-sm": "0 1px 0 rgba(208, 215, 222, 0.2)",
        "github-md": "0 3px 6px rgba(140, 149, 159, 0.15)",
        "github-lg": "0 8px 24px rgba(140, 149, 159, 0.2)",
        "github-inset": "inset 0 1px 0 rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
