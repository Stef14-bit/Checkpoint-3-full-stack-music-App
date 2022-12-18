const { getAllTracks } = require('../controllers/track');

const router = require('express').Router();

router.get('/', getAllTracks);

module.exports = router;
