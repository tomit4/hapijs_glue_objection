"use strict";

const Confidence = require("@hapipal/confidence");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");

module.exports = new Confidence.Store({
  server: {
    host: process.env.HOST,
    port: {
      $filter: "NODE_ENV",
      $default: {
        $param: "PORT",
        $coerce: "number",
        $default: process.env.PORT,
      },
      test: { $value: undefined },
    },
    debug: {
      $filter: "NODE_ENV",
      $default: {
        log: ["error", "start"],
        request: ["error"],
      },
      production: {
        request: ["implementation"],
      },
    },
  },
  register: {
    plugins: [
      Inert,
      Vision,
      // plugin that takes in a library of all of our custom plugins, looks for index.js in ./lib
      {
        plugin: "./lib",
      },
      {
        plugin: HapiSwagger,
        options: {
          info: { title: "Test API Documentation" },
        },
      },
    ],
  },
});
