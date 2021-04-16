const request = require('axios')
const url = 'http://localhost:3000/messages'

const fD = ReactDOM.findDOMNode
class MessageBoard extends React.Component {
  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    if (this.props.messages) {
      this.state = { messages: this.props.messages }
    }
  }
  componentDidMount() {
    request.get(url, (result) => {
      if (!result || !result.length) {
        return
      }
      this.setState({ messages: result })
    })
  }
  addMessage(message) {
    let messages = this.state.messages
    request
      .post(url, message)
      .then((response) => response.data)
      .then((data) => {
        if (!data) {
          return console.error('Failed to save')
        }
        console.log('Saved!')
        messages.unshift(data)
        this.setState({ messages: messages })
      })
  }
  render() {
    return (
      <div>
        <NewMessage
          message={this.state.messages}
          addMessageCb={this.addMessage}
        ></NewMessage>
        <MessageList messages={this.state.message}></MessageList>
      </div>
    )
  }
}
