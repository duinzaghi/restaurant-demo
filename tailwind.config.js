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
      'bg-tranparent': 'rgba(255, 255, 255, 0.1)',
      'white': '#FFFFFF',
      'gray' : {
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
      },
      'blue' : {
        500: '#3b82f6'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
