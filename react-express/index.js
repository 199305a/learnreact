/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-13 18:31:30
 * @LastEditors: cui
 * @LastEditTime: 2021-04-13 18:48:23
 */
const express = require('express');
const app = express();
const errorHandler = require('errorHandler');
const http = require('http');
const https = require('https');
const React = require('react');
const fs = require('fs');
require('babel-register')({
  presets: ['react']
})

const About = React.createFactory(require('./components/about.jsx'))

// 配置
app.set('view engine', 'hbs')
// 中间件 代理文件夹public
app.use(express.static(path.join(__dirname, 'public')))
// 路由
app.get('/', (req, res, next) => {
  res.send('Hello!')
})


app.get('/about', (req, res, next) => {
  const aboutHTML = ReactDOMServer.renderToString(About())
  res.render('about', { about: aboutHTML })

})

app.all('*', (req, res, next) => {
  res.status(404).send('Not Found ... did you mean to go to /about instead?')
})

app.use((err, req, res, next) => {
  console.error(req.url, err);
  res.send('Wonderful, something went wrong...')
})

app.use(errorHandler)

http.createServer(app).listen(3000)

try {
  const options = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
  }
} catch (e) {
  warn('Create server.key and server.crt for HTTPS')
}
if (typeof options !== 'undefined') {
  https.createServer(app, options).listen(433)
}