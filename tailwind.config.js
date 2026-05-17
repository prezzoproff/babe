/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        midnight: "#0b1026",
        plum: "#36103f",
        roseglow: "#ff6f9d",
        champagne: "#f7d99c",
        petal: "#ffd3df",
      },
      boxShadow: {
        bloom: "0 24px 80px rgba(255, 111, 157, 0.25)",
        gold: "0 0 45px rgba(247, 217, 156, 0.28)",
      },
      backgroundImage: {
        cosmos:
          "radial-gradient(circle at 20% 15%, rgba(255, 111, 157, 0.26), transparent 28%), radial-gradient(circle at 78% 8%, rgba(247, 217, 156, 0.18), transparent 24%), radial-gradient(circle at 50% 60%, rgba(110, 61, 255, 0.22), transparent 34%), linear-gradient(145deg, #0b1026 0%, #27103d 38%, #5b123b 70%, #150b26 100%)",
      },
    },
  },
  plugins: [],
};
