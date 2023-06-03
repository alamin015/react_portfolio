/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1A1A1A"
      },
      fontFamily: {'Jost': ['Jost', 'sans-serif']},
      container: {
        padding: "1rem"
      }
    },
  },
  plugins: [],
}

