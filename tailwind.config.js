/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pink': '#F2458E',
      'black': '#181818',
      'light-pink': '#FFEFED',     
      'blue': '#276EF1',     
      'violet': '#907AD6',     
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        'questrial': ['"Questrial"', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'avenir-light': ['"avenir-light"', 'sans-serif'],
        'avenir-regular': ['"avenir-regular"', 'sans-serif'],
        'avenir-heavy': ['"avenir-heavy"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
