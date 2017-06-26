import React from 'react'
import Feedback from '../Feedback'
import FeedbackForm from '../Feedback/FeedbackForm'

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{review.title}</strong>{' '}
                <br />

                {review.review}
              </p>
            </div>
          </div>
        </article>
      </div>

      <Feedback feedback={review.feedback} />

      <div className="box add-feedback">
        <FeedbackForm />
      </div>
    </div>
  )
}

export default ReviewItem
