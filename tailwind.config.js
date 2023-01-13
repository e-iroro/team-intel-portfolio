
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'avenir-light': ['"Avenir Light"', 'sans-serif'],
      'questrial': ['"Questrial"', 'sans-serif']
    },
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      'pink': '#F2458E',
      'black': '#181818',
      'light-pink': '#FFEFED',     
      'blue': '#276EF1',     
      'violet': '#907AD6',     
      'white': '#ffffff',
      
      'purple-400': '#907AD6',
      brightRed:'hsl(12,88%,59%)',
      brightRedLight:'hsl(12,88%,69%)',
      brightRedSupLight:'hsl(12,88%,96%)',
      darkBlue:'hsl(228,39%,23%)',
      darkGrayishBlue:'hsl(227,12%,61%)',
      veryDarkBlue:'hsl(223,12%,13%)',
      veryPaleRed: 'hsl(12,100%,96%)',
      veryLightGray:'hsl(0,0%,98&)'
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
