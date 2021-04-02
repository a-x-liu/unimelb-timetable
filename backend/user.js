let database = require('./database.js');

let users = database.users;
let timetables = database.users;
let events = database.users;

exports.userProfile = function(userId) {
    console.log('user profile');
};

exports.userUpdate = function(userId, userName, userPassword, userSrc) {
    console.log('user update');
};

exports.userChartPercentTime = function(userId, timetableId) {
    console.log('user chart percent');
};

exports.userChartTotalTime = function(userId, timetableId) {
    console.log('user chart total');
};