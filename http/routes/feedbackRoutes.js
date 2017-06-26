import express from 'express'
import FeedbackController from '../controllers/FeedbackController'

const app = express()

app.post('/', FeedbackController.create)
app.get('/:id', FeedbackController.show)
app.put('/:id', FeedbackController.update)
app.patch('/:id', FeedbackController.update)

export default app
