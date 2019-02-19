// export const VIDEO_ADDED = 'VIDEO_ADDED';
// export const VIEW_ADDED = 'VIEW_ADDED';
// export const GOT_VIDEO = 'GOT_VIDEO';
// export const GOT_VIEW_REPORT = 'GOT_VIEW_REPORT';
// export const GOT_ALL_VIDEOS = 'GOT_ALL_VIDEOS';
// export const GOT_VIDEO_VIEWS = 'GOT_VIDEO_VIEWS';
// export const GOT_KEYTERM_LIST = 'GOT_KEYTERM_LIST';

// export const videoAdded = video => ({
//   type: VIDEO_ADDED,
//   video
// });
// export const viewAdded = video => ({
//   type: VIEW_ADDED,
//   video
// });
// export const gotVideo = video => ({
//   type: GOT_VIDEO,
//   video
// });
// export const gotAllVideos = videoList => ({
//   type: GOT_ALL_VIDEOS,
//   videoList
// });
// export const gotViewReport = viewReport => ({
//   type: GOT_VIEW_REPORT,
//   viewReport
// });
// export const gotVideoViews = views => ({
//   type: GOT_VIDEO_VIEWS,
//   views
// });
// export const gotKeytermList = list => ({
//   type: GOT_KEYTERM_LIST,
//   list
// });

/* postgres*/
// export const getVideo = id => {
//   return async dispatch => {
//     try {
//       const { data } = await axios.get(`/video/${id}`);
//       const video = data;
//       dispatch(gotVideo(video));
//     } catch (err) {
//       console.log('not setting stuff');
//       console.error(err);
//     }
//   };
// };

/* postgres*/
// export const addNewVideo = newVideo => {
//   //(newVideo,ownProps)
//   return async dispatch => {
//     try {
//       const { data } = await axios.post(`/videos/`, newVideo);
//       const video = data;
//       dispatch(videoAdded(video));
//       //   ownProps.history.push(`/campuses`);
//     } catch (err) {
//       console.error(err);
//       // ownProps.history.push(`/oops`);
//     }
//   };
// };

/* postgres*/
// export const getViewReport = id => {
//   // (id, ownProps)
//   return async dispatch => {
//     try {
//       const { data } = await axios.get(`/videos/views/${id}`);
//       const view= data;
//       dispatch(gotViewReport(view));
//     } catch (err) {
//       console.log('not setting stuff');
//       console.error(err);
//       //ownProps.history.push(`/oops`);
//     }
//   };
// };

// export const getKeytermList = keyword => {
//   return async dispatch => {
//     try {
//       const { data } = await axios.get(`/keywords/${keyword}`);
//       const videoList = data;
//       dispatch(gotKeytermList(videoList));
//     } catch (err) {
//       console.log('not setting stuff');
//       console.error(err);
//       //ownProps.history.push(`/oops`);
//     }
//   };
// };
