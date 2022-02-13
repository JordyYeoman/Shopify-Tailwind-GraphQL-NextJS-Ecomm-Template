const defaultTheme = require("tailwindcss/defaultTheme");
const animationDuration = 0.75;
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
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(30px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(30px)",
          },
        },
      },
      animation: {
        "fade-in-down-025": `fade-in-down  ${animationDuration}s ease-out 0.25s`,
        "fade-in-down-05": `fade-in-down  ${animationDuration}s ease-out 0.5s`,
        "fade-in-down-075": `fade-in-down  ${animationDuration}s ease-out 0.75s`,
        "fade-in-down-1": `fade-in-down ${animationDuration}s ease-out 1s`,
        "fade-in-down-125": `fade-in-down  ${animationDuration}s ease-out 1.25s`,
        "fade-in-down-15": `fade-in-down  ${animationDuration}s ease-out 1.5s`,
        "fade-in-up-025": `fade-in-up  ${animationDuration}s ease-out 0.25s`,
        "fade-in-up-05": `fade-in-up  ${animationDuration}s ease-out 0.5s`,
        "fade-in-up-075": `fade-in-up  ${animationDuration}s ease-out 0.75s`,
        "fade-in-up-1": `fade-in-up ${animationDuration}s ease-out 1s`,
        "fade-in-up-125": `fade-in-up  ${animationDuration}s ease-out 1.25s`,
        "fade-in-up-15": `fade-in-up  ${animationDuration}s ease-out 1.5s`,
        "fade-out-up-025": `fade-out-up  ${animationDuration}s ease-out 0.25s`,
        "fade-out-up-05": `fade-out-up  ${animationDuration}s ease-out 0.5s`,
        "fade-out-up-075": `fade-out-up  ${animationDuration}s ease-out 0.75s`,
        "fade-out-up-1": `fade-out-up ${animationDuration}s ease-out 1s`,
        "fade-out-up-125": `fade-out-up  ${animationDuration}s ease-out 1.25s`,
        "fade-out-up-15": `fade-out-up  ${animationDuration}s ease-out 1.5s`,
        "fade-out-down-025": `fade-out-down  ${animationDuration}s ease-out 0.25s`,
        "fade-out-down-05": `fade-out-down  ${animationDuration}s ease-out 0.5s`,
        "fade-out-down-075": `fade-out-down  ${animationDuration}s ease-out 0.75s`,
        "fade-out-down-1": `fade-out-down ${animationDuration}s ease-out 1s`,
        "fade-out-down-125": `fade-out-down  ${animationDuration}s ease-out 1.25s`,
        "fade-out-down-15": `fade-out-down  ${animationDuration}s ease-out 1.5s`,
      },
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
