module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['first'],
      gridColumn: ['first'],
      gridRow: ['first'],
      display: ['first'],
      flexDirection: ['first'],
      borderWidth: ['hover','focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
