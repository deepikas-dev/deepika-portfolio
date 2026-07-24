/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        surface: '#0B0B0D',
        panel: '#111114',
        crimson: {
          DEFAULT: '#FF3B30',
          soft: '#FF6B5F',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
        },
        cyan: {
          DEFAULT: '#00E5FF',
          soft: '#5CF1FF',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"General Sans"', 'sans-serif'],
        body: ['"General Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-crimson': '0 0 40px rgba(255,59,48,0.35)',
        'glow-violet': '0 0 40px rgba(139,92,246,0.35)',
        'glow-cyan': '0 0 40px rgba(0,229,255,0.35)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 25px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wave: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '1000px' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        marquee: 'marquee 28s linear infinite',
        wave: 'wave 12s linear infinite',
      },
    },
  },
  plugins: [],
}
