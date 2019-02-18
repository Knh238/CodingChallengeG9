// const initialState = {
//     video: [],
//     videoList: []
//   };

//   const videosReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case VIDEO_ADDED:
//         return { ...state, stockList: action.video };
//       case GOT_VIDEO:
//         return {
//           ...state,
//           currentVideo: [...state.currentVideo, action.video]
//         };
//       case GOT_VIDEO_VIEWS:
//         return {
//           ...state,
//           currentVideo: [...state.currentVideo, action.video]
//         };
//       case GOT_KEYTERM_LIST:
//         return {
//           ...state,
//           currentVideoList: [...state.currentVideo, action.video]
//         };

//       default:
//         return state;
//     }
//   };

//   export default videosReducer;
