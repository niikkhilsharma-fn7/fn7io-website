/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        "sm-desktop": "1024px",
        desktop: "1440px",
        ultra: "1920px",
      },
      keyframes: {
        slideDownFromTop: {
          from: {
            transform: "translateX(-50%) translateY(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(-50%) translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-down": "slideDownFromTop 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
