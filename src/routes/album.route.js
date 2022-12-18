const { getAllAlbums } = require('../controllers/album');

const router = require('express').Router();

router.get('/', getAllAlbums);

module.exports = router;
