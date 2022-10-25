/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      'secondary': '#4DBA8D',
      'primary': '#FAC849',
      'text-dark': '#211E1E',
      'text-light' : '#807C7C'
      
    }
  },
  plugins: [],
}
