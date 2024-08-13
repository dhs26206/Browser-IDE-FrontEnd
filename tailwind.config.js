/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'spin-slowest': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-thumb': {
          '::-webkit-scrollbar': {
            width: '12px',
          },
          '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '6px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      });
    }
  ],
}



