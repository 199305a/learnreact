const { Link } = require('react-router')
const React = require('react')

module.exports = function Posts(props) {
  return (
    <div>
      Posts
      <ol>
        {props.route.posts.map((post, index) => (
          <li key={post.slug}>
            <Link></Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
