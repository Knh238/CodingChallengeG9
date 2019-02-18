var firebase = require('firebase');
var config = require('./FBConfig');

export const mobileApp = firebase.initializeApp(config);

export default firebase;
