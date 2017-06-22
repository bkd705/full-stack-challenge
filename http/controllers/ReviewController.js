import Review from '../models/Review'

export default class ReviewController {
  static async show(req, res) {
    const review = await Review.findById(req.params.id)
    if (!review) {
      res.status(404).json({ error: 'No review with that id found.' })
    }

    res.send({ review })
  }

  static async all(req, res) {
    const reviews = await Review.fetchAll()

    res.send({ reviews })
  }

  static async create(req, res) {
    const review = await Review.create(req.body)

    if (!review) {
      res.status(500).json({ error: 'Unkown error. Review not created.' })
    }

    res.send({ review })
  }

  static async update(req, res) {
    const review = Review.findById(req.params.id)
    if (!review) {
      res.status(404).json({ error: 'No review with that id found' })
    }

    const result = await Review.update(review, req.body)
    if (!result) {
      res.status(500).json({ error: 'Unkown error. Review not saved' })
    }

    res.send({ result })
  }

  static async destroy(req, res) {
    const review = await Review.findById(req.params.id)
    if (!review) {
      res.status(404).json({ error: 'No review with that id found' })
    }

    const isDeleted = await Review.delete(review)
    if (!isDelete) {
      res.status(500).json({ error: 'Unkown error. Review not deleted' })
    }

    res.send({ message: 'Review deleted' })
  }
}
