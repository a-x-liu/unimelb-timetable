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
                return callback(eventId);
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
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            if (eventTitle) {
                let sqlTitleUpdate = `UPDATE events SET title = "${eventTitle}" WHERE event_id = "${eventId}";`;
                con.query(sqlTitleUpdate, function(err, res) {
                    if (err) throw err;
                })
            }

            if (eventDay) {
                let sqlDayUpdate = `UPDATE events SET day = "${eventDay}" WHERE event_id = "${eventId}";`;
                con.query(sqlDayUpdate, function(err, res) {
                    if (err) throw err;
                })
            }
            if (eventStartTime) {
                let sqlStartUpdate = `UPDATE events SET time_start = "${eventStartTime}" WHERE event_id = "${eventId}";`;
                con.query(sqlStartUpdate, function(err, res) {
                    if (err) throw err;
                })
            }
            if (eventEndTime) {
                let sqlEndUpdate = `UPDATE events SET time_end = "${eventEndTime}" WHERE event_id = "${eventId}";`;
                con.query(sqlEndUpdate, function(err, res) {
                    if (err) throw err;
                })
            }
            if (eventType) {
                let sqlTypeUpdate = `UPDATE events SET type = "${eventType}" WHERE event_id = "${eventId}";`;
                con.query(sqlTypeUpdate, function(err, res) {
                    if (err) throw err;
                })
            }
            if (eventDescription) {
                let sqlDescriptionUpdate = `UPDATE events SET description = "${eventDescription}" WHERE event_id = "${eventId}";`;
                con.query(sqlDescriptionUpdate, function(err, res) {
                    if (err) throw err;
                })
            }
        }
    });
};

exports.eventDelete = function(token, userId, eventId) {
    // console.log('event delete');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            const sqlDeleteEvents = `DELETE FROM events WHERE event_id = "${eventId}"`;
            con.query(sqlDeleteEvents, function(err, res) {
                if (err) throw err;
            });
        }
    });
};