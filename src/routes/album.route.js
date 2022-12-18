const {
  getAllAlbums,
  getAlbumById,
  getAlbumTracks,
} = require('../controllers/album');

const router = require('express').Router();

router.get('/', getAllAlbums);
router.get('/:id', getAlbumById);
router.get('/:id/tracks', getAlbumTracks);

module.exports = router;
