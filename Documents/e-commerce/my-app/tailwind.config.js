/**@type {import('tailwindcss').config }  */
module.exports = {
  content: [
    "./public/index.html", //include index.html file
    "./src/**/*.{js,jsx,ts,tsx}", //include all js, jsx, ts, tsx files in src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};