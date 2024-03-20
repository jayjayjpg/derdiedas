/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        azure: '#69DDFF',
        cerise: {
          100: '#FDD8EF',
          200: '#FBB1E0',
          300: '#F877C9',
          400: '#F53DB1',
          500: '#EF27A6',
          600: '#D1108A',
          700: '#980B64',
          800: '#4C0532',
          900: '#260219',
        },
      },
    },
  },
  plugins: [],
};
/* eslint-enable no-undef */
