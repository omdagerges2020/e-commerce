/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      // backgroundImage: {
      //   'hero-pattern': "url(/assets/images/img-1.png)",
      // }
    },
  },
  plugins: [
    // require('daisyui'),
  ],
});


