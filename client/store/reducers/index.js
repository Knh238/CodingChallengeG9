import {
  VIDEO_ADDED,
  VIEW_ADDED,
  GOT_VIDEO,
  GOT_VIEW_REPORT,
  GOT_ALL_VIDEOS,
  GOT_KEYTERM_LIST
} from '../actions';

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
