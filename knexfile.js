// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'paytm_development',
      user: 'root',
      password: 'earbuds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'paytm_staging',
      user: 'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'paytm_production',
      user: 'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
