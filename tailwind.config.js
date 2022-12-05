/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        myColor: "red",
        bgColors: "beige"
      },
      backgroundColor:{
        bgColor: "beige"
      }
    },
  },
  plugins: [],
}
