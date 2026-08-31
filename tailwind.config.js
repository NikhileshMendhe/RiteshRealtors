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
          orange: {
            DEFAULT: '#F97316', // Primary Brand Orange
            hover: '#EA580C',
            dark: '#C2410C',
            light: '#FFEDD5',
            50: '#FFF7ED',
          },
          green: {
            DEFAULT: '#16A34A', // Secondary Fresh Green
            hover: '#15803D',
            dark: '#166534',
            light: '#DCFCE7',
            50: '#F0FDF4',
          },
          charcoal: {
            DEFAULT: '#18181B', // Deep Charcoal text
            muted: '#4B5563',
            light: '#6B7280',
          },
          ivory: {
            DEFAULT: '#FDFBF7', // Warm Ivory bg
            card: '#FFFFFF',
            accent: '#F7F4EC', // Subtle beige
            border: '#E8E4D9',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(24, 24, 27, 0.03)',
        'soft-md': '0 10px 30px -5px rgba(24, 24, 27, 0.06)',
        'soft-lg': '0 20px 40px -10px rgba(24, 24, 27, 0.08)',
        'glow-orange': '0 10px 25px -5px rgba(249, 115, 22, 0.3)',
        'glow-green': '0 10px 25px -5px rgba(22, 163, 74, 0.25)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
