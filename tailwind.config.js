/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "brown-300": "#A5673F",
        "brown-400": "#643C21",
        "brown-500": "#4A2C19",
      },
      width: {
        100: "400px",
        700: "700xp",
      },
      height: {
        87: "350px",
        main: "calc(100vh - 64px)",
        form: "calc(100vh - 200px)",
      },
    },
  },
  plugins: [],
};
