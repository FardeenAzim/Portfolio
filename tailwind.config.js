/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          // bgColor: "#101010",
          primaryColor: "#19c9e3",
        //   textColor: "#7546c0"
        }
    },
    animation: {
      backgroundPositionSpin:
        "background-position-spin 3000ms infinite alternate",
    },
    keyframes: {
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
    },
    screens: {
      'xs': '401px',
      'sm': '766px',
      'md': '768px',
      'lg': '862px',
      'xl': '1251px',
      '2xl': '1536px',


      '2xl-mx' : {'max': '1535px'},
      'xl-mx' : {'max': '1250px'},
      'lg-mx' : {'max': '861px'},
      'md-mx' : {'max': '767px'},
      'sm-mx' : {'max': '765px'},
      'xs-mx' : {'max': '400px'},
    },
    // colors: {
    //   bgColor: "0A192F",
    //   primaryColor: "#87CEEB",
    //   textColor: "#C0C0C0"
    // }
  },
  plugins: [],
}
