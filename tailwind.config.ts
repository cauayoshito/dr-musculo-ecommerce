import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff7d75',
          DEFAULT: '#f14230',
          dark: '#b82d26',
        },
        secondary: {
          light: '#f8e8a7',
          DEFAULT: '#f6d365',
          dark: '#f3c04d',
        },
      },
    },
  },
  plugins: [],
}

export default config