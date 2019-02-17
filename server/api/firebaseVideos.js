const router = require('express').Router();
const { Video } = require('../db/models');
const { View } = require('../db/models');
import moment from 'moment';
import firebase from 'db/firebase';

module.exports = router;

// router.post('/', async (req, res, next) => {
//   const newKey = firebase
//     .database()
//     .ref('videos')
//     .push().key;
//   firebase
//     .database()
//     .ref('videos')
//     .child(newKey)
//     .set(req.body);
//   //   var docRef = await firebase.collection('users').doc(userID);

//   //   docRef
//   //     .get()
//   //     .then(function(doc) {
//   //       if (doc.exists) {
//   //         const profile = doc.data();
//   //         dispatch(profileFetched(profile));
//   //       } else {
//   //         const msg = 'No such user with that uid';
//   //         dispatch(profileNotFound(msg));
//   //       }
//   //     })
//   //     .catch(function(error) {
//   //       const msg2 = 'Error Retrieving User Document';
//   //       dispatch(profileNotFound(msg2));
//   //     });
// });

// router.post('/view/', async (req, res, next) => {
//   const newKey = firebase
//     .database()
//     .ref('views')
//     .push().key;
//   firebase
//     .database()
//     .ref('views')
//     .child(newKey)
//     .set(req.body);
//   //   var docRef = await firebase.collection('users').doc(userID);
// });
