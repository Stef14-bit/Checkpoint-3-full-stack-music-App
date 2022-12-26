const Router = require('express').Router();
const { getAllTracks, getTrack } = require('../controllers/tracks');

Router.get('/', getAllTracks);
Router.get('/:id', getTrack);

module.exports = Router;
