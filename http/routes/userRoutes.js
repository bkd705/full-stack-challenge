import express from 'express'
import UserController from '../controllers/UserController'

const app = express()

app.post('/validate', UserController.validate)
app.get('/', UserController.all)
app.post('/', UserController.create)
app.get('/:id', UserController.show)
app.put('/:id', UserController.update)
app.patch('/:id', UserController.update)

export default app
