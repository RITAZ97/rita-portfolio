/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      keyframes: {
        'light-sweep': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)', opacity: '0' },
        },
      },
      animation: {
        'light-sweep': 'light-sweep 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

