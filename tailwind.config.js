/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
      backgroundColor: (theme) => ({
				...theme("colors"),
				body: "#041343"
			}),
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

