/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'main' :'#FEEF66',
      'secondary':'#7B2F2F',
      'cardPrimary':'#CD5C5C',
      'cardSecondary':'#FA8072',
      'black':'#000000',
      'white':'#FFFFFF',
      'error':'#FF0000'
    },
    extend: {},
    
  },
  plugins: [],
}

