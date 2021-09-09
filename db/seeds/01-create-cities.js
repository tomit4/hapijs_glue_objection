const { cities } = require("../mock");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cities")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cities").insert(cities);
    });
};
