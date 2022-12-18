const { getAllAlbums, getAlbumById } = require('../controllers/album');

const router = require('express').Router();

router.get('/', getAllAlbums);
router.get('/:id', getAlbumById);

module.exports = router;
