const Router = require('express').Router();
const filmRoute = require('./film');

Router.use('/', filmRoute);

module.exports = Router;