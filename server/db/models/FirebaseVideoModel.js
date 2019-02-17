//alternatives to the sequelize

//different bc you have to create references on objects in order to create relations
//basically you give it a js or json like object
//
// const Sequelize = require('sequelize')
// const db = require('../db')

// const Video = db.define('video', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   brand: {
//     type: Sequelize.STRING,
//     //array of one of these values
//     allowNull: false
//   },
//   storageReference: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   pimaryVideoCategory: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   keywords: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   PublishedDate: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   TotalViews: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   ViewHistory: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// })

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }

// function writeNewPost(uid, username, picture, title, body) {
//     // A post entry.
//     var postData = {
//       author: username,
//       uid: uid,
//       body: body,
//       title: title,
//       starCount: 0,
//       authorPic: picture
//     };

//     // Get a key for a new Post.
//     var newPostKey = firebase.database().ref().child('posts').push().key;

//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//     return firebase.database().ref().update(updates);
//   }

//add a method for calculating the views by date range
//other properties :
//runtime,
//CurrentlyFeatured: platform name, date range
//alternateURI
