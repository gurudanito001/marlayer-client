import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        "primary": "#003c3c",
        "primary-2": "#45b39d",
        "secondary": "#9a3d1b",
        "secondary-2": "#2B586B59",
        "accent": "#5090cd",
        "accent2": "#d3e2f9",
        "neutral": "#EBEBEB",
        "neutral2": "#D9D9D9",
        "base": "rgba(55, 92, 113, 0.15)",
        "overlay": "rgba(0, 0, 0, 0.4)",
        "section-blue": "#C6D9F1",
        "section-red": "#800020",
        "form-input-bg": "#FFFBFB",
        "btn-blue": "#1877F2",
        "gray-black": "rgba(0, 0, 0, .8)"
      },
      fontSize: {
        "10px": "10px"
      },
      fontWeight: {
        "550": "550"
      },
      width:{
        "300": "300px",
        "336": "336px"
      },
      height: {
        "420": "420px"
      },
      maxHeight: {
        "550": "550px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "850": "850px"
      },
      maxWidth: {
        "550": "550px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "1000": "1000px"
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "corporate",],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
