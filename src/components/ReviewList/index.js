import React, { Component } from 'react'
import axios from 'axios'
import ReviewItem from './ReviewItem'
import './reviewlist.css'

class ReviewList extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews = async () => {
    const response = await axios.get('/reviews')

    this.setState({
      reviews: response.data.reviews
    })
  }

  render() {
    const { reviews } = this.state
    const reviewItems = reviews.map(item =>
      <ReviewItem review={item} key={item.id} />
    )

    return (
      <div className="container container--review">
        <div className="reviews">
          {reviewItems}
        </div>
      </div>
    )
  }
}

export default ReviewList
