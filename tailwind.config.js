/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 390px) { ... }
      'md': '390px',
      // => @media (min-width: 789px) { ... }
      'lg': '789px',
      // => @media (min-width: 1000px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

