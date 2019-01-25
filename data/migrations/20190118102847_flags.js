exports.up = function(knex, Promise) {
  return knex.schema.createTable("flags", t => {
    t.increments().primary();

    t.string("name", 50)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("flags");
};