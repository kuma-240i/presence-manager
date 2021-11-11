const config = require("./config");
const knex = require("knex")(config.db);
const express = require("express");
const app = express();

const setupExpressServer = () => {
  app.use(express.json());

  app.use(express.static('public'));

  app.get("/v1/hello", (req, res) => {
    res.send("hello");
  });

  app.get("/v1/test", (req, res) => {
    knex.select("*").from("test").then(function(rows){
      res.send(rows);
    });
  });
  
  return app;
};

module.exports = { setupExpressServer };
