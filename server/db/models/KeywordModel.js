const Sequelize = require('sequelize');
const db = require('../db');

const Keyword = db.define('keyword', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    //array of one of these values
    allowNull: false
  },
  storageReference: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pimaryVideoCategory: {
    type: Sequelize.STRING,
    allowNull: false
  },
  keywords: {
    type: Sequelize.STRING,
    allowNull: false
  },
  PublishedDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  TotalViews: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ViewHistory: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//add a method for calculating the views by date range
//other properties :
//runtime,
//CurrentlyFeatured: platform name, date range
//alternateURI

module.exports = Keyword;
