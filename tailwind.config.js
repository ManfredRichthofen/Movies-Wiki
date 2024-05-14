const flowbite = require("flowbite-react/tailwind");
const { fontFamily } = require("tailwindcss/defaultTheme");

  module.exports = {
    corePlugins: {
      preflight: false,
      container: false,
    },
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./src/**/*.{jsx,tsx,html}",
    flowbite.content(),
  ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', ...fontFamily.sans],
          jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
          mono: ['"Fira Code"', ...fontFamily.mono],
        },
        borderRadius: {
          sm: "4px",
        },
        screens: {
          sm: "0px",
          lg: "997px",
        },
        colors: {},
      },
    },
  plugins: [
    flowbite.plugin(),
  ],
};