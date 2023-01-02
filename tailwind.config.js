/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
