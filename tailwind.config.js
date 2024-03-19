/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
        'roboto-serif': ['Roboto Serif', 'serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

