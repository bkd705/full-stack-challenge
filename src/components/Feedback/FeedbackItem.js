import React from 'react'
import { Link } from 'react-router-dom'

const FeedbackItem = ({ feedback }) => {
  return (
    <div className="comment">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <Link to={`/profile/${feedback.creator.id}`}>
                {feedback.creator.email}
              </Link>
              <br />

              {feedback.feedback}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default FeedbackItem
