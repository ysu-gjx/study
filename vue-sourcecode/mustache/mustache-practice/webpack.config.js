const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, 'www'),
    // 不压缩
    compress: false,
    port: 8080,
    // 虚拟打包路径，bundle.js 文件没有真正生成
    publicPath: '/xuni/'
  }
}