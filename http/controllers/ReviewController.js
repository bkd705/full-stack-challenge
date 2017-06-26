import Review from '../models/Review'
import User from '../models/User'

export default class ReviewController {
  static async show(req, res) {
    const review = await Review.findById(req.params.id, {
      withRelated: ['feedback', 'creator', 'reviewee']
    })
    if (!review) {
      res.status(404).json({ error: 'No review with that id found.' })
    }

    res.send({ review })
  }

  static async all(req, res) {
    const reviews = await Review.fetchAll({
      withRelated: ['feedback', 'creator', 'reviewee']
    })

    const serialized = reviews.serialize()

    for (let i = 0; i < serialized.length; i++) {
      for (let c = 0; c < serialized[i].feedback.length; c++) {
        const user = await User.findById(serialized[i].feedback[c].creator_id)
        serialized[i].feedback[c]['creator'] = user.attributes
        delete serialized[i].feedback[c]['creator_id']
      }
    }

    res.send({ reviews: serialized })
  }

  static async create(req, res) {
    const review = await Review.create(req.body)

    if (!review) {
      res.status(500).json({ error: 'Unkown error. Review not created.' })
    }

    res.send({ review })
  }

  static async update(req, res) {
    const review = await Review.findById(req.params.id)
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
