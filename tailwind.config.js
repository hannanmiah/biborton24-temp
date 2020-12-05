module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width' : 'width'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['first'],
      gridColumn: ['first'],
      gridRow: ['first'],
      display: ['first'],
      flexDirection: ['first'],
      borderWidth: ['hover', 'focus'],
      width: ['hover', 'focus'],
      height: ['hover','focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
