import colors from 'vuetify/es5/util/colors'

export default {
  // LocalStorageを正常動作させるため、SPAモードで運用
  mode: 'spa',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    title: 'Steam Watcher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: 'plugins/vuetify', ssr: false },
    { src: 'plugins/vue-clipboard2', ssr: false },
    { src: 'plugins/vee-validate', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#3261AB',
          accent: colors.grey.darken3,
          secondary: '#3D93B6',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#e84a5f',
          success: '#16a596',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vuetify'],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    // analyze: true,
  },
  // vuex-module-decorators setting
  transpileDependencies: ['vuex-module-decorators', 'vee-validate/dist/rules'],

  // serverMiddleware設定
  // serverMiddleware: [{ path: '/api', handler: '~/serverMiddleware/api.js' }],
  serverMiddleware: ['~/api'],
}
