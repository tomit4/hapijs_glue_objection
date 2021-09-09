const { nanoid } = require("nanoid");

module.exports = {
  countries: [
    { id: nanoid(), country: "usa", country_id: 1 },
    { id: nanoid(), country: "mexico", country_id: 2 },
    { id: nanoid(), country: "canada", country_id: 3 },
  ],
  cities: [
    { id: nanoid(), city: "Los Angeles", country_id: 1 },
    { id: nanoid(), city: "New York", country_id: 1 },
    { id: nanoid(), city: "Chicago", country_id: 1 },
    { id: nanoid(), city: "San Francisco", country_id: 1 },
    { id: nanoid(), city: "Portland", country_id: 1 },
    { id: nanoid(), city: "Tijuana", country_id: 2 },
    { id: nanoid(), city: "Ciudad Juarez", country_id: 2 },
    { id: nanoid(), city: "Chihuahua", country_id: 2 },
    { id: nanoid(), city: "Toronto", country_id: 3 },
    { id: nanoid(), city: "Victoria", country_id: 3 },
    { id: nanoid(), city: "Quebec City", country_id: 3 },
  ],
};
