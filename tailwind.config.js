export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Slate 900
        secondary: '#1e293b', // Slate 800
        accent: {
          DEFAULT: "#3b82f6", // Blue 500
          hover: "#60a5fa", // Blue 400
          subtle: "rgba(59, 130, 246, 0.1)",
          glow: "rgba(59, 130, 246, 0.25)",
        },
        glass: "rgba(255, 255, 255, 0.05)",
        card: '#1e293b',
        border: 'rgba(255, 255, 255, 0.08)',
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gradient-hero': "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        'gradient-accent': "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
        'gradient-card': "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'breathe': 'breathe 6s ease-in-out infinite alternate',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(calc(-100% - 1rem))' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.3)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 0 8px rgba(249, 115, 22, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(10px, -15px, 0) scale(1.05)' },
          '66%': { transform: 'translate3d(-10px, 10px, 0) scale(0.95)' },
        },
        breathe: {
          '0%': { transform: 'scale(1)', opacity: '0.15' },
          '100%': { transform: 'scale(1.25)', opacity: '0.3' },
        }
      }
    },
  },
  plugins: [],
}
