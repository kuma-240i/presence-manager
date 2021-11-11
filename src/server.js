// TODO:リクエストが「/api」で始まる場合は、apiRouter リクエストを渡す
// const knex = require("knex")(config.db);
// const models = require("./models")(knex);
// const apiRouter = require("./controllers")(models);
const express = require("express");
const app = express();

const setupExpressServer = () => {
  app.use(express.json());

  app.get("/v1/hello", (req, res) => {
    res.send("hello");
  });
  // TODO:リクエストが「/api」で始まる場合は、apiRouter リクエストを渡す
  // app.use("/api", apiRouter);

  app.use(express.static('public'));
  return app;
};

module.exports = { setupExpressServer };
