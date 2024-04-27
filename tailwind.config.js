/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
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
        'hero': '24rem'
      },
      height: {
        'hero': '24rem'
      },
      zIndex: {
        '100': '100'
      }
    },
    
  },
  plugins: [],
}