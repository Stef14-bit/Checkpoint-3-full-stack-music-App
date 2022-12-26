const Router = require('express').Router();
const { getAllAlbums } = require('../controllers/albums');

Router.get('/', getAllAlbums);

module.exports = Router;
