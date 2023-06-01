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

import hexToRgba from './transformers/hextorgba.ts'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--color-primary)',
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
    'i-logos-vue',
    'i-logos-nuxt-icon',
    'i-logos-postcss',
    'i-logos-supabase-icon',
    'i-logos-firebase',
  ],
  shortcuts: {
    btn: 'transition duration-200 bg-black hover:(bg-black/80 -translate-y-0.5 shadow-lg) text-sm capitalize text-white font-bold py-3 px-8 rounded-full whitespace-nowrap',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: {
          name: 'Albert Sans',
          weights: [300, 400, 500, 600, 700],
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    hexToRgba(),
  ],
})
