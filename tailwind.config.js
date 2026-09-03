/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F7F5',
          100: '#E4EDE7',
          200: '#C9DBD1',
          300: '#A1C0B1',
          400: '#729E8B',
          500: '#4D806B',
          600: '#386653', // Primary
          700: '#2E5244',
          800: '#274338',
          900: '#21372F', // Deep Background
          950: '#111F19',
        },
        accent: {
          DEFAULT: '#D4AF37', // Refined Gold
          light: '#E5C973',
          dark: '#AA8822'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F9FAFA',
          raised: '#F2F4F3',
          dark: '#111F19',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(17, 31, 25, 0.05)',
        'float': '0 20px 40px -10px rgba(17, 31, 25, 0.1)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
