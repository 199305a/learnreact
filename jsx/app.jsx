require('../css/main.css')
const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const History = require('history')
const Content = require('./content.jsx')
const About = require('./about.jsx')
const Posts = require('./posts.jsx')
const Post = require('./post.jsx')
const Login = require('./login.jsx')
let { Router, Route, Link, withRouter } = ReactRouter
let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false,
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/about" component={About}></Route>
      <Route path="/posts" component={Posts} posts={posts}></Route>
      <Route path="/posts/:id" component={Post} posts={posts}></Route>
      <Route path="/contact" component={withRouter(Contact)}></Route>
    </Route>
    <Route path="/login" component={Login}></Route>
  </Router>
)
