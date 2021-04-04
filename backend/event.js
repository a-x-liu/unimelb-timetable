const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;
let generateId = helpers.generateId;

exports.eventCreate = function(token, userId, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription, callback) {
    // console.log('event create');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            let eventId = generateId(8);
            let sqlEvent = `INSERT INTO events (event_id, title, day, time_start, time_end, type, description) VALUES ("${eventId}", "${eventTitle}", "${eventDay}", "${eventStartTime}", "${eventEndTime}", "${eventType}", "${eventDescription}")`;
            con.query(sqlEvent, function(err, res) {
                if (err) throw err;
                // return callback(eventId);
            })
        }
    });
};

exports.eventInfo = function(token, userId, eventId, callback) {
    // console.log('event info');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            let sqlEventInfo = `SELECT * FROM events WHERE event_id = "${eventId}"`;
            con.query(sqlEventInfo, function(err, res) {
                if (err) throw err;
                let result = JSON.parse(JSON.stringify(res[0]));
                console.log(result);
                return callback(result.title, result.day, result.time_start, result.time_end, result.type, result.description);
            })
        }
    });
};

exports.eventUpdate = function(token, userId, eventId, eventTitle, eventDay, eventStartTime, eventEndTime, eventType, eventDescription) {
    // console.log('event update');
};

exports.eventDelete = function(token, userId, eventId) {
    // console.log('event delete');
};