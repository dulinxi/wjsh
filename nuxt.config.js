
module.exports = {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: 'localhost', // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '万家生活',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '万家,生活网,美好生活,生活小工具,妙招,学习网,自学,文化旅游,绿水青山,小帮手' },
      { hid: 'description', name: 'description', content: '万家生活网,致力于成为您生活的助手,提供生活中各种妙招,学习助手,或者带您领略大好河山,绿水青山的美景.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * 定义公共的配置
   */
  globalName: 'app',
  globals: {
    id: globalName => `${globalName}`,
    nuxt: globalName => `$${globalName}`,
    context: globalName => `__${globalName.toUpperCase()}__`,
    pluginPrefix: globalName => globalName,
    // readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
    // loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`
  },
  /*
  ** 自定义顶部加载的颜色
  */
  loading: false,
  /*
  ** 公共css
  */
  css: [
    '~/assets/scss/global.scss'
  ],
  /*
  ** 路由激活的样式
  */
  router: {
    linkActiveClass: 'preactive',
    linkExactActiveClass: 'active',
    // middleware: 'header'
  },
  /*
  **  挂载到APP之前引用的插件, 在此注册了公共的组件、指令、过滤器
  */
  plugins: [
    '~/plugins/global-components.js',
    '~/plugins/directives.js',
    '~/plugins/filters.js',
    '~/plugins/mixins.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build 配置
  */
  buildDir: 'web',
  build: {
    /*
    ** You can extend webpack config here
    */

    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    },
    publicPath: '/static/',
    loaders: {
      scss: {
        loader: [
          'vue-style-loader',
          'sass-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    },
    extend(config, ctx) {
    }
  }
}
