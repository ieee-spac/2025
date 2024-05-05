import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00A3E0",
          "primary-content": "#000a12",
          secondary: "#00629b",
          "secondary-content": "#d0dfec",
          accent: "#FFD100",
          "accent-content": "#161000",
          neutral: "#00843d",
          "neutral-content": "#d3e6d7",
          // "base-100": "#002855",
          "base-100": "#000000",
          "base-200": "#002149",
          "base-300": "#001b3d",
          "base-content": "#c8d1dc",
          info: "#009CA6",
          "info-content": "#00090a",
          success: "#78be21",
          "success-content": "#050d00",
          warning: "#ffa400",
          "warning-content": "#160a00",
          error: "#BA0C2F",
          "error-content": "#f8d4d3",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
