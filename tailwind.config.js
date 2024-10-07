module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E0F8FA',
          100: '#B3F1F5',
          200: '#80E4EF',
          300: '#4DDAE9',
          400: '#26D1E4',
          500: '#19BBCA',
          600: '#169FA2',
          700: '#12807A',
          800: '#0F6362',
          900: '#0C4A49',
        },
        secondary: {
          50: '#FDF5F0',
          100: '#FBE4D8',
          200: '#F6CBB2',
          300: '#F0AC84',
          400: '#EA8B5D',
          500: '#E26A3E',
          600: '#C3502D',
          700: '#9C3D24',
          800: '#742C1B',
          900: '#541F14',
        }
      }
    },
  },
  plugins: []
}
