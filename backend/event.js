const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;

exports.eventCreate = function(token, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    // console.log('event create');
};

exports.eventInfo = function(token, eventId) {
    // console.log('event info');
};

exports.eventUpdate = function(token, eventId, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    // console.log('event update');
};

exports.eventDelete = function(token, eventId) {
    // console.log('event delete');
};