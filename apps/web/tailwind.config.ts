/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // The primary app folder for Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Shared components folder, if used
    "./containers/**/*.{js,ts,jsx,tsx}", // Custom containers folder, if used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};