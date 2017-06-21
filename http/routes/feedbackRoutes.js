import express from 'express'
import FeedbackController from '../controllers/FeedbackController'

const app = express()

app.get('/', FeedbackController.all)
app.post('/', FeedbackController.create)
app.get('/:id', FeedbackController.show)
app.post('/:id', FeedbackController.update)
app.patch('/:id', FeedbackController.update)

export default app