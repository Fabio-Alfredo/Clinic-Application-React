/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors:{
        'input-color': '#D9D9D9',
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 10s ease infinite alternate',
      },
    },
    fontFamily: {
      'Jersey': ['Jersey 10', 'sans-serif'],
      'Bebas': ['Bebas Neue', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],
      'Nunito': ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}

