const Schmervice = require("@hapipal/schmervice");
const UsaService = require("../services/usa_service");
const UsaRoute = require("../routes/usa/usa_route");

// once again we exports.plugin an object containing at least a name, and register key:value pair
exports.plugin = {
  name: "usa-plugin",
  version: "1.0.0",
  register: async (server, options) => {
    // this time we register Schmervice with the server as a plugin
    await server.register(Schmervice);
    // we then use Schmervice to register a custom service
    await server.registerService(UsaService);
    // and with that service registered, we then route the user, in this case a GET request to all USA cities
    await server.route(UsaRoute);
  },
};
