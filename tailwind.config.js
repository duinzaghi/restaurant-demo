module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#FFB800',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
