const Sequelize = require('sequelize');
const db = require('../db');

const Video = db.define('video', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.ENUM('NowThis', 'TheDodo', 'Thrillist', 'Seeker'),
    allowNull: false
  },
  storageReference: {
    type: Sequelize.STRING,
    allowNull: false
  },
  primaryVideoCategory: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keywords: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  },
  publishedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  totalViews: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  viewHistory: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
});

module.exports = Video;
// const videoDetails = {
//     name: 'titleSetBYYou',
//     brand: '',
//     storageReference: '',
//     primaryVideoCategory: '',
//     keywords: [],
//     publishedDate: Date.now(),
//     totalViews: 0,
//     viewHistory: []
//   };
// const Video = db.define('video', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   brand: {
//     type: Sequelize.ENUM('NowThis', 'TheDodo', 'Thrillist', 'Seeker'),
//     allowNull: false
//   },
//   storageReference: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   pimaryVideoCategory: {
//     type: Sequelize.STRING
//   },
//   keywords: {
//     type: Sequelize.ARRAY(Sequelize.TEXT)
//   },
//   publishedDate: {
//     type: Sequelize.DATE,
//     allowNull: false
//   },
//   totalViews: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0
//   },
//   viewHistory: {
//     type: Sequelize.ARRAY(Sequelize.TEXT),
//     defaultValue: []
//   }
// });
