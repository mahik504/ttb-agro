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
          deep: '#061710',
          light: '#112C20',
        },
        field: {
          DEFAULT: '#17412E',
          deep: '#0A2118',
          hover: '#123324',
        },
        leaf: {
          DEFAULT: '#326049',
          light: '#427A5D',
        },
        cream: {
          DEFAULT: '#F1EBDD',
          light: '#F8F5EC',
          dark: '#E8DFC9',
        },
        parchment: {
          DEFAULT: '#E4D7BA',
          light: '#EDE2CC',
          dark: '#D5C4A1',
        },
        ink: {
          DEFAULT: '#122017',
          soft: '#405046',
          muted: '#63756A',
        },
        gold: {
          DEFAULT: '#B99045',
          soft: '#D6B66E',
          antique: '#B99045',
          deep: '#8C6C2B',
          line: 'rgba(185, 144, 69, 0.35)',
        },
        danger: '#8F2D2D',
        // Semantic backward compatibility
        paper: {
          DEFAULT: '#F1EBDD',
          elevated: '#E4D7BA',
          muted: '#D5C4A1',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(18, 32, 23, 0.04)',
        'elevated': '0 6px 16px -2px rgba(18, 32, 23, 0.08)',
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
