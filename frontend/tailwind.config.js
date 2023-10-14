/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#fafafa',
        'black': '#00171f',
        // 'dark-blue': '#003459',
        // 'blue': '#007ea7',
        // 'light-blue': '#00a8e8'
      },
      maxWidth: {
        '3/4': '75%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

