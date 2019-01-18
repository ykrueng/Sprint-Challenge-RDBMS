exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", t => {
    t.increments().primary();

    t.string("name", 255)
      .unique()
      .notNullable();

    t.string("description", 255);

    t.integer("flag_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("flags");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};