const colors = require('tailwindcss/colors')

module.exports = {
  // purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  //darkMode: false,
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        ...colors,
        gray: colors.slate,
        green: colors.emerald,
        coolgray: colors.gray,

        primary: colors['indigo'],
        secondary: colors['teal'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
