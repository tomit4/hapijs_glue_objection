const UsaPlugin = require("./plugins/usa_plugin");
const MexicoPlugin = require("./plugins/mexico_plugin");
const CanadaPlugin = require("./plugins/canada_plugin");

exports.plugin = {
  name: "main-plugin",
  register: async (server, options) => {
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
