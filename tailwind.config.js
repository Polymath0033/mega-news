/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: "36px",
        h2: "31x",
        h3: "25px",
        h4: "20px",
        h5: "16px",
        h6: "13px",
        "subtitle-1": ["16px", { fontWeight: 400 }],
        "subtitle-2": ["14px", { fontWeight: 500 }],
        "body-1": ["16px", { fontWeight: 400 }],
        "body-2": ["14px", { fontWeight: 400 }],
        button: ["14px", { fontWeight: 500 }],
        input: ["12px", { fontWeight: 400 }],
        overline: ["10px", { fontWeight: 400 }],
      },
    },
  },
  plugins: [],
};
