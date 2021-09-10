const Schmervice = require("@hapipal/schmervice");
const Cities = require("../../models/cities");

// the Schmervice class is extended to the usaService subclass, which is referenced by our usa_route.js file
module.exports = class usaService extends Schmervice.Service {
  // to which we pass objectionJS Cities model
  // citiesQuery() could have been called anything, but MUST be a function for Schmervice to accept it
  citiesQuery() {
    this.server.log(["usaService"]); // the this.server.log(["usaService"]) syntax refers to the name of the service to be referenced later,
    // keep in mind that this is NOT what the usa_route.js file refers to though, we never actually reference it in this case.
    return Cities.query().withGraphFetched("country").where("country_id", 1); // the withGraphFetched("country") syntax refers to the relationMappings() we used in models/cities.js file
  }
};
