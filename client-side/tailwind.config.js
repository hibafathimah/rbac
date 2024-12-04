/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bluegradient: 'linear-gradient(94.31deg, #30589F -24.04%, #002140 19.9%, #002140 78.48%, #30589F 122.42%)',
      },

      boxShadow: {
        btn: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
         ip: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
         shadowcard : 'box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black :  '#000000',
      lightblack : '#111111',
      white : "#ffffff",
      gray : "#8a9299",
      yellow : "#ffc107",
      darkyellow : "#f88500",
      red   : "#9e1311",
      blue : "#17a2b8",
      rose : "#ca175c",
      violet : "#8521A5",
      green : "#3d8c0d"
    },
    fontFamily: {
      // urban: ['Urbanist', 'sans-serif'],
      // dela: ['Dela Gothic One', 'sans-serif'],
      pop: [ "Poppins", 'sans-serif']
    },
  },
  plugins: [],
}

