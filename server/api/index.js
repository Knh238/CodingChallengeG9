const router = require('express').Router();
const { Video, View } = require('../db');
module.exports = router;

router.use('/videos', require('./videos'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
