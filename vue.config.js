module.exports = {
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.eqjncvb.com/v2.0/', // 后端地址
        // target: 'http://192.168.1.16:8121/',
        secure: false, // 如果是https接口，需要配置这个参数
        ws: true, // 是否代理websockets
        changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': ''
        }
      }
    }


  },
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  // publicPath: process.env.NODE_ENV == 'development' ? './' : '/promotion/',
  // publicPath: process.env.NODE_ENV == 'production' ? './' : './',
//  dev:{
//   assetsSubDirectory:'static',
//   assetsPublicPath:'/',

//  },
//  build:{
//   index:path.resolve(__dirname, '../dist/index.html'),
//   assetsRoot:path.resolve(__dirname, '../dist'),
//   assetsPublicPath:'./',
//  }

}