/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      //'mobile': {'min':'0px','max':'720px'},
      'tablet': {'min':'0px','max':'820px'},
      'laptopm': {'min':'821px','max':'1000px'},
      'laptop': {'min':'1001px','max':'1100px'},
      'desktop': {'min':'1101px','max':'1280px'},
      'screen': {'min':'1281px','max':'1400px'},
    },
    extend: {
      colors: {
        main: '#121212',
        primary: '#bb86fc',
        primary2: '#3700b3',
        secondary: '#03dac6',
        box: '#332940',
        box2: '#1f1a24',
        project: '#212121',
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", 'sans-serif'],
        panipuri: ["Panipuri", 'sans-serif'],
        neutro: ["Neutro", 'sans-serif'],
      },
      width: {
        'hero': '28rem'
      },
      height: {
        'hero': '28rem'
      },
      spacing: {
        'arrowx': '90px',
      },
      rotate: {
        'arrow': '20deg'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}