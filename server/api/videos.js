const router = require('express').Router();
const { Video } = require('../db/models');
const { View } = require('../db/models');

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const videoInfo = req.body;
    videoInfo.publishedDate = Date.now();
    console.log('video is in here', req.body);

    const newVideo = await Video.create(videoInfo);

    res.status(201).json(newVideo);
  } catch (err) {
    next(err);
  }
});

router.get('/:videoId', async (req, res, next) => {
  try {
    const videoInDB = await Video.findOne({
      where: { videoId: req.params.videoId }
    });

    if (videoInDB) {
      return res.status(200).json({ video: videoInDB });
    } else {
      return res
        .status(404)
        .json(
          'Opps! Does not compute! Video has not been previously entered in the system'
        );
    }
  } catch (err) {
    next(err);
  }
});
router.get('/', async (req, res, next) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (err) {
    next(err);
  }
});
// router.put('/:videoId', async (req, res, next) => {
//   try {
//     const videoId = req.params.videoId;
//     const newView = await View.create(req.params);
//     const currentVideo = await Video.findById(videoId);
//     await Video.update(req.body);
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });
// router.post('/view/', async (req, res, next) => {
//   try {
//     const videoInfo = req.body;
//     const videoId = req.body.videoId;
//     console.log('video is in here', req.body);
//     const newView = await View.create(videoInfo);
//     const currentVideo = await Video.findById(videoId);
//     const updatedViews = [...currentVideo.viewHistory, newView];
//     await currentVideo.update({ viewHistry: updatedViews });
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });
