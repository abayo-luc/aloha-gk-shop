export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [
    'ant-design-vue/dist/antd.less',
    '@/assets/styles/theme.scss',
    '@/assets/styles/custom.css'
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/bootstrap',
    '@/plugins/vuex-persist',
    '@/plugins/axios',
    '@/plugins/vue-notification'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://aloha-gk-dev.herokuapp.com/api/v1'
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.VUE_APP_API_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.VUE_APP_API_BASE_URL
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#c82f63',
            'link-color': '#c82f63',
            'error-color': '#e43f5a'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  /**
   *
   * showing progressive loading
   */
  loading: {
    color: '#c82f63',
    height: '5px'
  },
  generate: {
    fallback: true
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'notfound',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
