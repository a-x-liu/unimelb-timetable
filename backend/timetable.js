let database = require('./database.js');

let users = database.users;
let timetables = database.users;
let events = database.users;
let user = database.user;
let timetable = database.timetable;
let event = database.event;

exports.timetableCreate = function(userId, timetableTitle) {
    console.log('timetable create');
};  

exports.timetableInfo = function(timetableId) {
    console.log('timetable info');
};

exports.timetableUpdate = function(timetableId, newTitle) {
    console.log('timetable update');
};

exports.timetableDelete = function(userID, timetableId) {
    console.log('timetable delete');
};

exports.timetableAddEvent = function(timetableId, eventId) {
    console.log('timetable add event');
};

exports.timetableDeleteEvent = function(timetableId, eventId) {
    console.log('timetable delete event');
};