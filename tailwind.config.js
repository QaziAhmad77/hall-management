/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "770px",
        md: "968px",
        lg: "1200px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}