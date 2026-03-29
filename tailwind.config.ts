import { keyframes } from "leva/dist/declarations/src/styles";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
  },
  plugins: [
    require('tailwindcss'),
    require('@kamona/tailwindcss-perspective'),
  ],
  
}
}
// export default config
