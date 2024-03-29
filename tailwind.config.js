/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#111111",
        "orange-web": {
          DEFAULT: "#F8A910",
          10: "#F8A9101A",
        },
        xanthous: "#FFC148",
        silver: "#A2A2A2",
        "eerie-black": "#1A1A1A",
        seasalt: "#FAFAFA",
        "spring-green": "#19ED7B",
        "pacific-cyan": {
          DEFAULT: "#25b5d4",
          10: "#25b5d433",
        },
      },
      backgroundImage: {
        home: "url('/images/home-bg.png')",
      },
      transitionDuration: {
        5000: 5000,
      },
      fontFamily: {
        "sharp-grotesk": ["Sharp-Grotesk", "sans"],
      },
    },
  },
  plugins: [],
};
