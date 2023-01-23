/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      backgroundImage: {
        'hero-1': "url('/images/house-hero/house-hero-4.webp')",
        'hero-2': "url('/images/house-hero/house-hero-2.jpg')"
      }
    },
  },
  plugins: [],
}
