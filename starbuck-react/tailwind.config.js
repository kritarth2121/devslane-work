module.exports = {
  purge: [],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        money: "#F3F1E7",
        lightgreen :'#D4E9E2',
      },
      
      zIndex: {
        "-10": "-10",
      },

      height: {
        large: "770px",
      },
      width: {
        large: "1900px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
