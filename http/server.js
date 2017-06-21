import express from 'express'
import bodyParser from 'body-parser'

import feedbackRoutes from './routes/feedbackRoutes'
import reviewRoutes from './routes/reviewRoutes'
import userRoutes from './routes/userRoutes'

const app = express()

// Setup middleware needed for application
app.use(bodyParser.json())

// Setup routes for application
app.use('/users', userRoutes)
app.use('/reviews', reviewRoutes)
app.use('/feedback', feedbackRoutes)

// Setup server
app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
