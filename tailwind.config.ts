import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f2937",

          secondary: "#fde047",

          accent: "#fff",

          neutral: "#1f2937",

          "base-100": "#111827",

          info: "#00bcf7",

          success: "#00d295",

          warning: "#f59e0b",

          error: "#ff6a82",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
