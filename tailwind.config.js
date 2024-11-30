// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to your JSX/JS/TSX/TS files
  ],
  theme: {
    extend: {
      colors: {
        default: {
          light: '#f16542',
          base: '#e64622', // Base color
          dark: '#c1351b',
        },
      },      
    },
  },
  plugins: [],
}
