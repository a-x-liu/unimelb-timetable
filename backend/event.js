let database = require('./database.js');

let users = database.users;
let timetables = database.users;
let events = database.users;
let user = database.user;
let timetable = database.timetable;
let event = databse.event;

exports.eventCreate = function(eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    console.log('event create');
};

exports.eventInfo = function(eventId) {
    console.log('event info');
};

exports.eventUpdate = function(eventId, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    console.log('event update');
};

exports.eventDelete = function(eventId) {
    console.log('event delete');
};