require('../css/main.css')
const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const History = require('history')
let { Router, Route, Link } = ReactRouter
let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false,
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/about" component={About}></Route>
      <Route path="/posts" component={Posts} posts={posts}></Route>
      <Route path="/posts/:id" component={Post} posts={posts}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Route>
    <Route path="/login" component={Login}></Route>
  </Router>
)
