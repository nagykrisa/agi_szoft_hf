const express = require('express');
const _ = require('lodash');

const router = express.Router();

const routes = require('require-all')({
  dirname: __dirname,
  filter: /(.+Routes)\.js$/
});

_.mapValues(routes, (value, key) => {
  const path = key.replace('Routes', '');
  router.use(`/api/${path}`, value);
});

module.exports = router;
