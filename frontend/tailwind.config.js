/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#202123",
      light: "#f3f3f3",
      light2: "#ffffff",
    },
  },
  plugins: [require("daisyui")],
};
