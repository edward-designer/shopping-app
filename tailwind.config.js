module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abel': ['Abel', 'sans-serif']
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '&:hover > *');
        addVariant('childAll', '& *');
        addVariant('childAll-hover', '&:hover *');
        addVariant('hamburger-checked-1st', 'input[type="checkbox"]:checked ~ div span:first-child');
        addVariant('hamburger-checked-2nd', 'input[type="checkbox"]:checked ~ div span:nth-child(2)');
        addVariant('hamburger-checked-3rd', 'input[type="checkbox"]:checked ~ div span:last-child');
        addVariant('menu-checked', 'input[type="checkbox"]:checked ~ nav');
        addVariant('input-focused', 'input:focus + label');
    }
  ],  
}
