const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.jsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.jsx",
    "./components/**/*.js",
    "./public/index.html",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.tsx",
    "./pages/**/*.jsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.jsx",
    "./components/**/*.js",
    "./public/index.html",
  ],
  theme: {
    fontSize: {
      xxs: "0.65rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#95C8EF",
          200: "#71B5EA",
          300: "#4EA3E4",
          400: "#3C9AE2",
          500: "#268ddd",
          600: "#1dabff",
          700: "#0C2B46",
        },
        secondary: {
          100: "#808AB3",
          200: "#737EAB",
          300: "#6672A3",
          400: "#5C6899",
          500: "#454E73",
          600: "#0F111A",
          700: "#07080D",
        },
        tertiary: {
          100: "#D4ACF2",
          200: "#BC7FEB",
          300: "#B470E8",
          400: "#844EAD",
          500: "#61397F",
          600: "#462A5C",
          700: "#1A1023",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
