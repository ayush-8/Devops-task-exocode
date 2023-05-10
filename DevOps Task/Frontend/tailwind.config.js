/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#0C5BC6",
        primary2: "#242331",
        secondary1: "#F9F9F9",
        secondary2: "#C6DEFF",
        secondary3: "#242331",
        secondary4: "#797979",
        secondary5: "#FFFFFF",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      }
    },
  },
  plugins: [],
};
