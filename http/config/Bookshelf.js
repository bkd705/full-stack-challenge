import bookshelf from 'bookshelf'
import knexConfig from '../../knexfile'

// Setup bookshelf instance
const Bookshelf = bookshelf(knexConfig.development)

// Setup bookshelf plugins
Bookshelf.plugin('registry')

export default Bookshelf
