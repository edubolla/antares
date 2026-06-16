/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        antares: {
          navy: "#0B1F33",
          blue: "#1F5F99",
          ink: "#111827",
          muted: "#667085",
          line: "#E6EAF0",
          soft: "#F5F7FA",
          warm: "#F7F2EA",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Aptos"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(11, 31, 51, 0.12)",
      },
    },
  },
  plugins: [],
};
