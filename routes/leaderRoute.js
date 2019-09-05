const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
  .all((req, res, next) => {
    res, statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })

  .get((req, res, next) => {
    res.end('leader are showcased');
  })

  .post((req, res, next) => {
    res.end('leader are in post: ' + req.body.name);
  })
  .put((req, res, next) => {
    res.end('updated leader are in put: ' + req.body.name + ' and id :' + req.body.id);
  })
  .delete((req, res, next) => {
    res.end('deleting...');
  });

leaderRouter.route('/:leaderId')
  .all((req, res, next) => {
    res, statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })

  .get((req, res, next) => {
    res.end('leaders with Ids are showcased');
  })

  .post((req, res, next) => {
    res.end('leaders are in post: ' + req.body.name + ' with param' + req.params.dishId);
  })
  .put((req, res, next) => {
    res.end('updated leaders are in put: ' + req.body.name + ' and id :' + req.body.id + 'with param' + req.params.dishId);
  })
  .delete((req, res, next) => {
    res.end('deleting...' + 'with param' + req.params.dishId);
  });



module.exports = leaderRouter;