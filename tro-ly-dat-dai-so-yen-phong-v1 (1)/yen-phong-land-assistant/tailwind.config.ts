import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        govgreen: '#0B7A4B',
        govblue: '#0F5FA8',
        ink: '#183143',
        mist: '#F4F8F7',
        softgold: '#FFF3C4',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(18, 58, 77, 0.10)'
      }
    },
  },
  plugins: [],
}
export default config
