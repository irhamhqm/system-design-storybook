/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9D3FE7',
        gradient: '159.13deg, #9D3FE7 -24.13%, #602093 132.21%'
      }
    },
  },
  plugins: [],
}