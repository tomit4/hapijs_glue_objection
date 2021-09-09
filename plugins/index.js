module.exports = {
  name: "custom-plugin",
  version: "1.0.0",
  register: function (server, options) {
    server.route({
      method: "GET",
      path: "/usa",
      options: {
        tags: ["api"],
      },
      handler: function (request, h) {
        try {
          return { msg: "hello" };
        } catch (err) {
          return err;
        }
      },
    });
  },
};
