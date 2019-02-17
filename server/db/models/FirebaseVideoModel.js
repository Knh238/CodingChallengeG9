import firebase from 'db/firebase';

export const writeNewVideo = (name, brand, uri, category) => {
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

  firebase
    .database()
    .ref('videos')
    .child(newKey)
    .set(videoDetails);
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

export const updateVideoViews = (videoId, newView) => {
  firebase
    .database()
    .ref('videos' + videoId)
    .update({ views: views++, viewHistory: viewHistory.push(newView) });
  //views could also just be the length of the viewhistory array.
  //might have to be a transaction
  //
  //   views plus one -increment
  //   add view to view history-push
};

// video model
// const videoDetails = {
//     name: 'titleSetBYYou',
//     brand: '',
//     storageRef: '',
//     primaryVideoCategory: '',
//     keywords: [],
//     publishedDate: Date.now(),
//     totalViews: 0,
//     viewHistory: []
//   };

//   view model
//   const viewDetails = {
//     videoId: '',
//     brand: '',
//     platform: '',
//     dateViewed: Date.now(),
//     user: ''
//   };
