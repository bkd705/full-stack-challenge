import express from 'express'
import UserController from '../controllers/UserController'

const app = express()

app.get('/', UserController.all)
app.post('/', UserController.create)
app.get('/:id', UserController.show)
app.post('/:id', UserController.update)
app.patch('/:id', UserController.update)

export default app
