"use strict";

const Confidence = require("@hapipal/confidence");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const path = require("path");

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
    // routes: {
    //   cors: {
    //     origin: ["*"],
    //     additionalHeaders: ["headers"],
    //   },
    //   files: {
    //     relativeTo: path.join(__dirname, "/"),
    //   },
    // },
  },
  register: {
    plugins: [
      Inert,
      Vision,
      // {
      //   plugin: "./plugins",
      //   routes: {
      //     prefix: "/api",
      //   },
      // },
      {
        plugin: HapiSwagger,
        options: {
          info: { title: "Test API Documentation" },
        },
      },
    ],
  },
});
