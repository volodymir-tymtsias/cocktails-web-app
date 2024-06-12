import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dangrek: ['Dangrek', 'sans-serif'],
        preahvihear: ['Preahvihear', 'sans-serif'],
      },
      colors: {
        'light-gray': '#f6f6f6',
        'outer-space': '#484a47',
        'paynes-gray': '#5c6d70',
        'old-rose': '#a37774',
        'salmon': '#e88873',
        'melon': '#e0ac9d',
      },
    },
  },
  plugins: [],
};
export default config;
