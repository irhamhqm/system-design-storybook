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
        'primary-hover': '#AE60EB',
        'primary-clicked': '#6A17AB',
        gradient: '159.13deg, #9D3FE7 -24.13%, #602093 132.21%',
        'grayscale-black': '#1A141F',
        'grayscale-hint-text': '#4B3A5A',
        'grayscale-border': '#ABA7AF',
        'grayscale-disabled': '#D4D2D5',
        'grayscale-spacer': '#D9D1E0',
        'grayscale-spacer-light': '#E5E0EB',
        'grayscale-light-gray': '#F5F3F7',
        // white: '#FFF'
      }
    },
  },
  plugins: [],
}