const Router = require('express').Router();
const {
  getAllTracks,
  getTrack,
  postTrack,
  putTrack,
} = require('../controllers/tracks');

Router.get('/', getAllTracks);
Router.post('/', postTrack);
Router.get('/:id', getTrack);
Router.put('/:id', putTrack);

module.exports = Router;
