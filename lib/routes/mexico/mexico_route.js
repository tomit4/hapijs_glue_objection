module.exports = {
  method: "GET",
  path: "/mexico",
  options: {
    description: "Get cities in mexico",
    notes: "Returns all cities in mexico",
    tags: ["api"],
  },
  handler: async (req, h) => {
    // console.log(req.services());
    const { mexicoService } = req.services();
    return mexicoService.citiesQuery();
  },
};
