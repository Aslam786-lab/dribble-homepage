import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        coloranimation: {
          '0%': { backgroundColor: '#F8E4A0' },
          '25%': { backgroundColor: '#FCACE8' },
          '50%': { backgroundColor: '#D2BCF3' },
          '75%': { backgroundColor: '#EEF1D1' },
          '100%': { backgroundColor: '#E3E0E2' },
        },
        infinitescroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        infinitescroll2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        coloranimation: 'coloranimation 60s infinite',
        infinitescroll: 'infinitescroll 60s linear infinite',
        infinitescroll2: 'infinitescroll2 60s linear infinite',
      },
      fontFamily: {
        'source': ['"Source Serif 4"', 'serif']
      }
    },
  },
  plugins: [],
};
export default config;
