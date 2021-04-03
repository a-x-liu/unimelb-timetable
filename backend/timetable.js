const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;
let generateId = helpers.generateId;

exports.timetableCreate = function(token, userId, timetableTitle, callback) {
    // console.log('timetable create');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            let timetableId = generateId(8);
            let sqlTimetable = `INSERT INTO timetables (timetable_id, title) VALUES ("${timetableId}", "${timetableTitle}")`
            con.query(sqlTimetable, function(err, res) {
                if (err) throw err;
                return callback(timetableId);
            })
        }
    });
};  

exports.timetableInfo = function(token, userId, timetableId, callback) {
    // console.log('timetable info');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            let sqlTimetableInfo = `SELECT * FROM timetables WHERE timetable_id = "${timetableId}"`;
            con.query(sqlTimetableInfo, function(err, res) {
                if (err) throw err;
                let result = JSON.parse(JSON.stringify(res[0]));
                console.log(result);
                return callback(result.title, result.event_id);
            })
        }
    });

};

exports.timetableUpdate = function(token, userId, timetableId, newTitle) {
    // console.log('timetable update');
};

exports.timetableDelete = function(token, userId, userID, timetableId) {
    // console.log('timetable delete');
};

exports.timetableAddEvent = function(token, userId, timetableId, eventId) {
    // console.log('timetable add event');
};

exports.timetableDeleteEvent = function(token, timetableId, eventId) {
    // console.log('timetable delete event');
};