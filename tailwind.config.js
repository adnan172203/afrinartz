/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      spacing: {
        '50px': '50px',
        '75px': '75px',
        '13px': '13px',
        '5px': '5px',
        '15px': '15px',
        '30px': '30px',
        '25px': '25px',
      },
      width: {
        70: '70px',
        152: '152px',
        300: '300px',
      },
      height: {
        940: '940px',
        185: '185px',
      },
      colors: {
        themeColor: '#092943',
        bacgroundColor: '#041F35',
        darkBlue: '#0081EA',
        lightDark: '#143A58',
        lightBlue: '#46ACFF',
        white: '#FFFFFF',
      },
      borderRadius: {
        '10px': '10px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 20s linear infinite reverse',
      },
      fontFamily: {
        gallient: ['Gallient'],
        inter: ['Inter'],
      },

      screens: {
        xxl: { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        xs: { max: '575px' },
        // => @media (max-width: 575px) { ... }

        xxs: { max: '479px' },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
};
