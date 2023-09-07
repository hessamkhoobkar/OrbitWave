/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      colors: {
        'orbitblue': {
          100: '#2F85FF',
          200: '#266DD3',
          300: '#1D55A7',
          400: '#143D7C',
          500: '#0B2550',
        },
        'orbitmauve': {
          100: '#C397FF',
          200: '#9C7BD3',
          300: '#7660A7',
          400: '#4F447C',
          500: '#292950',
        },
        'orbisky': {
          100: '#E1E4F2',
          200: '#B4B9C9',
          300: '#888EA0',
          400: '#5B6377',
          500: '#2F384D',
        },
        'orbitink': {
          100: '#0F192F',
          200: '#0A1429',
          300: '#060F22',
          400: '#020918',
          500: '#01050F',
        },
      }
    },
  },
  plugins: [],
}

