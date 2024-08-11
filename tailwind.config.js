/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#ff4343',
        secondary:{
          100: '#0A75BC',
          200: '#0969A9'
        }
      },
      fontFamily:{
        body:['Anek Devanagari']
      }
    },
  },
  plugins: [],
}

