const Video = require('./VideoModel');
const Keyword = require('./KeywordModel');

//relations
//brand
//publishedDate
//keywords

//this would mean a keyword table
//keyword -- videoes , number of views, brand

//brand would have videos, number of views,

//only necesarry if you want other response/reques types than the three listed

//can just filter too

module.exports = {
  Video,
  Keyword
};
