const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;

exports.userProfile = function(token, userId) {
    // console.log('user profile');
};

exports.userUpdate = function(token, userId, userName, userPassword, userSrc) {
    // console.log('user update');
};

exports.userChartPercentTime = function(token, userId, timetableId) {
    // console.log('user chart percent');
};

exports.userChartTotalTime = function(token, userId, timetableId) {
    // console.log('user chart total');
};