import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  theme: {
    colors: {
      'black': 'black',
      'white': 'white',
      'blue': '#7f0577',
      'violent':'#a4519f',
      'yellow': '#d140c81a',
      'purple':"#d140c8",
      'pink': '#f457ea',
      'green':"#fe14ef",
      'red': '#f6e1f4',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
  
}
