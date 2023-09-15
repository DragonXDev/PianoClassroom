/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "my-red": "#eab676",
        "my-blue": "#ffe1a6",
      },
      backgroundImage: (theme) => ({
        "red-purple-gradient": "linear-gradient(to right, blue, purple)",
        "blue-purple-gradient": `linear-gradient(45deg, ${theme(
          "colors.my-red"
        )}, ${theme("colors.my-blue")})`,
      }),
    },
  },
  plugins: [require("daisyui")],
};
