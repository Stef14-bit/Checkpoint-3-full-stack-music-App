const Router = require('express').Router();
const {
  getAllAlbums,
  getAlbum,
  getAlbumTracks,
  postAlbum,
  putAlbum,
  deleteAlbum,
} = require('../controllers/albums');

Router.get('/', getAllAlbums);
Router.post('/', postAlbum);
Router.get('/:id', getAlbum);
Router.put('/:id', putAlbum);
Router.delete('/:id', deleteAlbum);
Router.get('/:id/tracks', getAlbumTracks);

module.exports = Router;
