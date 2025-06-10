/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        cobalt: "#0047AB",
        skyblue: "#87CEEB",
        royalblue: "#4169E1",
        navy: "#000080",
        azure: "#F0FFFF",
        powderblue: "#B0E0E6",
        steelblue: "#4682B4",
        cornflowerblue: "#6495ED",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
