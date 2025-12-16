import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8abfff',
          400: '#5298ff',
          500: '#2566e8',
          600: '#1b4bce',
          700: '#1a3ea8',
          800: '#1c3887',
          900: '#1b306f'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(37, 102, 232, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
