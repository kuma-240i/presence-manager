const config = require("./config");
const knex = require("knex")(config.db);
const express = require("express");
const app = express();

const setupExpressServer = () => {
  app.use(express.json());

  app.use(express.static('public'));

  app.get('/v1/presences', (req, res) => {
    knex.select('*').from('presence').then((rows) =>{
      res.send(rows);
    });
  });
  
  app.post('/v1/presences', (req, res) => {
    knex('presence').insert(req.body).then(() =>{
      res.status(201).end();
    });    
  });
  
  return app;
};

module.exports = { setupExpressServer };
