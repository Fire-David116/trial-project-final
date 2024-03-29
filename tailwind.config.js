/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-color': '#190F01',
        'border-color': '#C86C00',
        'balance-color': '#C86C00',
        'treding-color': '#4CD10D',
        gradientStart: '#ff416c',
        gradientEnd: '#ff4b2b',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0px)',
          },
  
          '70%': {
            transform: 'translateX(calc(-65px - 100%))',
          },
          '98%': {
            transform: 'translateX(calc(-65px - 100%))',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        slide: 'slide 8s ease infinite',
      },
    },
  },
  plugins: [],
};
