const React = require('react')
module.exports = function Contact(props) {
  // props.router
  setTimeout(() => {
    props.router.push('about')
  }, 1000)
  return (
    <div>
      <h3>Contact</h3>
      <input type="text" placeholder="your email" clssName="form-control" />
      <textarea
        type="text"
        placeholder="your message"
        clssName="form-control"
        cols="30"
        rows="10"
      ></textarea>
      <button className="btn btn-primary">send</button>
    </div>
  )
}
