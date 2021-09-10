const Schmervice = require("@hapipal/schmervice");
const Cities = require("../../models/cities");

module.exports = class mexicoService extends Schmervice.Service {
  citiesQuery() {
    this.server.log(["mexicoService"]);
    return Cities.query().withGraphFetched("country").where("country_id", 2);
  }
};
