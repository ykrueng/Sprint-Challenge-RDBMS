exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", t => {
    t.increments().primary();

    t.string("description", 255)
      .unique()
      .notNullable();

    t.string("notes", 255);

    t.integer("flag_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("flags");

    t.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};