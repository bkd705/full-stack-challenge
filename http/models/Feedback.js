import Bookshelf from '../config/Bookshelf'

class Feedback extends Bookshelf.Model {
  /**
   * get methods required for bookshelf
   */
  get tableName() {
    return 'feedback'
  }

  get hasTimestamps() {
    return true
  }

  get uuid() {
    return true
  }

  static get dependants() {
    return ['user', 'review']
  }

  users() {
    return this.hasMany('User')
  }

  review() {
    return this.belongsTo('Review')
  }

  /**
   * Method to create feedback.
   * @param {object} feedback - Feedback to be created
   */
  static async create(feedback) {
    const feedback = new Feedback(feedback)
    return await feedback.save()
  }

  /**
   * Method for finding feedback using its unique id.
   * @param {string} id - id to use to find feedback.
   */
  static async findById(id) {
    return await Feedback.where('id', id)
  }

  /**
   * Method to update feedback.
   * @param {object} feedback - Feedback model to update
   * @param {object} changes - New changes to update feedback with
   */
  static async update(feedback, changes) {
    return await feedback.save(changes)
  }

  /**
   * Method to delete feedback.
   * @param {object} feedback - Feedback to delete
   */
  static async destroy(feedback) {
    return await feedback.destroy()
  }
}

export default Bookshelf.model('Feedback', Feedback)