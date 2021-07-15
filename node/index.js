/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-13 16:34:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-14 10:30:06
 */
require('babel-register')({
  presets: ['react']
})


const errorHandler = require('errorhandler')
const express = require('express')

mongodb = require('mongodb')
app = express(),
  bodyParser = require('body-parser')
validator = require('express-validator')
logger = require('morgan')


errorHandler = require('errorhandler')
url = 'mongodb://localhost:27017/board',

  ReactDOMServer = require('react-dom/server')
React = require('react');
const Header = React.createFactory(require("./components/header.jsx"))
Footer = React.createFactory(require("./components/footer.jsx"))
MessageBoard = React.createFactory(require("./components/board.jsx"))

mongodb.MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err);
    process.exit(1)

  }
  // 应用Handlebars模板引擎
  app.set('view engine', 'hbs')
  app.use(compression())
  app.use(logger('div'))
  app.use(errorHandler())
  app.use(bodyParser.urlencode({ extended: true }))
  app.use(bodyParser.json());
  app.use(validator());
  app.use(express.static('public'))
  app.set('view engine', 'hbs')
  // 浏览器端ajax请求
  app.get('/messages', (req, res, next) => {
    req.messages.find({}, { sort: { _id: -1 } }).toArray((err, docs) => {
      if (err) return next(err)
      return res.json(docs)
    })
  })
  // 使用中间件express-validator确保传入数据非空
  app.post('/messages', (req, res, next) => {
    req.checkBody('message', 'Invalid message in body').notEmpty()
    req.checkBody('name', 'Invalid name in body').notEmpty()
    var errors = req.validationErrors()
    if (errors) {
      return next(errors)
    }
    req.messages.insert(req.body, (err, result) => {
      if (err) {
        return next(err)
      }
      //  输出由数据库自动生成的新文档ID
      return res.json(result.ops[0])
    })
  })
  // 服务端渲染数据
  app.get('/', (req, res, next) => {
    // 从MongoDB请求一组根据ObjectID逆向排序的消息
    req.messages.find({}, { sort: { _id: -1 } }).toArray((err, docs) => {
      if (err) return next(err)
      res.render('index', {
        // 发送从footer header生成的HTML字符串
        headers: ReactDOMServer.renderToString(Header()),
        footer: ReactDOMServer.renderToString(Footer()),
        // 消息列表docs的属性组成的HTML字符串MessageBoard
        messageBoard: ReactDOMServer.renderToString(MessageBoard({
          messages: docs
        })),
        // 向浏览器端React发送消息列表
        props: '<script type="text/javascript">var messages = '
          + JSON.stringify(docs) + '</script>'
      })
    })
  })
  app.listen(3000)
})