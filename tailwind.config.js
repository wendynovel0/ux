/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Agregamos tus variables aquí para poder usar clases como "bg-bg-dark"
        'bg-dark': '#161616',
        'c-yellow': '#e3a643',
      }
    },
  },
  plugins: [],
}