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
