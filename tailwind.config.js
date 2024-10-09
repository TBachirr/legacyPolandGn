/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          100: '#FFF7D6',
          300: '#FFD700',
          400: '#FFc700',
          500: '#FFB700',
          600: '#FFA700',
        },
        'navy': {
          900: '#0A192F', // This is a deep navy blue
        },
      },
    },
  },
  plugins: [],
}