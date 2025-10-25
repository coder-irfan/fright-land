/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fright: {
          textColor: "hsl(235, 100%, 93%)", // DBDEFF
          bgColor: "hsl(252, 64%, 14%)", // 160D3B
          whiteshColor: "hsl(234, 100%, 96%)", // EBEDFF
          white: "hsl(0, 0%, 100%)", // FFFFFF
          purple: "hsl(313, 65%, 61%)", // DC59C0
          lightViolet: "hsl(236, 100%, 87%)", // BDC1FF
          deepViolet: "hsl(252, 64%, 21%)", // 211357
          darkViolet: "hsl(250, 62%, 7%)", // 0B071E
          babyPink: "hsl(311, 74%, 95%)", // FCEBF9
          darkPink: "hsl(314, 54%, 49%)", // C039A1
          deepVioletShade: "hsl(251, 61%, 11%)", // 110B2D
          lightGradientViolet: "hsl(249, 100%, 65%)", // 654AFF
          darkGradientVioled: "hsl(255, 79%, 51%)", // #4F1EE4
          lightGradientPink: "hsl(314, 80%, 63%)", // EC56C9
          darkGradientPink: "hsl(317, 58%, 39%)", // 9F2A7E
          lightGradientYellow: "hsl(41, 100%, 53%)", // FFB311
          darkGradientYellow: "hsl(36, 85%, 49%)", // E59013
        },
      },
      fontFamily: {
        frightmare: ["Frightmare", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/Images/hero-bg.webp')",
        "general-bg-pattern": "url('/Images/bg-image.webp')",
        "death-level-pattern": "url('/Images/graveyard-bg.webp')",
      },
    },
  },
  plugins: [],
};
