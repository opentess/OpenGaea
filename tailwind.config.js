const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  options: { safelist: [] },
  theme: {
    extend: {
      colors: {
        // gray: colors.slate
        _darkblue: '#393F89',
        _blue: '#4B5FC2',
        _lightblue: '#9DF6FC',
        _creamblue: '#E0FCFD',
        _cwhite: '#CFCCD4',
        _depth_white: '#fafafa',
        _will_black: '#17181B'

      },
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      },
      letterSpacing: {
        tight: '-.015em'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
