module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'budget-blue': {
          DEFAULT: '#4A96C2',
          50: '#D3E6F0',
          100: '#C4DDEB',
          200: '#A6CBE1',
          300: '#87B9D7',
          400: '#69A8CC',
          500: '#4A96C2',
          600: '#35789E',
          700: '#275875',
          800: '#19384B',
          900: '#0B1921',
        },
        'budget-purple': {
          DEFAULT: '#774BC3', 50: '#DFD5F1', 100: '#D3C5EC', 200: '#BCA7E2', 300: '#A588D7', 400: '#8E6ACD', 500: '#774BC3', 600: '#5D35A0', 700: '#442776', 800: '#2C194C', 900: '#140B22',
        },
        'budget-orange': {
          DEFAULT: '#C3774B', 50: '#F1DFD5', 100: '#ECD3C5', 200: '#E2BCA7', 300: '#D7A588', 400: '#CD8E6A', 500: '#C3774B', 600: '#A05D35', 700: '#764427', 800: '#4C2C19', 900: '#22140B',
        },
        'budget-green': {
          DEFAULT: '#97C34B', 50: '#E7F1D5', 100: '#DEECC5', 200: '#CCE2A7', 300: '#BAD788', 400: '#A9CD6A', 500: '#97C34B', 600: '#79A035', 700: '#597627', 800: '#3A4C19', 900: '#1A220B',
        },
      },
    },
  },
  plugins: [],
};
