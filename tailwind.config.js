const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { color } = require('./libs/global/src');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'libs/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'apps/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#6b7280',
        error: '#e3342f',
        success: '#38c172',
        warning: '#f39c12',
        darkSlate: '#1f2d3d',
        lightSlate: '#a4b0be',
        darkGray: '#2d3a4d',
        lightGray: '#d2d6dc',
        darkZinc: '#64748b',
        lightZinc: '#e0e6ed',
        darkNeutral: '#4a5568',
        lightNeutral: '#cbd5e0',
        darkStone: '#718096',
        lightStone: '#edf2f7',
        darkRed: '#e53e3e',
        lightRed: '#fc8181',
        darkOrange: '#ed8936',
        lightOrange: '#f6ad55',
        darkAmber: '#ecc94b',
        lightAmber: '#d69e2e',
        darkYellow: '#f6e05e',
        lightYellow: '#faf089',
        darkLime: '#a0d468',
        lightLime: '#c0ca33',
        darkGreen: '#38a169',
        lightGreen: '#68d391',
        darkEmerald: '#48bb78',
        lightEmerald: '#38a169',
        darkTeal: '#4fd1c5',
        lightTeal: '#4dc0b5',
        darkCyan: '#38b2ac',
        lightCyan: '#4fd1c5',
        darkSky: '#3490dc',
        lightSky: '#63b3ed',
        darkBlue: '#2779bd',
        lightBlue: '#4299e1',
        darkIndigo: '#4f46e5',
        lightIndigo: '#667eea',
        darkViolet: '#805ad5',
        lightViolet: '#9f7aea',
        darkPurple: '#6b46c1',
        lightPurple: '#a779e9',
        darkFuchsia: '#d38aea',
        lightFuchsia: '#e0a7e1',
        darkPink: '#e53e3e',
        lightPink: '#f687b3',
        darkRose: '#da4a91',
        lightRose: '#ed64a6',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      borderWidth: {
        DEFAULT: '1px',
        6: '6px',
      },
    },
  },
  safelist: Object.keys(color).flatMap((colorKey) => [
    `bg-${colorKey}`,
    `hover:bg-${colorKey}`,
    `hover:text-${colorKey}`,
    `border-${colorKey}`,
    `fill-${colorKey}`,
  ]),
  plugins: [],
};
