import express from 'express'
import ReviewController from '../controllers/ReviewController'

const app = express()

app.get('/', ReviewController.all)
app.post('/', ReviewController.create)
app.get('/:id', ReviewController.show)
app.put('/:id', ReviewController.update)
app.patch('/:id', ReviewController.update)

export default app
