/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'tw-blue': '#2427e5',
      'tw-gray': '#f6f6f6',
      'tw-hr-gray': '#dbdde3',
      'tw-green': '#048848',
      'tw-yellow': '#ffc043',
      'tw-dark': '#000000',

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
      'xxl': '1400px'
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
