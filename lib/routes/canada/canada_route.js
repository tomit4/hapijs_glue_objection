module.exports = {
  method: "GET",
  path: "/canada",
  options: {
    description: "Get cities in canada",
    notes: "Returns all cities in canada",
    tags: ["api"],
  },
  handler: async (req, h) => {
    const { canadaService } = req.services();
    return canadaService.citiesQuery();
  },
};
