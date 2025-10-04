import type { Config } from 'tailwindcss';

/**
 * Tailwind configuration tuned for accessible defaults.
 * We scan the entire app directory for class usage including MDX.
 */
const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          teal: '#0e7490',
          slate: '#1e293b'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
