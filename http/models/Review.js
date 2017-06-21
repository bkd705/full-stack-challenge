import Bookshelf from '../config/Bookshelf'

class Review extends Bookshelf.Model {
  /**
   * get methods required for bookshelf
   */
  get tableName() {
    return 'review'
  }

  get hasTimestamps() {
    return true
  }

  get uuid() {
    return true
  }

  static get dependants() {
    return ['user', 'feedback']
  }

  user() {
    this.belongsTo('User')
  }

  feedback() {
    this.hasMany('Feedback')
  }

  /**
   * Method to create a review.
   * @param {object} review - Review to be created
   */
  static async create(review) {
    const review = new Review(review)
    return await review.save()
  }

  /**
   * Method for finding a review using its unique id.
   * @param {string} id - id to use to find review.
   */
  static async findById(id) {
    return await review.where('id', id)
  }

  /**
   * Method to update a review.
   * @param {object} review - Review model to update
   * @param {object} changes - New changes to update a review with
   */
  static async update(review, changes) {
    return await update.save(changes)
  }

  /**
   * Method to delete a review.
   * @param {object} review - Review to delete
   */
  static async destroy(review) {
    return await review.destroy()
  }
}

export default Bookshelf.model('Review', Review)
