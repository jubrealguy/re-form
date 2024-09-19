module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your folder structure
  theme: {
    extend: {
      colors: {
        'custom-gray': '#232323',
        'custom-blue': '#324162',
        'custom-blue-light': '#697694',
        'custom-link-background': '#0AB1A9',
        'custom-link-text': '#E1FFFE',
        'color-white': '#FFFFFF',
      },
      boxShadow: {
        'custom-shadow': '1px 5px 4.8px 1px rgba(0, 0, 0, 0.11)', // Adjusted to fit rgba(0, 0, 0, 0.11) for 1C opacity
      },
    },
  },
  plugins: [],
}