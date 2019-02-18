// import firebase from 'firebase'
// import firebase from 'firebase/app';
var firebase = require('firebase');
const config = require('../FBConfig');

// const test = () => {
//   console.log('config is ', config);
// };
// test();

firebase.initializeApp(config);

export default firebase;
