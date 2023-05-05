// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    watcher: 'parcel',
  },
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
  css: ['~/assets/main.postcss'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': true,
    },
  },
  modules: [
    '@unocss/nuxt',
    '@productdevbook/motion/nuxt',
  ],
})
