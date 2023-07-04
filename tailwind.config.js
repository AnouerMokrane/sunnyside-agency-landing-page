/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html, js, ts, vue}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      colors: {
        primary: {
          "soft-red": "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
          "dark-blue": "hsl(198, 62%, 26%)",
          "dark-moderate-cyan": "hsl(168, 34%, 41%)",
          "footer": "#9bd8c9"
        },
        neutural: {
          "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
          "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
          "Dark-grayish-blue": "hsl(232, 10%, 55%)",
          "Grayish-blue": "hsl(210, 4%, 67%)",
        },
      },
      letterSpacing: {
        bigest: "0.2rem",
      },
    },
    plugins: [],
  },
};
