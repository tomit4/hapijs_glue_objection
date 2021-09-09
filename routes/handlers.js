const Cities = require("../models/cities");

module.exports = {
  getUSA: async (req, h) => {
    return await Cities.query()
      .withGraphFetched("country")
      .where("country_id", 1);
  },
  getMexico: async (req, h) => {
    return await Cities.query()
      .withGraphFetched("country")
      .where("country_id", 2);
  },
  getCanada: async (req, h) => {
    return await Cities.query()
      .withGraphFetched("country")
      .where("country_id", 3);
  },
  postCity: async (req, h) => {
    const { city, country } = req.payload;
    const newPost = { id: nanoid(), city: city };

    switch (country.toLowerCase()) {
      case "usa":
        newPost.country_id = 1;
        break;
      case "mexico":
        newPost.country_id = 2;
        break;
      case "canada":
        newPost.country_id = 3;
        break;
      default:
        return { msg: "Please Enter a city and country you wish to add" };
    }

    await Cities.query().insert(newPost);

    return Cities.query()
      .withGraphFetched("country")
      .where("country_id", newPost.country_id);
  },
  deleteCity: async (req, h) => {
    const { city, country } = req.payload;

    await Cities.query().delete().where("city", city);

    let country_id;

    switch (country.toLowerCase()) {
      case "usa":
        country_id = 1;
        break;
      case "mexico":
        country_id = 2;
        break;
      case "canada":
        country_id = 3;
        break;
      default:
        return {
          msg: "Please Enter the City and its Country you wish to delete.",
        };
    }

    return Cities.query()
      .withGraphFetched("country")
      .where("country_id", country_id);
  },
  updateCity: async (req, h) => {
    let { city, country, newCity, newCountry } = req.payload;

    country = country.toLowerCase();
    newCountry = newCountry.toLowerCase();

    let country_id;

    switch (country) {
      case "usa":
        country_id = 1;
        break;
      case "mexico":
        country_id = 2;
        break;
      case "canada":
        country_id = 3;
        break;
      default:
        return {
          msg: "Please enter the country of city you wish to update.",
        };
    }

    let newCountry_id;

    switch (newCountry) {
      case "usa":
        newCountry_id = 1;
        break;
      case "mexico":
        newCountry_id = 2;
        break;
      case "canada":
        newCountry_id = 3;
        break;
      default:
        return { msg: "Please enter a new city" };
    }

    await Cities.query()
      .update({ city: newCity, country_id: newCountry_id })
      .where("city", city)
      .andWhere("country_id", country_id);

    return Cities.query()
      .withGraphFetched("country")
      .where("country_id", country_id);
  },
};
