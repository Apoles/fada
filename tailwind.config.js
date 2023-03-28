/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-in-out ',
        fadeUp: 'f',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 0 },

          '100%': { opacity: 1 },
        },
      }),
      fontFamily: {
        satisfies: ['Satisfy', 'cursive'],
        questrial: ['Questrial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        tilt: ['Tilt Neon', 'cursive'],
      },
      colors: {
        'wine-red': '#960018',
      },
      screens: {},
    },
  },
  plugins: [],
};
