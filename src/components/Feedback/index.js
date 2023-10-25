import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  onClickFeedback = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources

    return (
      <dib className="feedback-app">
        <div className="feedback-container">
          <h1>How satisfied are you with our customer support performance</h1>
          <ul>
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  onClick={this.onClickFeedback}
                />
                <p>{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
        {isTrue ? (
          <div className="feed-container">
            <img src={loveEmojiUrl} alt="love emoji" className="heart-img" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : null}
      </dib>
    )
  }
}

export default Feedback
