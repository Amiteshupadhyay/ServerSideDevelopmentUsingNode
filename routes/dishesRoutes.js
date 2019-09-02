const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
  .all((req, res, next) => {
    res, statusCode = 200;
    res.setHeader('COntent-Type', 'text/plain');
    next();
  })

  .get((req, res, next) => {
    res.end('Dishes are showcased');
  })

  .post((req, res, next) => {
    res.end('dishes are in post: ' + req.body.name);
  })
  .put((req, res, next) => {
    res.end('updated dishes are in put: ' + req.body.name + ' and id :' + req.body.id);
  })
  .delete((req, res, next) => {
    res.end('deleting...');
  });

dishRouter.route('/:dishId')
  .all((req, res, next) => {
    res, statusCode = 200;
    res.setHeader('COntent-Type', 'text/plain');
    next();
  })

  .get((req, res, next) => {
    res.end('Dishes with Ids showcased');
  })

  .post((req, res, next) => {
    res.end('dishes are in post: ' + req.body.name + ' with param' + req.params.dishId);
  })
  .put((req, res, next) => {
    res.end('updated dishes are in put: ' + req.body.name + ' and id :' + req.body.id + 'with param' + req.params.dishId);
  })
  .delete((req, res, next) => {
    res.end('deleting...' + 'with param' + req.params.dishId);
  });



module.exports = dishRouter;