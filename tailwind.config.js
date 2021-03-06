module.exports = {
  darkMode: 'class',
  theme: {
    minHeight: {
      96: '24rem',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      gridTemplateRows: {
        '5-auto': 'repeat(5, minmax(0, auto))',
        '6-auto': 'repeat(6, minmax(0, auto))',
      },
      colors: {
        primary: '#0088cc',
      },
    },
  },
}
