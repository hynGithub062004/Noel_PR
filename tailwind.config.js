/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '300px': 350,
        '60': '60%',
        '40': '40%',
        '25': '24%',
        400: 245
      },
      height: {
        400: 245
      },
      textColor: {
        'red-cf': '#ff0000'
      },
      backgroundColor: {
        "do": "#f96160"
      }
    },
  },
  plugins: [],
}