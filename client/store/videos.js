import firebase from '../firebase';

const VIDEO_ADDED = 'VIDEO_ADDED';
const VIEW_ADDED = 'VIEW_ADDED';
const GOT_VIDEO = 'GOT_VIDEO';
const GOT_VIEW_REPORT = 'GOT_VIEW_REPORT';
const GOT_ALL_VIDEOS = 'GOT_ALL_VIDEOS';
const GOT_KEYTERM_LIST = 'GOT_KEYTERM_LIST';

const videoAdded = video => ({
  type: VIDEO_ADDED,
  video
});
const viewAdded = video => ({
  type: VIEW_ADDED,
  video
});
const gotVideo = video => ({
  type: GOT_VIDEO,
  video
});
const gotAllVideos = videoList => ({
  type: GOT_ALL_VIDEOS,
  videoList
});
const gotViewReport = views => ({
  type: GOT_VIEW_REPORT,
  views
});
const gotKeytermList = list => ({
  type: GOT_KEYTERM_LIST,
  list
});

/* postgres*/
// export const getVideo = id => {
//   // (id, ownProps)
//   return async dispatch => {
//     try {
//       const { data } = await axios.get(`/video/${id}`);
//       const video = data;
//       dispatch(gotVideo(video));
//     } catch (err) {
//       console.log('not setting stuff');
//       console.error(err);
//       //ownProps.history.push(`/oops`);
//     }
//   };
// };
/* firebase*/
export const getVideo = id => {
  // (id, ownProps)
  return async dispatch => {
    try {
      const { data } = await axios.get(`/video/${id}`);
      const video = data;
      dispatch(gotVideo(video));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
      //ownProps.history.push(`/oops`);
    }
  };
};
/* postgres*/
// export const getAllVideos = () => {
//   return async dispatch => {
//     try {
//       const { data } = await axios.get(`/video/`);
//       const video = data;
//       dispatch(gotVideo(video));
//     } catch (err) {
//       console.log('not setting stuff');
//       console.error(err);
//       //ownProps.history.push(`/oops`);
//     }
//   };
// };
/* firebase*/
// export const getAllVideos = () => {
//   return async dispatch => {
//     try {
//       const allVideos = [];
//       // firebase.auth().onAuthStateChanged(function(user) {
//       //   if (user) {
//       const ref = firebase.database().ref('videos');
//       ref.on('value', function(snapshot) {
//         const videos = snapshot.val();
//         for (let key in videos) {
//           let singleVideo = {
//             key: key,
//             brand: videos[key].brand,
//             name: videos[key].name,
//             url: videos[key].storageRef,
//             views: videos[key].totalViews
//           };

//           allVideos.push(singleVideo);
//         }
//       });
//       // }
//       // });

//       console.log('in the action creator all videos', allVideos);
//       dispatch(gotAllVideos(allVideos));
//     } catch (err) {
//       console.log('not setting stuff');
//       console.error(err);
//     }
//   };
// };
export const getAllVideos = () => {
  return async dispatch => {
    try {
      const allVideos = [];

      const ref = await firebase
        .database()
        .ref('/videos')
        .once('value')
        .then(function(snapshot) {
          var videos = snapshot.val();
          for (let key in videos) {
            let singleVideo = {
              key: key,
              brand: videos[key].brand,
              name: videos[key].name,
              url: videos[key].storageRef,
              views: videos[key].totalViews
            };
            allVideos.push(singleVideo);
          }
        });

      const videoList = allVideos;
      dispatch(gotAllVideos(videoList));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

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
/* firebase*/
export const addNewVideo = (name, brand, uri, category) => {
  return async dispatch => {
    try {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const videoDetails = {
            name: name,
            brand: brand,
            storageRef: uri,
            primaryVideoCategory: category,
            keywords: [],
            publishedDate: Date.now(),
            totalViews: 0,
            viewHistory: []
          };
          const newKey = firebase
            .database()
            .ref('videos')
            .push().key;

          const video = firebase
            .database()
            .ref('videos')
            .child(newKey)
            .set(videoDetails);
          dispatch(videoAdded(video));
        }
      });
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

/* firebase*/
export const addNewView = (videoId, brand, platform, user, viewCount) => {
  return async dispatch => {
    try {
      const viewDetails = {
        videoId: videoId,
        brand: brand,
        platform: platform,
        dateViewed: Date.now(),
        user: user
      };
      console.log('view count in action ', viewCount);
      const newKey = await firebase
        .database()
        .ref('views')
        .push().key;
      const view = await firebase
        .database()
        .ref('views')
        .child(newKey)
        .set(viewDetails);
      firebase
        .database()
        .ref('videos/' + videoId)
        .update({ totalViews: `${viewCount}` });
      dispatch(videoAdded(view));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

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

export const getVideoViews = id => {
  return async dispatch => {
    try {
      let videoViews = [];
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const ref = firebase.database().ref('views');
          ref.on('value', function(snapshot) {
            const allViews = snapshot.val();
            for (let key in allViews) {
              if (allViews[key].videoId === id) {
                let singleView = {
                  key: key,
                  brand: allViews[key].brand,
                  name: allViews[key].name,
                  url: allViews[key].storageRef,
                  totalViews: allViews[key].totalViews
                };
                videoViews.push(singleView);
              }
            }
          });
        }
      });

      dispatch(gotViewReport(videoViews));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};
export const getViewReport = id => {
  return async dispatch => {
    try {
      let videoViews = [];
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const ref = firebase.database().ref('videos' + id);
          ref.on('value', function(snapshot) {
            const video = snapshot.val();
            for (let key in video) {
              let viewInfo = {
                brand: video[key].brand,
                name: video[key].name,
                publishedDate: video[key].storageRef,
                totalViews: video[key].totalViews
              };
              videoViews.push(viewInfo);
            }
          });
        }
      });
      dispatch(gotViewReport(videoViews));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
  };
};

export const getKeytermList = keyword => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/keywords/${keyword}`);
      const videoList = data;
      dispatch(gotKeytermList(videoList));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
      //ownProps.history.push(`/oops`);
    }
  };
};

const initialState = {
  video: [],
  videoList: [],
  views: []
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_ADDED:
      return { ...state, videoList: action.video };
    case VIEW_ADDED:
      return { ...state, stockList: action.video };
    case GOT_VIDEO:
      return {
        ...state,
        currentVideo: [...state.currentVideo, action.video]
      };
    case GOT_VIEW_REPORT:
      return {
        ...state,
        views: [...state.views, action.views]
      };
    case GOT_KEYTERM_LIST:
      return {
        ...state,
        videoList: [...state.currentVideo, action.video]
      };
    case GOT_ALL_VIDEOS:
      return {
        ...state,
        videoList: action.videoList
      };

    default:
      return state;
  }
};

export default videosReducer;
