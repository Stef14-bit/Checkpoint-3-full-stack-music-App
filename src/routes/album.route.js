const {
  getAllAlbums,
  getAlbumById,
  getAlbumTracks,
  postAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../controllers/album');

const router = require('express').Router();

router.get('/', getAllAlbums);
router.get('/:id', getAlbumById);
router.get('/:id/tracks', getAlbumTracks);
router.post('/', postAlbum);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);
module.exports = router;
