/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      "white": "#ffffff",
      "white-soft": "#f8f8f8",
      "white-mute": "#f2f2f2",

      "black": "#181818",
      "black-soft": "#222222",
      "black-mute": "#282828",

      "indigo": "#2c3e50",

      "divider-light-1": "rgba(60, 60, 60, 0.29)",
      "divider-light-2": "rgba(60, 60, 60, 0.12)",
      "divider-dark-1": "rgba(84, 84, 84, 0.65)",
      "divider-dark-2": "rgba(84, 84, 84, 0.48)",

      "text-light-1": "var(indigo)",
      "text-light-2": "rgba(60, 60, 60, 0.66)",
      "text-dark-1": "var(white)",
      "text-dark-2": "rgba(235, 235, 235, 0.64)",

      "background": "var(black)",
      "background-soft": "var(black-soft)",
      "background-mute": "var(black-mute)",

      "border": "var(divider-dark-2)",
      "border-hover": "var(divider-dark-1)",
      "heading": "var(text-dark-1)",
      "text": "var(text-dark-2)"
    },
  },
  plugins: [],
}
