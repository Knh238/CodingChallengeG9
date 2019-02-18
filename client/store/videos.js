import axios from 'axios';
// import history from '../history';
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
const gotAllVideos = video => ({
  type: GOT_ALL_VIDEOS,
  video
});
const gotViewReport = video => ({
  type: GOT_VIEW_REPORT,
  video
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
export const getAllVideos = () => {
  return async dispatch => {
    try {
      const allVideos = [];
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const allVideos = [];
          const ref = firebase.database().ref('videos');
          ref.on('value', function(snapshot) {
            const videos = snapshot.val();

            allVideos.push(videos);
          });
        }
      });

      // const allVideos = await firebase
      // .database()
      // .ref('videos')
      dispatch(gotAllVideos(allVideos));
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
export const addNewView = (videoId, brand, platform, user) => {
  return async dispatch => {
    try {
      const viewDetails = {
        videoId: videoId,
        brand: brand,
        platform: platform,
        dateViewed: Date.now(),
        user: user
      };
      const newKey = await firebase
        .database()
        .ref('views')
        .push().key;
      const video = await firebase
        .database()
        .ref('views')
        .child(newKey)
        .set(viewDetails);
      dispatch(videoAdded(video));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
      //ownProps.history.push(`/oops`);
    }
    //return the new view
    //callupdate videoviews
    //pass ti the video id and new view
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

export const getViewReport = id => {
  return async dispatch => {
    try {
      let allViews = [];
      const ref = await firebase.database().ref('views' + id);
      ref.on('value', function(snapshot) {
        const views = snapshot.val();
        allViews.push(views);
      });
      dispatch(gotViewReport(allViews));
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
      return { ...state, stockList: action.video };
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
        currentVideo: [...state.currentVideo, action.video]
      };
    case GOT_KEYTERM_LIST:
      return {
        ...state,
        currentVideoList: [...state.currentVideo, action.video]
      };
    case GOT_ALL_VIDEOS:
      return {
        ...state,
        currentVideoList: [...state.currentVideo, action.video]
      };

    default:
      return state;
  }
};

export default videosReducer;
