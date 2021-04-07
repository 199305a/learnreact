const React = require('react')

const { Link } = require('react-router')

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Node.University</h1>
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav">
            <li
              className={this.context.router.isActive('/about') ? 'active' : ''}
            >
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li
              className={this.context.router.isActive('/posts') ? 'active' : ''}
            >
              <Link to="/posts" activeClassName="active">
                Blog
              </Link>
            </li>
            <li
              className={this.context.router.isActive('/about') ? 'active' : ''}
            >
              <Link to="/contact" activeClassName="active">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" activeClassName="active">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

Content.contextType = {
  router: React.PropTypes.object.isRequired,
}

module.exports = Content
