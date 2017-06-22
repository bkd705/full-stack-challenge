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

  creator() {
    this.belongsTo('User', 'creator_id', 'id')
  }

  reviewee() {
    this.belongsTo('User', 'reviewee_id', 'id')
  }

  feedback() {
    this.hasMany('Feedback')
  }

  /**
   * Method to create a review.
   * @param {object} data - Review to be created
   */
  static async create(data) {
    const review = new Review(data)
    return await review.save()
  }

  /**
   * Method for finding a review using its unique id.
   * @param {string} id - id to use to find review.
   */
  static async findById(id) {
    return await review.where('id', id).fetch()
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
