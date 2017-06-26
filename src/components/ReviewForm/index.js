import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import decode from 'jwt-decode'
import axios from 'axios'
import InputField from '../Form/InputField'

class ReviewForm extends Component {
  state = {
    id: '',
    creator_id: null,
    title: '',
    review: '',
    action: 'new'
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      this.fetchReview(id)
    } else {
      const creator_id = decode(localStorage.getItem('paytm_user_token')).id

      this.setState({
        creator_id
      })
    }
  }

  fetchReview = async id => {
    const response = await axios.get(`/reviews/${id}`)
    if (response.status === 200) {
      this.setState({
        id: response.data.review.id,
        title: response.data.review.title,
        review: response.data.review.review,
        action: 'update'
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { action, title, review, creator_id } = this.state
    const reviewObj = {
      title,
      review
    }

    creator_id ? (reviewObj['creator_id'] = creator_id) : null

    if (action === 'new') {
      const response = await axios.post('/reviews', reviewObj)
      if (response.status === 200) {
        this.props.history.push('/')
      }
    } else {
      const response = await axios.patch(`/reviews/${this.state.id}`, reviewObj)
      if (response.status === 200) {
        this.props.history.push('/')
      }
    }
  }

  render() {
    const { action, title, review } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <InputField
          name="title"
          value={title}
          placeholder="Title..."
          onChange={this.onChange}
        />

        <div className="field">
          <p className="control">
            <textarea
              name="review"
              value={review}
              className="textarea"
              placeholder="Review..."
              onChange={this.onChange}
            />
          </p>
        </div>

        <p className="control">
          <button type="submit" className="button is-primary">
            {action === 'new' ? 'Add Review' : 'Update Review'}
          </button>
        </p>
      </form>
    )
  }
}

export default withRouter(ReviewForm)
