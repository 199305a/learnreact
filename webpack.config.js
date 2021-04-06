/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-06 15:22:55
 * @LastEditors: cui
 * @LastEditTime: 2021-04-06 18:50:56
 */

module.exports = {
  entry: './jsx/app.jsx',
  output: {
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,  //对这个不做处理
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React,webpack5 and Babel7',
      template: 'index.html',
      filename: 'index.html'
    })
  ]
}