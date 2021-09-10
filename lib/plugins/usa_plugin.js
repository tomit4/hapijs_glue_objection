const Schmervice = require("@hapipal/schmervice");
const UsaService = require("../services/usa_service");
const UsaRoute = require("../routes/usa/usa_route");

exports.plugin = {
  name: "usa-plugin",
  version: "1.0.0",
  register: async (server, options) => {
    await server.register(Schmervice);
    await server.registerService(UsaService);
    await server.route(UsaRoute);
  },
};
