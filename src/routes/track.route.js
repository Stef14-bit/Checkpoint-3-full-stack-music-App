const { getAllTracks, getTrackById } = require('../controllers/track');

const router = require('express').Router();

router.get('/', getAllTracks);
router.get('/:id', getTrackById);

module.exports = router;
