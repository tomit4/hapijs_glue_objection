// Main Plugin file that takes in library of custom made plugins

const UsaPlugin = require("./plugins/usa_plugin");
const MexicoPlugin = require("./plugins/mexico_plugin");
const CanadaPlugin = require("./plugins/canada_plugin");

// exports.plugin acts like module.exports, all Hapi plugins expect a name and register key:value pair
exports.plugin = {
  name: "main-plugin",
  register: async (server, options) => {
    // asynchronously passes the plugins to the server to be registered, note the required routes:{} field which expects a prefix:"/route_name" field
    await server.register(UsaPlugin, {
      routes: { prefix: "/api" },
    });

    await server.register(MexicoPlugin, {
      routes: { prefix: "/api" },
    });

    await server.register(CanadaPlugin, {
      routes: { prefix: "/api" },
    });
  },
};
