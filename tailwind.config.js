const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      dropShadow: {
        primary: '0 3px 12px rgba(255, 218, 0, 0.25)',
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      yellow: '#f6ae2d',
      secondary: '#2c2829',
      gray: '#CECECE',
      primary: {
        'more-lightest': '#FFF5FA',
        lightest: '#f7e1ec',
        lighter: '#c06795',
        light: '#ad427a',
        base: '#9c1f60',
        dark: '#80194e',
        darker: '#61133c',
      },
      black: {
        lighter: '#919191',
        light: '#5E5E5E',
        dark: '#1A1517',
        darker: '#070505',
      },
      neutral: {
        10: '#E6E6E6',
        20: '#B3B3B3',
        30: '#808080',
      },
      active: '#178EE9',
      error: '#DB0707',
      success: '#06B73A',
      screen: '#F5F7FD',
    },
    fontFamily: {
      bold: 'Montserrat Bold',
      medium: 'Montserrat Medium',
      regular: 'Montserrat Regular',
      'semi-bold': 'Montserrat SemiBold',
    },
    content: {
      width: '425px',
      padding: {
        x: '1rem',
        y: '5rem',
        b: '4rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.safe-top': {
          paddingTop: 'constant(safe-area-inset-top)',
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-bottom': {
          paddingBottom: 'constant(safe-area-inset-bottom)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
      })
    }),
  ],
}
