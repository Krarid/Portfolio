/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors: {
        salmon: 'hsl(7, 100%, 68%)',
        darkSalmon: 'hsl(7, 46%, 48%)',
        grayish: 'hsl(199, 20%, 18%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        uxs: '0.5rem',
        xxs: '0.65rem',
      },
      rotate: {
        '360':'360deg',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

