exports.up = function(knex, Promise) {
  return knex.schema.createTable("action_context", t => {
    t.integer("action_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions");

    t.integer("context_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("contexts");

    t.primary(['action_id', 'context_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("action_context");
};