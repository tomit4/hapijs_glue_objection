const Schmervice = require("@hapipal/schmervice");
const MexicoService = require("../services/mexico_service");
const MexicoRoute = require("../routes/mexico/mexico_route");

exports.plugin = {
  name: "mexico-plugin",
  version: "1.0.0",
  register: async (server, options) => {
    await server.register(Schmervice);
    await server.registerService(MexicoService);
    await server.route(MexicoRoute);
  },
};
