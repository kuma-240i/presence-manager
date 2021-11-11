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

  app.delete('/v1/presences/:id', (req, res) => {
    const { id } = req.params;
    knex('presence').where('id', id).del().then(() =>{
      res.status(204).end();
    });
  });

  app.patch('/v1/presences/:id', async (req, res) => {
    const { id } = req.params;
    knex('presence').where('id', id).update(req.body).then(() =>{
      res.status(204).end();
    });
  });

  return app;
};

module.exports = { setupExpressServer };
