/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  content: [],
  theme: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
