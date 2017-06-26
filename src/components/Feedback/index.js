import React from 'react'
import FeedbackItem from './FeedbackItem'
import './feedback.css'

const Feedback = ({ feedback }) => {
  const feedbackItems = feedback.map(f =>
    <FeedbackItem feedback={f} key={f.id} />
  )
  return (
    <div className="box feedback">
      {feedbackItems}
    </div>
  )
}

export default Feedback
