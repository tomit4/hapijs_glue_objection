exports.up = function (knex, Promise) {
  return knex.schema.createTable("cities", (t) => {
    t.string("id").primary();
    t.string("city");
    t.integer("country_id");
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("cities");
};
