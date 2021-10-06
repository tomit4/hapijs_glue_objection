//const test = require("ava");
//const fs = require("fs");

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = new Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
  process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
  });

  server.route({
    method: "GET",
    path: "/",
    handler: function (request, h) {
      return "Hello World";
    },
  });

  const res = await server.inject("/");
  console.log(res.result);
};

init();

module.exports = init;
//test("foo", (t) => t.pass());

//test("bar", async (t) => {
//const bar = Promise.resolve("bar");
//t.is(await bar, "bar");
//});

//const unicornPromise = async function () {
//return "unicorn";
//};

//test("resolves with unicorn", (t) => {
//return unicornPromise().then((result) => {
//t.is(result, "unicorn");
//});
//});

//test.cb("data.txt can be read", (t) => {
//// `t.end` automatically checks for erros as first argument
//fs.readFile("./data.txt", t.end);
//});
