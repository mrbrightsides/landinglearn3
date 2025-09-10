/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "#A855F7", // fuchsia-500
          2: "#6366F1", // indigo-500
          3: "#0EA5E9", // sky-500
        },
      },
    },
  },
  plugins: [],
};
