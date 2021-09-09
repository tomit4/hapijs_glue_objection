const { Model } = require("objection");
const config = require("../db/knex");
Model.knex(config);
const Joi = require("joi");

module.exports = class Country extends Model {
  static get tableName() {
    return "countries";
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.string().required(),
      country: Joi.string().required(),
      country_id: Joi.number().required(),
    }).required();
  }
};
