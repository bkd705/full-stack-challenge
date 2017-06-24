import React from 'react'

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <p>{review.title}</p>
    </div>
  )
}

export default ReviewItem
