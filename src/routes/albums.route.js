const Router = require('express').Router();
const {
  getAllAlbums,
  getAlbum,
  getAlbumTracks,
} = require('../controllers/albums');

Router.get('/', getAllAlbums);
Router.get('/:id', getAlbum);
Router.get('/:id/tracks', getAlbumTracks);

module.exports = Router;
