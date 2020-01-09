
export default {
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/axios',
    {src: '~plugins/iview', ssr: true}
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
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api', 
      { 
        // target: 'http://172.17.131.56:8360', // api主机
        target: 'http://59.110.236.40:8360',
        pathRewrite: { '^/api' : '/' }
      }
  ]
  ],
  router:{
    base:"/" //此为根目录，如果有具体目录需求按实际情况写
  },
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    cache: true,
    parallel: true
  }
}
