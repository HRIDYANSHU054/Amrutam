import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3A643B",
        main: "#031322",
        accent: "#446171",
        peach: "#FFF7E2",
        "accent-secondary": "#0A2737",
        // #3A643B
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        dinProBold: ["var(--font-dinPro-bold)", "sans-serif"],
        dinProMedium: ["var(--font-dinPro-medium)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
