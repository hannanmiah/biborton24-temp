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
      gridRow: ['first']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
