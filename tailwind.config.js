/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        daySky: "url('/day-sky.jpg')",
        nightStar: "url('/night-star.jpg')",
      },
      backgroundColor: {
        darkBg: "#171717",
        darkBgSecondary: "#262626",
        transparent: "rgba(0,0,0,0.5)",
        transparentSecondary: "rgba(0,0,0,0.4)",
      },
      colors: {
        darkText: "#f8fafc",
        darkSubText: "#94a3b8",
      },
      fontFamily: {
        libre: ["Inter", "Noto Sans TC", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
