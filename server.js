"use strict";

const Glue = require("@hapi/glue");
require("dotenv").config();

const route = require("./routes/routes");

// Confidence requires this ('/', process.env)
const Manifest = require("./manifest").get("/", process.env);

const startServer = async function () {
  try {
    const server = await Glue.compose(Manifest, {
      relativeTo: __dirname,
    });

    await require("exiting").createManager(server).start();

    // server.route(route.getUSA);
    // server.route(route.getMexico);
    // server.route(route.getCanada);

    // server.route(route.postNewCity);
    // server.route(route.deleteCity);
    // server.route(route.updateCity);

    server.events.on("stop", () => {
      console.log("Server Stopped.");
    });

    await server.start();

    // server.log(`Server running on ${server.info.uri}`)
    console.log(`Server running on ${server.info.uri}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
