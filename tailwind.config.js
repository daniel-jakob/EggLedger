const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./www/*.html'],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue: colors.blue,
        green: colors.emerald,
        short: "rgb(69, 159, 246)",
        standard: "rgb(139, 93, 246)",
        extended: "rgb(246, 168, 35)",
        tutorial: "rgb(115, 128, 140)",
        goldenstar: "rgb(255, 215, 0)",
        'yellow-700': "rgb(251 191 36)", 
        rare: '#6ab6ff',
        epic: '#c03fe2',
        legendary: '#eeab42',
        dubcap: 'rgb(173, 10, 198)',
        dubcapdarker: 'rgb(120, 7, 138)',
        selectedmission: 'rgb(10, 173, 82)',
        selectedmissiondarker: 'rgb(7, 120, 56)',
      },
      height: {
        stretch: 'stretch',
        '1rem': '1rem',
      },
      width: {
        'onedig': '1rem',
        'twodig': '1.25rem',
        'threedig': '1.5rem',
      },
      lineHeight: {
        '1rem': '1rem'
      },
      spacing: {
        '025rem': '0.25rem',
        '05rem': '0.5rem',
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
      },
      fontSize: {
        'star': '1.4rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
      },
      backgroundColor: {
        'white': '#ffffff',
        'dark': '#393b40',
        'darker': '#242629',
        'darkerer': "#1c1d1f",
        'darkest': '#151617',

        'dark_tab': "#323633",
        'darker_tab': "#262927",
        'dark_tab_hover': "#3a3d3a",
        'darker_tab_hover': "#2e312e",
        'privacy_blue': "#276ec8",
        'data_loss_red': "#820808"
      },
      backgroundImage: {
        'rare': 'radial-gradient(#a8dfff,#8dd5ff,#3a9dfc)',
        'epic': 'radial-gradient(#ce81f7,#b958ed,#8819c2)',
        'legendary': 'radial-gradient(#fcdd6a, #ffdb58, #e09143)',
      },
      borderColor: {
        "dark_tab": "#111211",
        'red-700': "rgb(185 28 28)",
        'yellow-700': "rgb(251 191 36)",
        'rare': '#6ab6ff',
        'epic': '#c03fe2',
        'legendary': '#eeab42',
        'tutorial': "rgb(115, 128, 140)",
        'short': "rgb(69, 159, 246)",
        'standard': "rgb(139, 93, 246)",
        'extended': "rgb(246, 168, 35)",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
