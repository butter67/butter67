import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - merinda-project',
    title: 'merinda-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/css/color-default.css',
    '~/assets/css/block-editor.css',
    // '~/assets/css/fontello.css',
    '~/assets/css/responsive.css',
    '~/assets/css/widgets.css',
    '~/assets/css/reset.css',
    'highlight.js/styles/github.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: ['Lato:400,500,700', 'Noto+Sans+JP:400,700'],
    },
  },

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    // 3.) use syntax highlighting:
    // highlight: function (str, lang) {
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return (
    //         '<pre class="hljs"><code>' +
    //         hljs.highlight(lang, str, true).value +
    //         '</code></pre>'
    //       )
    //     } catch (__) {}
    //   }

    //   return (
    //     '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    //   )
    // },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

//追記
require('dotenv').config()
const { API_KEY } = process.env
const axios = require('axios')

//追記
env: {
  API_KEY
}
