import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import decode from 'jwt-decode'
import axios from 'axios'
import InputField from '../Form/InputField'

// @TODO - Make this dynamic to both updating and creating

class ReviewForm extends Component {
  state = {
    creator_id: '',
    title: '',
    review: ''
  }

  componentDidMount() {
    const creator_id = decode(localStorage.getItem('paytm_user_token')).id

    this.setState({
      creator_id
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const response = await axios.post('/reviews', this.state)
    if (response.status === 200) {
      this.props.history.push('/')
    }
  }

  render() {
    const { title, review } = this.state
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
            Add Review
          </button>
        </p>
      </form>
    )
  }
}

export default withRouter(ReviewForm)
