const { default: tailwindcss } = require("@tailwindcss/vite");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Corrected primary color to a valid hex value
        secondary: "white",
        accent: "#f59e0b", // Added accent color
        muted: "#6b7280", // Added muted color
        // Add more custom colors here
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
