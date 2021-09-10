module.exports = {
  method: "GET",
  path: "/cities",
  options: {
    description: "Get cities in usa",
    notes: "Returns all cities in usa",
    tags: ["api"],
  },
  handler: async (req, h) => {
    const { citiesService } = req.services();
    return citiesService.citiesQuery();
  },
};
