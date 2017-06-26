import React, { Component } from 'react'
import decode from 'jwt-decode'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class FeedbackForm extends Component {
  state = {
    creator_id: '',
    review_id: '',
    feedback: ''
  }

  componentDidMount() {
    const creator_id = decode(localStorage.getItem('paytm_user_token')).id

    this.setState({
      creator_id,
      review_id: this.props.reviewId
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.submitReview()
  }

  submitReview = async () => {
    const response = await axios.post('/feedback', this.state)
    if (response.status === 200) {
      // no access to parent state and ran out of time to rework component structure
      // so forceful page reload is used to get comment to show up
      // defeats purpose of the whole "client-side spa" jazz kind of
      window.location = '/'
    }
  }

  render() {
    const { feedback } = this.state
    return (
      <article className="media">
        <div className="media-content">
          <form onSubmit={this.onSubmit} className="feedback-form">
            <label className="label">Your comment</label>
            <div className="field is-grouped">
              <p className="control">
                <textarea
                  name="feedback"
                  value={feedback}
                  className="textarea"
                  placeholder="Feedback..."
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

export default withRouter(FeedbackForm)
