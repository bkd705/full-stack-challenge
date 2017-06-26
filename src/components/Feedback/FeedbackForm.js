import React, { Component } from 'react'
import InputField from '../Form/InputField'

class FeedbackForm extends Component {
  state = {
    creator: '',
    title: '',
    feedback: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {}

  render() {
    const { title, feedback } = this.state
    return (
      <article className="media">
        <div className="media-content">
          <form onSubmit={this.onSubmit} className="feedback-form">
            <label className="label">Your comment</label>
            <div className="field">
              <InputField
                name="title"
                value={title}
                placeholder="Title..."
                onChange={this.onChange}
              />
            </div>
            <div className="field is-grouped">
              <p className="control">
                <textarea
                  name="feedback"
                  value={feedback}
                  className="textarea"
                  placeholder="Comment..."
                  onChange={this.onChange}
                />
              </p>

              <p className="control">
                <button className="button is-info">
                  Add
                </button>
              </p>
            </div>
          </form>
        </div>
      </article>
    )
  }
}

export default FeedbackForm
