const UsaPlugin = require("./plugins/usa_plugin");

exports.plugin = {
  name: "main-plugin",
  register: async (server, options) => {
    await server.register(UsaPlugin, {
      routes: { prefix: "/usa" },
    });
  },
};
