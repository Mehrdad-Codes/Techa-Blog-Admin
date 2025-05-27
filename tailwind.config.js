/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1677ff",
        success: "#52C41A",
        warning: "#faad14",
        danger: "#f5222d",
        primaryLight: "#e6f4ff",
        successLight: "#f6ffed",
        warningLight: "#fffbe6",
        dangerLight: "#fff1f0",
      }
    },
  },
  plugins: [],
  darkMode: "class"
}