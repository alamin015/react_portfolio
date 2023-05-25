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
      fontFamily: ['Jost', 'sans-serif'],
      container: {
        padding: "1rem"
      }
    },
  },
  plugins: [],
}

