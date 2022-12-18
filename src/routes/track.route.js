const {
  getAllTracks,
  getTrackById,
  postTrack,
  updateTrack,
  deleteTrack,
} = require('../controllers/track');

const router = require('express').Router();

router.get('/', getAllTracks);
router.get('/:id', getTrackById);
router.post('/', postTrack);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);

module.exports = router;
