module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width' : 'width'
      },
      fontFamily: {
        'mina': ['Mina', 'sans-serif'],
        'baloo2' : ['Baloo Da 2', 'cursive']
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['first','active'],
      gridColumn: ['first'],
      gridRow: ['first'],
      display: ['first'],
      flexDirection: ['first'],
      borderWidth: ['hover', 'focus'],
      width: ['hover', 'focus'],
      height: ['hover', 'focus'],
      transform: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
