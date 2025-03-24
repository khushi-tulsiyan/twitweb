/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        primary: {
          DEFAULT: '#7C96AB',
          dark: '#6B859A',
          light: '#A8BECF',
        },
        secondary: {
          DEFAULT: '#F5F1E8',
          dark: '#EBE7DE',
        },
        text: {
          primary: '#343a40',
          secondary: '#6c757d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#495057',
            a: {
              color: '#7C96AB',
              '&:hover': {
                color: '#6B859A',
              },
            },
            h1: {
              color: '#343a40',
            },
            h2: {
              color: '#343a40',
            },
            h3: {
              color: '#343a40',
            },
            strong: {
              color: '#343a40',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 