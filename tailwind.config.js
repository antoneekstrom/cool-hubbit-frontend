module.exports = {
  purge: ["pages/**/*.tsx", "src/**/*.tsx"],
  theme: {
    colors: {
      gray: {
        10: "#F8F8F8"
      },
      white: "#FFFFFF",
      turqoise: {
        10: "#E7FDFE",
        "50": "#09cdda",
        70: "#1298A1"
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Playfair Display", "serif"]
    },
    fontSize: {
      md: "1rem",
      lg: "1.1rem",
      xl: "1.8rem",
      "2xl": "3rem"
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700
    }
  },
  plugins: [],
};
