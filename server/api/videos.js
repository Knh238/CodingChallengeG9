const router = require('express').Router();
const Sequelize = require('sequelize');
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
    const vidId = req.params.videoId;
    const videoInDB = await Video.findById(vidId);

    if (videoInDB) {
      res.status(200).json(videoInDB);
    } else {
      res
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
    return res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
});

//gets view report in format listed in instructions
router.get('/:videoId/report', async (req, res, next) => {
  try {
    const videoId = req.params.videoId;
    const viewHistory = await View.findAll({ where: { videoId: videoId } });
    const video = await Video.findById(videoId);
    const responseObject = {
      name: video.name,
      brand: video.brand,
      published: video.publishedDate,
      count: viewHistory.length
    };
    console.log('view history in get', responseObject);
    res.status(200).json(responseObject);
  } catch (err) {
    next(err);
  }
});

//returns a list of views in detail
router.get('/:videoId/views', async (req, res, next) => {
  try {
    const videoId = req.params.videoId;
    const viewHistory = await View.findAll({ where: { videoId: videoId } });
    console.log('view history in get', viewHistory);
    res.status(200).json({ views: viewHistory });
  } catch (err) {
    next(err);
  }
});
//returns the total views
router.get('/:videoId/viewsTotal', async (req, res, next) => {
  try {
    const videoId = req.params.videoId;
    const viewHistory = await View.findAll({ where: { videoId: videoId } });
    console.log('view history in get', viewHistory.length);
    //returns 10
    res.status(200).json({ viewsTotal: viewHistory.length });
  } catch (err) {
    next(err);
  }
});

router.post('/view/', async (req, res, next) => {
  try {
    const videoInfo = req.body;
    videoInfo.dateViewed = Date.now();
    const videoId = req.body.videoId;
    console.log('video is in here', req.body);
    const newView = await View.create(videoInfo);
    // const currentVideo = await Video.findById(videoId);
    // const newViewHistory = currentVideo.viewHistory.push(newView);
    // {'job_ids': sequelize.fn('array_append', sequelize.col('job_ids'), new_jobId)},
    // {'where': {'id': roomId}}
    // await Video.update(
    //   {
    //     viewHistory: Sequelize.fn(
    //       'array_append',
    //       Sequelize.col('viewHistory'),
    //       newView
    //     )
    //   },
    //   { where: { id: videoId } }
    // );
    res.status(201).json({ newView: newView });
  } catch (err) {
    next(err);
  }
});
