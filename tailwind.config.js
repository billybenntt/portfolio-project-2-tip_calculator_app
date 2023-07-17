/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: [
    './*.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1440px'
    },
    fontSize: {
      'sm': '0.813rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem'
    },

    extend: {
      colors: {
        'primary': {
          'cyan-1': '#F4FAFA',
          'cyan-2': '#C5E4E7',
          'cyan-3': '#7F9D9F',
          'cyan-4': '#5E7A7D',
          'cyan-5-light': '#9FE8DF',
          'cyan-5': '#26C2AE',
          'cyan-6': '#00474B'
        },
        'accent': {
          'gray' : '#F3F9FA'
        }

      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
      },

    },
  },
  plugins: [],
}