import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,astro}'],
  theme: {
    container: ({ theme }) => ({
      center: true,
      padding: theme('spacing.4'),
    }),
    extend: {
      fontFamily: {
        grandstander: ['Grandstander', 'sans-serif'],
      },
      backgroundImage: {
        texture: 'url("/images/texture.png")',
      },
    },
  },
  plugins: [],
} satisfies Config
