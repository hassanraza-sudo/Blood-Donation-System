/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-red': '#a53b3b',
        'custom-red-600': "#9b3434"
      // Add more custom colors as needed
    },},
  },
  plugins: [],
}