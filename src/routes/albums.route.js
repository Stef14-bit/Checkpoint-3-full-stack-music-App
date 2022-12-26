const Router = require('express').Router();
const { getAllAlbums, getAlbum } = require('../controllers/albums');

Router.get('/', getAllAlbums);
Router.get('/:id', getAlbum);

module.exports = Router;
