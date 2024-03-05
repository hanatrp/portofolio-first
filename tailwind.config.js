/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*{js,ts,jsx,tsx}'

  ],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#a78bfa',
        secondary : '#9ca3af',
        dark : '#374151'

      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

