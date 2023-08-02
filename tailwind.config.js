const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
        '80': '50vw',
      },
      width: {
        'full': '100%'  
      },
      fontSize: {
        '300': '17vw',
        '2.5vw': '2.5vw',
        '4vw': '4vw',
        '1.5vw': '1.5vw',
        '1vw': '1vw',
        '1.6vw': '1.6vw',
        '1.25vw': '1.25vw',
        '1.125vw': '1.125vw',
      },
      padding: {
        'vw7': '7vw',
        '5vw': '5vw',
        '4vw': '4vw',
        '3vw': '3vw',
        '2vw': '2vw',
      },
      margin: {
        '2vw': '2vw',
        '7vw': '7vw',
        '5vw': '5vw',
      },
      lineHeight: {
        '2.25vw': '2.25vw',
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
