import Bookshelf from '../config/Bookshelf'
import bcrypt from 'bcrypt'

class User extends Bookshelf.Model {
  /**
   * get methods required for bookshelf
   */
  get tableName() {
    return 'user'
  }

  get hasTimestamps() {
    return true
  }

  get uuid() {
    return true
  }

  static get dependants() {
    return ['feedback', 'review']
  }

  feedback() {
    return this.hasMany('Feedback')
  }

  review() {
    return this.hasMany('Review')
  }

  /**
   * Method to create a user.
   * @param {object} user - Values needed to create a user.
   */
  static async create({ email, password, role = 'employee' }) {
    const user = new User({
      email,
      role,
      password: bcrypt.hashSync(password, 10)
    })

    return await user.save()
  }

  /**
   * Method for finding a user using their unique id
   * @param {string} id - id to use to find user.
   * @param {object} opts - options used in fetch
   */
  static async findById(id, opts) {
    return await User.where('id', id).fetch(opts)
  }

  /**
   * Method for finding a user using their email
   * @param {string} email - Email to use to find user.
   */
  static async findByEmail(email) {
    return await User.where('email', email).fetch()
  }

  /**
   * Method to update a user.
   * @param {object} user - User model to update
   * @param {object} changes - New changes to update user with
   */
  static async update(user, changes) {
    return await user.save(changes)
  }

  /**
   * Method to delete a user.
   * @param {object} user - User to delete
   */
  static async delete(user) {
    return await user.destroy()
  }
}

export default Bookshelf.model('User', User)
