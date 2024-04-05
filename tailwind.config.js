/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
     animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%,': { border: '4px solid black' },
          '100%': { border: '8px solid pink' },
        },
      },
      backgroundColor: {
        'common': 'pink'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(350px, 1fr))'
      }
    },
  },
  plugins: [],
}

