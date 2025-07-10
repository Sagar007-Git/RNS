@@ .. @@
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
+        "spin-slow": "spin 3s linear infinite",
+        "twinkle": "twinkle 2s ease-in-out infinite",
+        "float": "float 3s ease-in-out infinite",
+        "drift": "drift 4s ease-in-out infinite",
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
+        twinkle: {
+          "0%, 100%": { opacity: "0.3" },
+          "50%": { opacity: "1" },
+        },
+        float: {
+          "0%, 100%": { transform: "translateY(0px)" },
+          "50%": { transform: "translateY(-10px)" },
+        },
+        drift: {
+          "0%, 100%": { transform: "translateX(0px)" },
+          "50%": { transform: "translateX(10px)" },
+        },
       },
       boxShadow: {
         "github-sm": "0 1px 0 rgba(208, 215, 222, 0.2)",
         "github-md": "0 3px 6px rgba(140, 149, 159, 0.15)",
         "github-lg": "0 8px 24px rgba(140, 149, 159, 0.2)",
         "github-inset": "inset 0 1px 0 rgba(255, 255, 255, 0.25)",
       },
+      backgroundImage: {
+        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
+      },
     },
   },
   plugins: [require("tailwindcss-animate")],
 }
 export default config