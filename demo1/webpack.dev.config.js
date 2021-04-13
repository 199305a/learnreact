/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-06 15:22:55
 * @LastEditors: cui
 * @LastEditTime: 2021-04-06 17:48:29
 */

const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client/?http://localhost:8080',
    './jsx/app.jsx'],
  output: {
    publicPath: 'js/',
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,  //对这个不做处理
        use: {
          loader: ['react-hot-loader', 'babel-loader']
        }
      }
    ]
  },
  devServer: {
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}