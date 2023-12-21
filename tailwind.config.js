/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0ea5e9",

          secondary: "#22c55e",

          accent: "#f59e0b",

          neutral: "#000000",

          "base-100": "#f0f9ff",

          info: "#3abff8",

          success: "#248046",

          warning: "#f0b132",

          error: "#ed4245",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
