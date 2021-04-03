const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;

exports.eventCreate = function(token, userId, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    // console.log('event create');
};

exports.eventInfo = function(token, userId, eventId) {
    // console.log('event info');
};

exports.eventUpdate = function(token, userId, eventId, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    // console.log('event update');
};

exports.eventDelete = function(token, userId, eventId) {
    // console.log('event delete');
};