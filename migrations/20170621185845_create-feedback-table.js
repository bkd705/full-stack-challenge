exports.up = function(knex, Promise) {
  return knex.schema.createTable('feedback', table => {
    table.uuid('id').primary()
    table.uuid('creator_id')
    table.foreign('creator_id').references('id').inTable('user')

    table.uuid('review_id')
    table.foreign('review_id').references('id').inTable('review')

    table.text('feedback')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {}
