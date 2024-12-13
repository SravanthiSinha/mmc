// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      colors: {
        brand: {
          // Primary Palette
          yellow: '#F5BE09',
          background: {
            primary: '#FFFFFF',
            secondary: '#F7F8FA'
          },
          // Supporting Colors
          sage: '#7FA693',
          blue: {
            soft: '#A2C1D4',
            bright: '#2D87D3',
          },
          gray: {
            warm: '#F5F5F5',
          },
          // Text Colors
          text: {
            primary: '#4A5568',
            secondary:'#e5e5e5',
          },
          // Action Colors
          coral: '#FF7F50',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}