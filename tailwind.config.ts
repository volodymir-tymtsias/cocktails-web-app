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
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'main-page': '#f6f6f6',
        'space': '#484a47ff',
        'gray': '#5c6d70ff',
        'rose': '#a37774ff',
        'salmon': '#e88873ff',
        'melon': '#e0ac9dff',
      },
    },
  },
  plugins: [],
};
export default config;
