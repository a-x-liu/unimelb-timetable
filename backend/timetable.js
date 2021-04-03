const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;

exports.timetableCreate = function(token, userId, timetableTitle) {
    // console.log('timetable create');
};  

exports.timetableInfo = function(token, timetableId) {
    // console.log('timetable info');
};

exports.timetableUpdate = function(token, timetableId, newTitle) {
    // console.log('timetable update');
};

exports.timetableDelete = function(token, userID, timetableId) {
    // console.log('timetable delete');
};

exports.timetableAddEvent = function(token, timetableId, eventId) {
    // console.log('timetable add event');
};

exports.timetableDeleteEvent = function(token, timetableId, eventId) {
    // console.log('timetable delete event');
};