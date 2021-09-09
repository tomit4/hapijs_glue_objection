const { Model } = require("objection");
const config = require("../db/knex");
Model.knex(config);
const Joi = require("joi");

const Country = require("./country");

module.exports = class Cities extends Model {
  static get tableName() {
    return "cities";
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.string().required(),
      country: Joi.string().required(),
      country_id: Joi.number().required(),
    }).required();
  }

  static get relationMappings() {
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: "cities.country_id",
          to: "countries.country_id",
        },
      },
    };
  }
};
