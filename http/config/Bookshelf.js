import bookshelf from 'bookshelf'
import knex from 'knex'
import knexConfig from '../../knexfile'

// Setup bookshelf and knex instance
const Bookshelf = bookshelf(knex(knexConfig.development))

// Setup bookshelf plugins
Bookshelf.plugin('registry')
Bookshelf.plugin(require('bookshelf-uuid'))

export default Bookshelf
