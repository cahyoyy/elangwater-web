/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./*.html",
    "./js/**/*.js",
    ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563EB',
        'secondary-blue': '#1E40AF',
        'light-blue': '#EFF6FF',
        'text-dark': '#1F2937',
        'text-gray': '#6B7280',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.875rem',
      },
    },
  },
  plugins: [],
}
