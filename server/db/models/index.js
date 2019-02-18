const Video = require('./VideoModel');
const Keyword = require('./KeywordModel');
const View = require('./ViewModel');
View.belongsTo(Video);
Video.hasMany(View, { as: 'viewId' });

// Video.hasMany(Keyword, { as: 'keywordId' });
// Video.hasMany(View, { as: "viewId" });
// Video.hasMany(View, { as: "viewHistory" });
// Student.belongsTo(Campus);
// Campus.hasMany(Student, { as: "campusId" });
module.exports = {
  Video,
  View,
  Keyword
};
