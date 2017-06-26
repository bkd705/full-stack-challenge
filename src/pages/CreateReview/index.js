import React from 'react'
import './createreview.css'
import ReviewForm from '../../components/ReviewForm'

const CreateReview = () => {
  return (
    <div className="create-review-page">
      <h2 className="subtitle">Create Review</h2>
      <ReviewForm />
    </div>
  )
}

export default CreateReview
