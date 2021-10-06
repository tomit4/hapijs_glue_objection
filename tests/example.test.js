const test = require("ava");

const app = require("./index");

test.beforeEach(async (t) => {
  t.context.Server = await app();
});

test("check status", async (t) => {
  const response = await t.context.Server.inject("/");
  t.is(response.statusCode, 200);
});
