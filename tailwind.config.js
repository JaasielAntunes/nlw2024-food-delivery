/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Poppins_600SemiBold",
        body: "Poppins_400Regular",
        subtitle: "Poppins_500Medium",
        bold: "Poppins_700Bold",
      },
    },
  },
  plugins: [],
}

