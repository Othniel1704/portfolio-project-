/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Instrument Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Fond "encre" bleu nuit (remplace le noir neutre)
        ink: {
          700: '#1a2346',
          800: '#121a36',
          900: '#0c1228',
          950: '#070b1c',
        },
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee',
          500: '#06b6d4', // Cyan
          600: '#0891b2',
          700: '#0e7490',
          900: '#164e63',
        }
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
        },
      },
      animation: {
        aurora: 'aurora 22s ease-in-out infinite',
        'aurora-slow': 'aurora 30s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
};
