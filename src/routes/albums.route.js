const Router = require('express').Router();
const {
  getAllAlbums,
  getAlbum,
  getAlbumTracks,
  postAlbum,
  putAlbum,
} = require('../controllers/albums');

Router.get('/', getAllAlbums);
Router.post('/', postAlbum);
Router.put('/:id', putAlbum);
Router.get('/:id', getAlbum);
Router.get('/:id/tracks', getAlbumTracks);

module.exports = Router;
