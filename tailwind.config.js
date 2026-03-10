/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        ink: '#0d0d0d',
        neon: '#00b4ff',
        neon2: '#00d9f5',
        panel: '#161b27',
        bdr: '#1f2937',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        glow2: { '0%,100%': { opacity: '.6' }, '50%': { opacity: '1' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        marqueeX: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'glow2 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marqueeX 22s linear infinite',
      },
    },
  },
  plugins: [],
}
