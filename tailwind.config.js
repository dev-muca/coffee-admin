/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        "brown-300": "#A5673F",
        "brown-400": "#643C21",
        "brown-500": "#4A2C19",
      },
      borderColor: {
        "brown-300": "#A5673F",
        "brown-400": "#643C21",
        "brown-500": "#4A2C19",
      },
    },
  },
};
