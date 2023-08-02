const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '300': '10rem'
    },
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
      black: '#1B2534'
    },
    screens: {
      'sm': '300px',
      'lg': '700px'
    },
    // fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui'],
    //   'serif': ['ui-serif', 'Georgia'],
    //   'mono': ['ui-monospace', 'SFMono-Regular'],
    //   'montserrat': ['Montserrat'],
    //  },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/hero.png')",
        'action': "url('/src/assets/action.png')",
      }),
      height: {
        '80': '80vh',
      }
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
