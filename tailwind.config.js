/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: "rgba(221,212,232,1)",
        oColor: "rgba(255,246,241,1)",
        tColor: "rgb(70,65,112)"
      },
      maxWidth : {
        "containerMax": "1390px"
      }
    },
  },
  plugins: [],
}

