const Cities = require("../models/cities");
const Schmervice = require("@hapipal/schmervice");
// const testService = require("../services/test");

module.exports = {
  name: "custom-plugin",
  version: "1.0.0",
  register: function (server, options) {
    server.route({
      method: "GET",
      path: "/usa",
      options: {
        description: "Get cities in usa",
        notes: "Returns all cities in usa",
        tags: ["api"],
      },
      handler: async (req, h) => {
        await server.register(Schmervice);

        await server.registerService(
          class CitiesService extends Schmervice.Service {
            citiesQuery() {
              this.server.log(["citiesService"]);
              return Cities.query()
                .withGraphFetched("country")
                .where("country_id", 1);
            }
          }
        );

        const { citiesService } = req.services();
        return citiesService.citiesQuery();
      },
    });
  },
};
