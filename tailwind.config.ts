import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B1220',
          2: '#0F1A2E',
          3: '#121F38',
        },
        panel: {
          DEFAULT: '#0F1A2E',
          2: '#121F38',
        },
        text: {
          DEFAULT: '#E6ECF5',
          muted: '#A6B3C7',
          faint: '#7D8AA3',
        },
        brand: {
          DEFAULT: '#7C5CFF',
          2: '#4FE3C2',
        },
        warn: '#FFB020',
        danger: '#FF4D4F',
        ok: '#2DD4BF',
        border: 'rgba(255,255,255,0.10)'
      },
      borderRadius: {
        xl: '14px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

export default config
