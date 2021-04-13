/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-13 16:34:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-13 17:55:38
 */
const ReactDOMServer = require('react-dom/server')
const React = require('react')
const Email = React.createFactory(require('./email.js'))

const emailString = ReactDOMServer.renderToString(Email())
const emailStaticMarkup = ReactDOMServer.renderToStaticMarkup(Email())
console.log(emailStaticMarkup);
console.log(emailString);

const emailStringWithName = ReactDOMServer.renderToString(Email({ name: 'Johny Pineappleseed' }))

console.log(emailStringWithName);