/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
      'md': '390px',
      // => @media (min-width: 390px) { ... }
      'lg': '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

