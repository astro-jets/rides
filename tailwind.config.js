/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');
  
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode:'class',
  theme: {
    screens:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
      },
    extend: {
      colors:{
        primary:'#202225',
        secondary:'rgb(36, 112, 36)',
        gray:colors.nuetral,
        gray:{
          900:'#202225',
          800:'#2f3136',
          700:'#36393f',
          600:'#4f545c',
          400:'#d4d7dc',
          300:'#e3e5e8',
          200:'#ebedef',
          100:'#f2f3f5'
        }
      },
    },
  },
  plugins: [],
})
