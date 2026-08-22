/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F7F4',
          100: '#E1EFE8',
          200: '#C2DFD1',
          300: '#94C7AF',
          400: '#5FA886',
          500: '#388863',
          600: '#286D4E',
          700: '#1F553D',
          800: '#1B432E',
          900: '#153525',
          950: '#0B1E15',
        },
        agri: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        earth: {
          50: '#FBF9F5',
          100: '#F5EFE6',
          200: '#EADECB',
          300: '#DEC9AA',
          400: '#CFB087',
          500: '#BE9566',
          600: '#A7794D',
          700: '#865E3C',
          800: '#6C4C33',
          900: '#583F2D',
        },
        sand: {
          50: '#FAFAF8',
          100: '#F4F4F0',
          200: '#E9E9E1',
          300: '#D9D9CC',
          400: '#BDBDB0',
        },
        amberGold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'elevated': '0 10px 30px -10px rgba(11, 30, 21, 0.08), 0 4px 6px -2px rgba(11, 30, 21, 0.03)',
        'card-hover': '0 20px 35px -12px rgba(11, 30, 21, 0.12), 0 1px 3px 0 rgba(11, 30, 21, 0.04)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
