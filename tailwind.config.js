/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e2f",
        secondary: "#2a2a40",
        accent: "#6c63ff"
      }
    },
  },
  plugins: [],
}
