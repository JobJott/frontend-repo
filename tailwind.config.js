/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        duotone: `0px 0px 0px 1px hsl(var(--background)), 0px 0px 0px 2px hsl(var(--jobjott-700)), 0px 0px 0px 4px hsl(var(--teal-700) / 0.25)`,
      },
    },
  },
  plugins: [],
};
