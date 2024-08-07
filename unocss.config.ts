import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// import hexToRgba from './transformers/hextorgba.ts'

export default defineConfig({
  theme: {
    colors: {
      primary: 'rgb(var(--primary))',
    },
  },
  safelist: [
    // sosical
    'i-simple-icons-twitter',
    'i-simple-icons-discord',
    'i-simple-icons-github',
    'i-simple-icons-behance',
    'i-simple-icons-dribbble',
    'i-simple-icons-apple',
    'i-simple-icons-instagram',
    'i-simple-icons-linkedin',
    // stack
    'i-logos-typescript-icon',
    'i-logos-react',
    'i-logos-nextjs-icon',
    'i-logos-vue',
    'i-logos-nuxt-icon',
    'i-logos-postcss',
    'i-logos-supabase-icon',
    'i-logos-firebase',
    'i-logos-tailwindcss-icon',
  ],
  shortcuts: {
    btn: 'transition duration-200 bg-black hover:(bg-[rgba(var(--primary),1)] -translate-y-0.5 shadow-lg) text-sm capitalize text-white font-bold py-3 px-8 rounded-full whitespace-nowrap',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: {
          name: 'Author',
          weights: [300, 400, 500, 600, 700],
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // hexToRgba(),
  ],
})
