const React = require('react')
const Email = (props) => {
  return (
    <div>
      <h1>Thanks for {props.name ? props.name : ''} for signing up</h1>
      <p>if you have any questions,please contact support </p>
    </div>
  )
}

module.exports = Email
