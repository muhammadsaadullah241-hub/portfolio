/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        // General Sans for UI/body, Instrument Serif for the italic accent
        // words, IBM Plex Mono for the tracked-out uppercase labels.
        sans: ['"General Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'ui-serif', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Warm, paper-like editorial palette (design.md sections 1 & 8)
        cream: {
          DEFAULT: '#F7EDE0', // page background
          light: '#FBF3E9', // nav / alternate base
          deep: '#EFE2D0', // inset blocks
        },
        ink: {
          DEFAULT: '#1A1512', // headline / strong text
          soft: '#2A231C',
        },
        muted: '#675D51',
        rust: {
          DEFAULT: '#A8431F', // text-safe terracotta (WCAG AA on cream)
          bright: '#C1502E', // decorative fills / blurred glows
          tint: '#F6DDD3',
        },
        moss: {
          DEFAULT: '#147248', // text-safe green (WCAG AA on cream)
          bright: '#1E8E5A',
          tint: '#DCEFE4',
        },
        paper: '#FFFFFF', // floating cards / surfaces
        line: 'rgba(26, 21, 18, 0.12)',
      },
      fontSize: {
        eyebrow: ['12px', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '500' }],
        label: ['13px', { lineHeight: '1.4' }],
        body: ['16px', { lineHeight: '1.75' }],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 8px 24px -10px rgba(26, 21, 18, 0.14)',
        float: '0 24px 60px -20px rgba(26, 21, 18, 0.28)',
        soft: '0 2px 6px rgba(26, 21, 18, 0.06)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'blob-drift': {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.08)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'blob-drift': 'blob-drift 16s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out both',
        shimmer: 'shimmer 1.6s infinite',
      },
    },
  },
  plugins: [],
}
