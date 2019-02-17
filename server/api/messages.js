const router = require('express').Router();
// const { Video } = require('../db/models');

module.exports = router;

// router.post('/', async (req, res, next) => {
//   try {

//       const clauseMsg = {message: req.body.message, hashedValue: 'CLAUSE!'}
//       console.log('messasge is in here', req.body.message)
//       await HashedMessages.create(clauseMsg)

//       res.status(201).json({digest: 'CLAUSE!'})
//     }
//     if (checkCatTerms(req.body.message)) {
//       const catMsg = {message: req.body.message, hashedValue: 'CLAWS!'}
//       console.log('messasge is in here', catMsg)
//       await HashedMessages.create(catMsg)

//       res.status(201).json({digest: 'CLAWS!'})
//     } else {
//       const msg = crypto
//         .createHash('sha256')
//         .update(req.body.message, 'binary')
//         .digest('hex')

//       const newMsg = {message: req.body.message, hashedValue: msg}
//       console.log('messasge is in here', newMsg)
//       await HashedMessages.create(newMsg)

//       res.status(201).json({digest: msg})
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/:hashed', async (req, res, next) => {
//   try {
//     const originalReq = await HashedMessages.findOne({
//       where: {hashedValue: req.params.hashed}
//     })

//     if (originalReq) {
//       return res.status(200).json({message: originalReq.message})
//     } else {
//       return res
//         .status(404)
//         .json('Opps! Does not compute! Value has not been previously hashed.')
//     }
//   } catch (err) {
//     next(err)
//   }
// })
