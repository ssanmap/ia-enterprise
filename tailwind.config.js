/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#0066cc",
          600: "#005bb7",
        },
        secondary: {
          500: "#ff6600",
          600: "#e65c00",
        },
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'bounce-horizontal': 'bounceHorizontal 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      }
    },
  },
  plugins: [],
};