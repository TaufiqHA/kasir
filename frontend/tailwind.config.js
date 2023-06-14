/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#202123",
      light: "#f3f3f3",
      light2: "#ffffff",
    },
  },
  plugins: [require("daisyui")],
};
