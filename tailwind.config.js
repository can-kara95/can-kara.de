/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
=======
    colors: {
      'mainbg': '#09090D',
      'secbg': '#0A0B0D',
      'textclr-s': '#D9D9D9',
      'textclr-x': '#A4A5A6',
      'textclr-xx': '#5C6373'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '8ch' },
        },
        blinkCursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#D9D9D9' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        typewriter: 'typewriter 1s steps(16) 1s 1 normal both, blinkCursor .75s step-end infinite',
        'fade-in': 'fadeIn 2s ease-in forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
>>>>>>> acf2aefa (Latest Update)
      },
    },
  },
  plugins: [],
};
