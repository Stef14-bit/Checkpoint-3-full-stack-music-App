const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello Album');
});

module.exports = router;
