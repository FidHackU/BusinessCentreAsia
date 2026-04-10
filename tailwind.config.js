export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#060918',
        secondary: '#080b1c',
        accent: {
          DEFAULT: "#f97316",
          hover: "#fb923c",
          subtle: "rgba(249, 115, 22, 0.08)",
          glow: "rgba(249, 115, 22, 0.3)",
        },
        glass: "rgba(255, 255, 255, 0.03)",
        card: '#080b1c',
        border: 'rgba(255, 255, 255, 0.04)',
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': "linear-gradient(135deg, #060918 0%, #0f1535 40%, #131a45 70%, #0a1025 100%)",
        'gradient-accent': "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
        'gradient-card': "linear-gradient(135deg, rgba(17, 22, 64, 0.6) 0%, rgba(10, 15, 40, 0.8) 100%)",
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
