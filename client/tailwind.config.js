/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        greens: "#138808",
      },
      backgroundImage: {
        "bjp-gradient":
          "linear-gradient(to bottom, #FF9933 0%, #FF9933 50%, #138808 50%, #138808 100%)",
      },
    },
  },
  plugins: [],
};

