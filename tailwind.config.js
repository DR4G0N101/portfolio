/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // allow manual theme switching via <html class="theme">
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base themes
        light: {
          bg: "#ffffff",     // clean white
          text: "#0f1115",   // deep gray for readability
          accent: "#2563eb", // vivid blue
        },
        dark: {
          bg: "#0f1115",     // matte near-black
          text: "#e6e8ef",   // soft white-gray
          accent: "#6366f1", // indigo tone
        },
        sakura: {
          bg: "#fff1f2",     // petal pink
          text: "#4a044e",   // plum purple
          accent: "#fb7185", // blossom pink
        },

        // Seasonal / Holiday themes
        valentine: {
          bg: "#ffe4e6",     // pale rose
          text: "#831843",   // cherry red
          accent: "#be185d", // raspberry
        },
        halloween: {
          bg: "#1c1917",     // dark brown-black
          text: "#f97316",   // pumpkin orange
          accent: "#7e22ce", // purple highlight
        },
        christmas: {
          bg: "#064e3b",     // evergreen
          text: "#fef3c7",   // golden cream
          accent: "#b91c1c", // santa red
        },
        ramadan: {
          bg: "#0f172a",     // midnight blue
          text: "#facc15",   // warm gold
          accent: "#38bdf8", // sky blue
        },
        newyear: {
          bg: "#111827",     // charcoal gray
          text: "#fef9c3",   // champagne cream
          accent: "#facc15", // bright gold
        },
      },
    },
  },
  plugins: [],
};
