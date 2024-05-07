/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        RocknRoll: "RocknRoll One",
        lato: "lato",
      },
      colors: {
        "color-primary": "#6741d9",
        "color-primary-light": "#7950f2",
        "color-text": "#dee2e6",
        "color-text-dark": "#adb5bd",
        "color-background-100": "#343a40",
        "color-background-500": "#2b3035",
        "color-background-900": "#212529",
        "color-red": "#fa5252",
        "color-red-dark": "#e03131",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0,625rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
