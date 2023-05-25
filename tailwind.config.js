/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
      colors: {
        Peach : "rgb(231, 129, 107)",
        light_Peach: "rgb(255, 173, 155)",
      },
    },
  },
  plugins: [],
}