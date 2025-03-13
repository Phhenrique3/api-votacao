const express = require('express');

const pollsRoutes = require('./pollsRoutes');

module.exports = app => {
  app.use(
    express.json(),
    pollsRoutes,
  );
};