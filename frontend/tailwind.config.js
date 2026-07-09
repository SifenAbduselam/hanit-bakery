/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          dark: '#7A5636',    // Dark Brown (Text, Buttons, Dark Sections)
          caramel: '#C49A6C', // Medium Brown (Accents, Hover states)
          cream: '#F1E5D0',   // Light Cream (Main Background)
          pale: '#E1D1BA',    // Pale Cream (Alt Background)
          sage: '#D3CDB1',    // Sage/Taupe (Subtle accents)
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Make sure you have a nice serif font!
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}