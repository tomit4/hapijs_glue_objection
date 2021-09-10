// finally we export the route to be called by the usa_plugin.js file, but we reference a req.service()
// which means that Schmervice must be registered, as well as the usa_service.js must be registered via
// server.registerService() method.

module.exports = {
  method: "GET",
  path: "/usa",
  options: {
    description: "Get cities in usa",
    notes: "Returns all cities in usa",
    tags: ["api"],
  },
  handler: async (req, h) => {
    // after registering the Schmervice and custom made service, we then can deconstruct the usaService subclass from the registered services by calling req.services() method
    const { usaService } = req.services();
    // and finally utilize the citiesQuery() method we created when we created the usaService subclassx, this will call the Objection query() call which also includes withGraphFetched() to attach country information
    return usaService.citiesQuery();
  },
};
