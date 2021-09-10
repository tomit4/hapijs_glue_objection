const Schmervice = require("@hapipal/schmervice");
const Cities = require("../../models/cities");

module.exports = class canadaService extends Schmervice.Service {
  citiesQuery() {
    this.server.log(["canadaService"]);
    return Cities.query().withGraphFetched("country").where("country_id", 3);
  }
};
