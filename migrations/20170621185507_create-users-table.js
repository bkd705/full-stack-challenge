exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.uuid('id').primary()
    table.string('email').notNullable().unique()
    table.string('password', 60).notNullable()
    table.string('role').defaultTo('employee')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {}
