import axios from 'axios';
import history from '../history';
// var config = require("../../secrets");
// const request = require('request')
// const convert = require('xml-js')

// // request.mode = 'no-cors'

const ADDED_VIDEO = 'ADDED_VIDEO';
const GOT_VIDEO = 'GOT_VIDEO';
const GOT_VIDEO_VIEWS = 'GOT_VIDEO_VIEWS';
const GOT_KEYTERM_LIST = 'GOT_KEYTERM_LIST';

const videoAdded = video => ({
  type: ADDED_VIDEO,
  video
});
const gotVideo = video => ({
  type: GOT_VIDEO,
  video
});
const gotVideoViews = video => ({
  type: GOT_VIDEO_VIEWS,
  video
});
const gotKeytermList = list => ({
  type: GOT_KEYTERM_LIST,
  list
});

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

export const addVideo = newVideo => {
  //(newVideo,ownProps)
  return async dispatch => {
    try {
      const { data } = await axios.post(`/videos/`, newVideo);
      const video = data;
      dispatch(videoAdded(video));
      //   ownProps.history.push(`/campuses`);
    } catch (err) {
      console.error(err);
      // ownProps.history.push(`/oops`);
    }
  };
};

export const getViews = id => {
  // (id, ownProps)
  return async dispatch => {
    try {
      const { data } = await axios.get(`/videos/views/${id}`);
      const video = data;
      dispatch(gotVideoViews(video));
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
      //ownProps.history.push(`/oops`);
    }
  };
};
export const addNewView = (videoId, brand, platform, user) => {
  const viewDetails = {
    videoId: videoId,
    brand: brand,
    platform: platform,
    dateViewed: Date.now(),
    user: user
  };
  const newKey = firebase
    .database()
    .ref('views')
    .push().key;
  firebase
    .database()
    .ref('views')
    .child(newKey)
    .set(viewDetails);
  //return the new view
  //callupdate videoviews
  //pass ti the video id and new view
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
  videoList: []
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_VIDEO:
      return { ...state, stockList: action.video };
    case GOT_VIDEO:
      return {
        ...state,
        currentVideo: [...state.currentVideo, action.video]
      };
    case GOT_VIDEO_VIEWS:
      return {
        ...state,
        currentVideo: [...state.currentVideo, action.video]
      };
    case GOT_KEYTERM_LIST:
      return {
        ...state,
        currentVideoList: [...state.currentVideo, action.video]
      };

    default:
      return state;
  }
};

export default videosReducer;
