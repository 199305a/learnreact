/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-16 14:05:20
 * @LastEditors: cui
 * @LastEditTime: 2021-04-16 14:07:17
 */

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: __dirname + '/public/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loader: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}