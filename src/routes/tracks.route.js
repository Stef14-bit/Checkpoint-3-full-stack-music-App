const Router = require('express').Router();
const {
  getAllTracks,
  getTrack,
  postTrack,
  putTrack,
  deleteTrack,
} = require('../controllers/tracks');

Router.get('/', getAllTracks);
Router.post('/', postTrack);
Router.get('/:id', getTrack);
Router.put('/:id', putTrack);
Router.delete('/:id', deleteTrack);

module.exports = Router;
