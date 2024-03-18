/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors : {
        primaryBlue : '#41b3d3',
        secondaryBlue : '#61d2dc',
        darkGray : '#444444',
        darkerGray : '#131313',
        lightGray : '#e4e4e4'
      }
    },
  },
  plugins: [],
}

