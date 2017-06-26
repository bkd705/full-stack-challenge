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

  user() {
    return this.belongsTo('User', 'creator_id', 'id')
  }

  review() {
    return this.belongsTo('Review', 'review_id', 'id')
  }

  /**
   * Method to create feedback.
   * @param {object} data - Feedback to be created
   */
  static async create(data) {
    const feedback = new Feedback(data)
    return await feedback.save()
  }

  /**
   * Method for finding feedback using its unique id.
   * @param {string} id - id to use to find feedback.
   * @param {object} opts - options used in fetch
   */
  static async findById(id, opts) {
    return await Feedback.where('id', id).fetch(opts)
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
