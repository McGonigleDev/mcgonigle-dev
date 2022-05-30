module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand': ['Pacifico', 'cursive',],
        'primary': ['Roboto Flex', 'sans-serif', ],
      },
      boxShadow: {
        'offset-black': '6px 6px black',
        'offset-red': `6px 6px #ef4444`
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}