/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'scale-up-center': 'scale-up-center 0.5s ease-in-out both',
        'shake-lr': 'shake-lr 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        'slide-out-right': 'slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },
      keyframes: {
        'scale-up-center': {
          '0%': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.1)' },
        },
        'shake-lr': {
          '0%,to': {
            transform: 'rotate(0deg)',
            'transform-origin': '50% 50%',
          },
          '10%,90%': {
            transform: 'rotate(8deg)',
          },
          '20%,40%,60%': {
            transform: 'rotate(-10deg)',
          },
          '30%,50%,70%': {
            transform: 'rotate(10deg)',
          },
          '80%': {
            transform: 'rotate(-8deg)',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          'to': {
            transform: 'translateX(100px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
