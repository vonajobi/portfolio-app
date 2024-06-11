import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url("/assets/background.svg")',
      },
      boxShadow: {
        '3xl': '0 35px 100px -10px rgba(0, 0, 0, 0.4)',
        '2xl': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      },
      gridTemplateColumns: {
      }
    },
    
  },
  plugins: [
    require('tailwindcss'),
    require('@kamona/tailwindcss-perspective'),
  ],
}
export default config
