import React from 'react'
import './review.css'
import ReviewForm from '../../components/ReviewForm'

const Review = () => {
  return (
    <div className="create-review-page">
      <h2 className="subtitle">Create Review</h2>
      <ReviewForm />
    </div>
  )
}

export default Review
