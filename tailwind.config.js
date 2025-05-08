/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e1006e',
        secondary: '#223a5e',
        accent: '#f9fafb',
        dark: '#171717',
        light: '#ededed',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'magenta-glow': '0 0 32px 0 #e1006e66',
        'card': '0 4px 32px 0 rgba(34,58,94,0.10)',
      },
      backgroundImage: {
        'noise': "url('/file.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};
