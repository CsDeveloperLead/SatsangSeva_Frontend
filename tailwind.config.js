/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkorange: {
          "100": "#f58c0d",
          "200": "#f58021",
        },
        gray: {
          "100": "#fefefe",
          "200": "#8d8d8d",
          "300": "#808080",
          "400": "#272727",
          "500": "#111",
          "600": "rgba(0, 0, 0, 0.1)",
          "700": "rgba(0, 0, 0, 0.5)",
        },
        darkslateblue: "#4c4d8b",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f3f3f3",
          "300": "#f1f1f1",
        },
        darkgray: {
          "100": "#adadad",
          "200": "#a5a5a5",
          "300": "#959595",
        },
        black: "#000",
        orange: "#ff9e00",
        dimgray: "#6a6a6a",
        peachpuff: "#ffcba4",
        orangered: "#ff5f17",
        bisque: "#ffe6c5",
        goldenrod: "#eca024",
        sandybrown: "#ffb351",
        chocolate: "#d26600",
        mediumblue: "#3d37f1",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e1e1e1",
          "300": "#ddd",
          "400": "#d9d9d9",
        },
        cornflowerblue: "#2c9cf0",
        tomato: "#f26123",
        red: "#e40000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "dm-sans": "'DM Sans'",
        sacramento: "Sacramento",
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "26xl-6": "45.6px",
        "71xl": "90px",
        xl: "20px",
        mini: "15px",
        lgi: "19px",
        "31xl": "50px",
        "3xs": "10px",
        "8xs": "5px",
        "55xl": "74px",
        "4xs": "9px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      "smi-2": "12.2px",
      lg: "18px",
      "14xl-6": "33.6px",
      "8xl": "27px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "15xl": "34px",
      xs: "12px",
      "2xs": "11px",
      "9xl-4": "28.4px",
      "4xl": "23px",
      "xs-4": "11.4px",
      "3xl": "22px",
      lgi: "19px",
      "45xl": "64px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "32xl": "51px",
      smi: "13px",
      "17xl": "36px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1400px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
