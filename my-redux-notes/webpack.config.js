const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 注意版本号 webpack 4 以上版本请下载 @next 版本
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  module:{
    rules: [
      {
        test: /\.jsx?$/,// 匹配文件路径的正则表达式，通常我们都是匹配文件类型后缀
        exclude: /(node_modules|bower_components)/, // 过滤掉不需要处理的文件
        use: { loader: 'babel-loader' } // 指定使用的 loader
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({ // 使用插件抽离 css ，生成单独的 css 文件
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.html$/,
        use: [ 
          {
            loader: 'html-loader',
            options: { // 压缩 html
              minimize: true
            }
          }
        ]
      }
    ]  
  },

  // 提供静态服务
  devServer:{ 
    port: 9999,
  },
  plugins: [
    // 每次打包前清除 dist 下的文件
    new CleanWebpackPlugin('dist'),

    // 提取样式，生成单独文件
    new ExtractTextPlugin("styles.css"),
    
    // 生成新的 html 文件
    new HtmlWebpackPlugin({ 
      filename: 'index.html', // 如果文件名不是 index , 开发时要在 url 处添加文件名
      template: path.resolve(__dirname + '/src/index.html'), // 注意路径,
    }) 
  ]
}