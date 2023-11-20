/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#101728",
          800: "#072E57",
          700: "#0B4682",
          600: "#0E5DAE",
          500: "#1274D9",
          400: "#599EE4",
          300: "#8BBBEC",
          200: "#AECFF2",
          100: "#C6DDF6",
        },
        gray: {
          500: "#667085",
          400: "#9BA2B0",
          300: "#D0D5DD",
          200: "#F6F7F9",
          100: "#FCFCFD",
        },
      },
    },
  },
  plugins: [],
};