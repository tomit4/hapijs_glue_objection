module.exports = {
  method: "GET",
  path: "/usa",
  options: {
    description: "Get cities in usa",
    notes: "Returns all cities in usa",
    tags: ["api"],
  },
  handler: async (req, h) => {
    const { usaService } = req.services();
    return usaService.citiesQuery();
  },
};
