const Schmervice = require("@hapipal/schmervice");
const Cities = require("../models/cities");

module.exports = class test extends Schmervice.Service {
  citieslog() {
    return { msg: "hello" };
    // const { Cities } = server.models;
    // const cities = Cities.query();
    // server.log(Cities);
    // return cities;
  }
  //   function() {
  //     // return Cities.query();
  //     return { msg: "hello" };
  //   }
};
