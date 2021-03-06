require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'arentex-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slider-component/dist-css/vue-slider-component.css',
    'vue-slider-component/theme/default.css',
    '~/assets/styles/variables.scss',
    '~/assets/styles/main.scss',
  ],
  styleResources: {
    scss: ['~/assets/styles/mixins.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/click-outside.directive.js',
    '~/plugins/collapse.directive.js',
    '~/plugins/overflow.directive.js',
    './plugins/vue-agile.js',
    { src: '~/plugins/vue-calendar.js', ssr: false },
    { src: '~/plugins/nuxt-client-init.plugin.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    MEDIA_URL: process.env.MEDIA_URL,
  },
}
