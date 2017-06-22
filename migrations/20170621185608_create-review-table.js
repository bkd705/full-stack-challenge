exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', table => {
    table.uuid('id').primary()
    table.uuid('creator_id')
    table.foreign('creator_id').references('id').inTable('user')

    table.uuid('reviewee_id')
    table.foreign('reviewee_id').references('id').inTable('user')

    table.string('title')
    table.text('review')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {}
