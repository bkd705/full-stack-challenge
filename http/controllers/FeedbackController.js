import Feedback from '../models/Feedback'

export default class FeedbackController {
  static async show(req, res) {
    const feedback = await Feedback.findById(req.params.id)
    if (!feedback) {
      res.status(404).json({ error: 'No feedback with that id found.' })
    }

    res.send({ feedback })
  }

  static async all(req, res) {
    const feedback = await Feedback.fetchAll()

    res.send({ feedback })
  }

  static async create(req, res) {
    const feedback = await Feedback.create(req.body)

    if (!feedback) {
      res.status(500).json({ error: 'Unkown error. Feedback not created.' })
    }

    res.send({ feedback })
  }

  static async update(req, res) {
    const feedback = Feedback.findById(req.params.id)
    if (!feedback) {
      res.status(404).json({ error: 'No feedback with that id found' })
    }

    const result = await Feedback.update(feedback, req.body)
    if (!result) {
      res.status(500).json({ error: 'Unkown error. Feedback not saved' })
    }

    res.send({ result })
  }

  static async destroy(req, res) {
    const feedback = await Feedback.findById(req.params.id)
    if (!feedback) {
      res.status(404).json({ error: 'No feedback with that id found' })
    }

    const isDeleted = await Feedback.delete(feedback)
    if (!isDelete) {
      res.status(500).json({ error: 'Unkown error. Feedback not deleted' })
    }

    res.send({ message: 'Feedback deleted' })
  }
}
