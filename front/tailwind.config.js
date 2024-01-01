/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#F8D824',
      'secondary':'#0A0C16',
      'other': '#E6D368',
      'likes':'#FA232E',
      'gray':'#9F9D92'
    },
  },
  plugins: [],
}

