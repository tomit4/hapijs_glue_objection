const Schmervice = require("@hapipal/schmervice");
const Cities = require("../../models/cities");

module.exports = class usaService extends Schmervice.Service {
  citiesQuery() {
    this.server.log(["usaService"]);
    return Cities.query().withGraphFetched("country").where("country_id", 1);
  }
};
