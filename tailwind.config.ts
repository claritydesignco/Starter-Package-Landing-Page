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
        cream: '#faf9f6',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        accent: ['Roboto Serif', 'serif'],
        body: ['Manrope', 'sans-serif'],
        button: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'heading-desktop': '2.1em',
        'heading-mobile': '25px',
        'accent-desktop': '1.9em',
        'accent-mobile': '25px',
        'body-desktop': '1.2em',
        'body-mobile': '18px',
        'button': '1.1em',
      },
      letterSpacing: {
        'body': '0.03em',
        'button': '0.03em',
      },
      lineHeight: {
        'body': '1.6',
      },
    },
  },
  plugins: [],
};
export default config;
