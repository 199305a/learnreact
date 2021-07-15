/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-13 18:02:16
 * @LastEditors: cui
 * @LastEditTime: 2021-04-13 18:04:44
 */
const express = require('express');
const app = express();
const http = require('http');

const ReactDOMServer = require('react-dom/server')

const React = require('react')
const About = React.createFactory(require('./components/about.js'))


app.get('/about', (req, res, next) => {
  const aboutHTML = ReactDOMServer.renderToStaticMarkup(About())
  response.send(aboutHTML)
})
http.createServer(app).listen(3000)