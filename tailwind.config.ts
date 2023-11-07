import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-0.05em',
      tighter: '-0.04em',
      tight: '-0.03em',
      normal: '0',
      wide: '0.06em',
      wider: '0.08em',
      widest: '0.20em',
    },
    fontFamily: {
      nunito: 'Nunito, sans-serif',
      poppins: 'Poppins, sans-serif',
      raleway: 'Raleway, sans-serif',
      bebas: 'Bebas Neue, sans-serif'
    },
    fontSize: {
      xs: '0.8rem',
      sm: '0.85rem',
      base: '0.8rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },

      colors: {
        'primaryv': '#9F00FB',
        'primaryp': '#FC0F5F',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff8c00',
        'green': '#13ce66',
        'red': '#ff4949',
        'yellow': '#ffc82c',
        'white': '#ffffff',
        'black': '#000000',
        'violet': '#260E39',
        'darker-purple': '#3902BA',
      },
      
      width:
      {
        '128': '32rem',
        '208': '52rem',
        '217':'91.3125rem',
      }
    },
  },
  
  plugins: [],
}
export default config
