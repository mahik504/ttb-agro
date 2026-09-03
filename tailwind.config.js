/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: {
          DEFAULT: '#0A2118',
          950: '#0A2118',
          900: '#0F2D22',
          800: '#14382B',
          deep: '#061710',
          light: '#112C20',
        },
        field: {
          DEFAULT: '#17412E',
          900: '#17412E',
          800: '#215A40',
          700: '#2C7352',
          deep: '#0A2118',
          hover: '#123324',
        },
        leaf: {
          DEFAULT: '#326049',
          800: '#326049',
          700: '#3E785C',
          600: '#4A906F',
          light: '#427A5D',
        },
        cream: {
          DEFAULT: '#F1EBDD',
          50: '#FBF9F4',
          100: '#F1EBDD',
          200: '#E8DEC9',
          light: '#F8F5EC',
          dark: '#E8DFC9',
        },
        parchment: {
          DEFAULT: '#E4D7BA',
          100: '#E4D7BA',
          200: '#D5C49F',
          300: '#C6B184',
          light: '#EDE2CC',
          dark: '#D5C4A1',
        },
        ink: {
          DEFAULT: '#122017',
          950: '#0B130E',
          900: '#122017',
          800: '#1A2F22',
          soft: '#405046',
          muted: '#63756A',
        },
        gold: {
          DEFAULT: '#B99045',
          400: '#C8A359',
          500: '#B99045',
          600: '#A47D36',
          soft: '#D6B66E',
          deep: '#8C6C2B',
          line: 'rgba(185, 144, 69, 0.35)',
        },
        paper: {
          DEFAULT: '#FBF9F4',
          50: '#FBF9F4',
          100: '#F5F1E8',
          elevated: '#E4D7BA',
          muted: '#D5C4A1',
        },
        danger: '#8F2D2D',
        // Semantic backward-compatibility aliases
        brand: {
          50: '#FBF9F4',
          100: '#F1EBDD',
          200: '#E8DEC9',
          300: '#A1C0B1',
          400: '#729E8B',
          500: '#4D806B',
          600: '#17412E',
          700: '#14382B',
          800: '#0F2D22',
          900: '#0A2118',
          950: '#061710',
        },
        accent: {
          DEFAULT: '#B99045',
          light: '#C8A359',
          dark: '#A47D36',
        },
        surface: {
          DEFAULT: '#FBF9F4',
          muted: '#F1EBDD',
          raised: '#E4D7BA',
          dark: '#0A2118',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(18, 32, 23, 0.04)',
        'elevated': '0 6px 16px -2px rgba(18, 32, 23, 0.08)',
        'ledger': '0 10px 30px -10px rgba(10, 33, 24, 0.15)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      animation: {
        'harvest-wash': 'harvestWash 32s ease-in-out infinite alternate',
      },
      keyframes: {
        harvestWash: {
          '0%': { transform: 'scale(1) translate(0%, 0%)' },
          '50%': { transform: 'scale(1.06) translate(2%, -2%)' },
          '100%': { transform: 'scale(1) translate(-2%, 2%)' },
        }
      }
    },
  },
  plugins: [],
}
