exports.up = function (knex, Promise) {
  return knex.schema.createTable("countries", (t) => {
    t.string("id").primary();
    t.string("country");
    t.integer("country_id");
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("countries");
};
