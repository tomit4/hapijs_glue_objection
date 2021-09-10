const Schmervice = require("@hapipal/schmervice");
const CanadaService = require("../services/canada_service");
const CanadaRoute = require("../routes/canada/canada_route");

exports.plugin = {
  name: "canada-plugin",
  version: "1.0.0",
  register: async (server, options) => {
    await server.register(Schmervice);
    await server.registerService(CanadaService);
    await server.route(CanadaRoute);
  },
};
