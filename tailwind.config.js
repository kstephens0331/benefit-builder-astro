/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1A7549",
          navy: "#143C63",
          terra: "#C97C5D",
          sand: "#F5F1E6",
          stone: "#E1DED9",
          charcoal: "#2E2E2E"
        }
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
