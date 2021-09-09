const Joi = require("joi");
const handlers = require("./handlers");

module.exports = {
  getUSA: {
    method: "GET",
    path: "/usa",
    options: {
      handler: handlers.getUSA,
      description: "Get cities in usa",
      notes: "Returns all cities in usa",
      tags: ["api"],
    },
  },
  getMexico: {
    method: "GET",
    path: "/mexico",
    options: {
      handler: handlers.getMexico,
      description: "Get cities in mexico",
      notes: "Returns all cities in mexico",
      tags: ["api"],
    },
  },
  getCanada: {
    method: "GET",
    path: "/canada",
    options: {
      handler: handlers.getCanada,
      description: "Get cities in canada",
      notes: "Returns all cities in canada",
      tags: ["api"],
    },
  },
  postNewCity: {
    method: "POST",
    path: "/",
    options: {
      handler: handlers.postCity,
      description: "Post a new city.",
      notes:
        "Posts a new city and returns cities table with country table joined",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          city: Joi.string().required(),
          country: Joi.string().required(),
        }),
      },
    },
  },
  deleteCity: {
    method: "DELETE",
    path: "/",
    options: {
      handler: handlers.deleteCity,
      description: "Delete a city.",
      notes:
        "Deletes a city and returns cities table with country table joined",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          city: Joi.string().required(),
          country: Joi.string().required(),
        }),
      },
    },
  },
  updateCity: {
    method: "PUT",
    path: "/",
    options: {
      handler: handlers.updateCity,
      description: "Update a city.",
      notes:
        "Updates a city and returns cities table with country table joined",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          city: Joi.string().required(),
          country: Joi.string().required(),
          newCity: Joi.string().required(),
          newCountry: Joi.string().required(),
        }),
      },
    },
  },
};
