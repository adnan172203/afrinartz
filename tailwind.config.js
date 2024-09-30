/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./**/*.html'],
  content: ['./*html'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 20s linear infinite reverse',
      },
      fontFamily: {
        gallient: ['Gallient'],
        inter: ['Inter'],
      },
    },
    screens: {
      xxl: { max: '1599px' },
      // => @media (max-width: 1599px) { ... }

      xl: { max: '1399px' },
      // => @media (max-width: 1399px) { ... }

      lg: { max: '1199px' },
      // => @media (max-width: 1199px) { ... }

      md: { max: '991px' },
      // => @media (max-width: 991px) { ... }

      sm: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      xs: { max: '575px' },
      // => @media (max-width: 575px) { ... }

      xxs: { max: '479px' },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
