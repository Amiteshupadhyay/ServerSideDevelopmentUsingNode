const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
  .all((req, res, next) => {
    res, statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })

  .get((req, res, next) => {
    res.end('promo are showcased');
  })

  .post((req, res, next) => {
    res.end('promo are in post: ' + req.body.name);
  })
  .put((req, res, next) => {
    res.end('updated promo are in put: ' + req.body.name + ' and id :' + req.body.id);
  })
  .delete((req, res, next) => {
    res.end('deleting...');
  });

promoRouter.route('/:promoId')
  .all((req, res, next) => {
    res, statusCode = 200;
    res.setHeader('COntent-Type', 'text/plain');
    next();
  })

  .get((req, res, next) => {
    res.end('promos with Ids showcased');
  })

  .post((req, res, next) => {
    res.end('promos are in post: ' + req.body.name + ' with param' + req.params.promoId);
  })
  .put((req, res, next) => {
    res.end('updated promos are in put: ' + req.body.name + ' and id :' + req.body.id + 'with param' + req.params.promoId);
  })
  .delete((req, res, next) => {
    res.end('deleting...' + 'with param' + req.params.promoId);
  });



module.exports = promoRouter;