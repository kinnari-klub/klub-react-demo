/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {

      fontFamily: {
        dms: ['DM Sans', 'sans-serif'],
      },

      colors: {
        'tw-gray-20': '#F3F4F6',
        'tw-gray-50': '#8990A9',
        'tw-gray-70': '#5E6782',
        'tw-gray-80': '#454B5F',
        'tw-gray-100': '#1A1C23',
        'tw-gray-bg': '#3A3A3A',

        'tw-success-100': '#12801B',


      },
    },

    screens: {
      'msm': { 'max': '320px' },
      'mmd': { 'max': '376px' },
      'mlg': { 'max': '425px' },
      'mxl': { 'max': '476px' },
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1337px'
    }
  },

  plugins: [],
}
