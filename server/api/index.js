// const router = require('express').Router()
// const {HashedMessages} = require('../db')

// router.use('/', require('./messages'))

// router.use((req, res, next) => {
//   const err = new Error('API route not found!')
//   err.status = 404
//   next(err)
// })

// module.exports = router
const router = require('express').Router();
module.exports = router;

// router.use('/', require('./Video'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
