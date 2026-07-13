/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact tokens pulled from the live demo (csi-church.vercel.app)
        // via DevTools — used specifically on the auth pages (Login,
        // Register, Forgot/Reset Password) to pixel-match the reference.
        auth: {
          DEFAULT: "#008a7a",
          dark: "#006b61",
          deep: "#004b45",
          panel: "#005f59", // .auth-side background
          text: "#172235",
          muted: "#667084",
          line: "#d8e1ec",
          soft: "#eefaf8",
          danger: "#e1495b",
        },
   
        brand: {
          50: "#E7F3F0",
          100: "#C3E1D9",
          200: "#8FC4B6",
          300: "#5BA793",
          400: "#2E8973",
          500: "#157A63",
          600: "#106B57",
          700: "#00796B",
          // 700: "#0E5C4E", // primary — sidebar background
          800: "#0A4339",
          900: "#062B25",
        },
        accent: {
          50: "#FBF5E9",
          100: "#F5E6C5",
          200: "#EBCD8E",
          300: "#E0B566",
          400: "#D4A24C", // signature gold — used sparingly
          500: "#B8843A",
          600: "#92692D",
        },
        interactive: {
          50: "#E7F3F0",
          100: "#C3E1D9",
          400: "#2E8973",
          500: "#00796B",
          // 500: "#0E5C4E", // primary action color — matches sidebar/icon teal exactly
          600: "#0A4339",
          700: "#062B25",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          canvas: "#F7F8FA",
          muted: "#F0F2F6",
        },
        ink: {
          DEFAULT: "#1A1D29",
          // DEFAULT: "#009688",
          muted: "#5B6072",
          subtle: "#8B90A0",
        },
        success: { 50: "#EBFAF0", 500: "#1E9E5A", 600: "#178249" },
        warning: { 50: "#FEF7E8", 500: "#D9931E", 600: "#B5760F" },
        danger: { 50: "#FDECEC", 500: "#D9402D", 600: "#B5301F" },
        border: "#E4E7ED",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "system-ui", "sans-serif"],
        // Matches the live demo's @font-face exactly — used on auth pages only.
        "open-sans": ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(15, 21, 38, 0.04), 0 1px 6px -1px rgba(15, 21, 38, 0.06)",
        elevated: "0 4px 16px -4px rgba(15, 21, 38, 0.12), 0 2px 6px -2px rgba(15, 21, 38, 0.06)",
        sidebar: "1px 0 0 0 rgba(255,255,255,0.06) inset",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-up": { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-468px 0" }, "100%": { backgroundPosition: "468px 0" } },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "slide-up": "slide-up 0.25s ease-out",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};
