// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fatih',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  routeRules: {
    '/[username]': {
      cache: {
        maxAge: 60 * 60 * 24 * 365 // 1 year
      }
    }
  },
  css: ['~/assets/main.postcss'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': true,
      'cssnano': true,
    },
  },
  modules: [
    '@unocss/nuxt',
    '@productdevbook/motion/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vue-macros/nuxt',
    '@vee-validate/nuxt'
  ],
  macros: {
    exportExpose: true,
  },
})