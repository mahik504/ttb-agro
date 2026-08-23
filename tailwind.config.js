/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F4EFE4',
          elevated: '#FBF7EE',
          muted: '#EAE4D5',
        },
        ink: {
          DEFAULT: '#0E1C14',
          soft: '#3D4A42',
          muted: '#66746B',
        },
        field: {
          DEFAULT: '#1A3C2C',
          deep: '#0B1E15',
          hover: '#133022',
        },
        leaf: {
          DEFAULT: '#2D5A43',
          light: '#427A5D',
        },
        gold: {
          DEFAULT: '#C4A35A',
          deep: '#8C7033',
          muted: 'rgba(196, 163, 90, 0.40)',
          hairline: 'rgba(196, 163, 90, 0.25)',
        },
        danger: '#8F2D2D',
        // Backward-compatible semantic mappings
        forest: {
          50: '#FBF7EE',
          100: '#EAE4D5',
          200: '#D5CDBE',
          700: '#2D5A43',
          800: '#1A3C2C',
          900: '#11291E',
          950: '#0B1E15',
        },
        agri: {
          50: '#FBF7EE',
          100: '#EAE4D5',
          300: '#C4A35A',
          400: '#A48644',
          600: '#1A3C2C',
          700: '#133022',
        },
        sand: {
          50: '#FBF7EE',
          100: '#F4EFE4',
          200: '#E5DEC8',
          300: '#D5CDBE',
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(14, 28, 20, 0.04)',
        'elevated': '0 4px 12px -2px rgba(14, 28, 20, 0.06)',
      },
      animation: {
        'mesh-wash': 'meshWash 34s ease-in-out infinite alternate',
      },
      keyframes: {
        meshWash: {
          '0%': { transform: 'scale(1) translate(0%, 0%)' },
          '50%': { transform: 'scale(1.08) translate(3%, -2%)' },
          '100%': { transform: 'scale(1) translate(-2%, 3%)' },
        }
      }
    },
  },
  plugins: [],
}
