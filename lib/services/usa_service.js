const Schmervice = require("@hapipal/schmervice");
const Cities = require("../../models/cities");

module.exports = class CitiesService extends Schmervice.Service {
  citiesQuery() {
    this.server.log(["citiesService"]);
    return Cities.query().withGraphFetched("country").where("country_id", 1);
  }
};
