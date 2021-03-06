import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from '../config/config'
import User from '../models/User'

export default class UserController {
  static async show(req, res) {
    const userId = req.params.id

    const { attributes: { password, ...user } } = await User.findById(userId)
    if (!user) {
      res.status(404).json({ error: 'No user with that id found.' })
    }

    res.send({ user })
  }

  static async all(req, res) {
    const users = await User.fetchAll()

    res.send({ users })
  }

  static async create(req, res) {
    // Get password seperate from the rest of the user object so we don't have to exclude it later when outputting
    const { attributes: { password, ...user } } = await User.create(req.body)

    if (!user) {
      res.status(500).json({ error: 'Unable to save user. Unknown error.' })
    }

    const token = jwt.sign(user, config.jwtSecret, { expiresIn: '14 days' })
    res.send({ user, token })
  }

  static async update(req, res) {
    const userId = req.params.id

    const user = await User.findById(userId)
    if (!user) {
      res.status(404).json({ error: 'No user with that id found.' })
    }

    const result = await User.update(user, req.body)
    if (!result) {
      res.status(500).json({ error: 'Unable to update user. Unkown error.' })
    }

    const { password, ...output } = user
    res.send({ user })
  }

  static async destroy(req, res) {}

  static async validate(req, res) {
    const user = await User.findByEmail(req.body.email)
    if (!user) {
      res.status(404).json({ error: 'No user with that email found.' })
    }

    const { attributes: { password, ...account } } = user
    if (bcrypt.compareSync(req.body.password, password)) {
      const token = jwt.sign(account, config.jwtSecret, {
        expiresIn: '14 days'
      })
      res.send({ user, token })
    } else {
      res.status(401).json({ error: 'Incorrect password' })
    }
  }
}
