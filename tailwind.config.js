/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#CC444B",
          darkRed: "#9E2A2B",
          yellow: "#FFB000",
          cream: "#FFF9F2",
          dark: "#1A1A1A",
          grayText: "#666666",
          borderGray: "#E5E5E5"
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
        handwriting: ['"Nanum Pen Script"', 'cursive'],
      },
      boxShadow: {
        header: '0px 0px 10.7px rgba(0, 0, 0, 0.14)',
        card: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        subtle: '0px 2px 10px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
