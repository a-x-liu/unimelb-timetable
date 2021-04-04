const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;

exports.userProfile = function(token, userId, callback) {
    // console.log('user profile');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            let sqlUserProfile = `SELECT * FROM users WHERE user_id = "${userId}"`;
            con.query(sqlUserProfile, function(err, res) {
                if (err) throw err;
                let result = JSON.parse(JSON.stringify(res[0]));
                return callback(result.name, result.src);
            })
        }
    });
};

exports.userUpdate = function(token, userId, userName, userPassword, userSrc) {
    // console.log('user update');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            if (userName) {
                let sqlNameUpdate = `UPDATE users SET name = "${userName}" WHERE user_id = "${userId}";`;
                con.query(sqlNameUpdate, function(err, res) {
                    if (err) throw err;
                })
            }

            if (userPassword) {
                let sqlPasswordUpdate = `UPDATE users SET password = "${userPassword}" WHERE user_id = "${userId}";`;
                con.query(sqlPasswordUpdate, function(err, res) {
                    if (err) throw err;
                })
            }

            if (userSrc) {
                let sqlSrcUpdate = `UPDATE users SET src = "${userSrc}" WHERE user_id = "${userId}";`;
                con.query(sqlSrcUpdate, function(err, res) {
                    if (err) throw err;
                })
            }
        }
    });
};

exports.userTimetable = function(token, userId, callback) {
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            let sqlUserTimetableCount = `SELECT COUNT(timetable_id) FROM timetables WHERE user_id = "${userId}";`;
            console.log(sqlUserTimetableCount);
            con.query(sqlUserTimetableCount, function(err, res) {
                let count = JSON.parse(JSON.stringify(res[0]));
                if (count['COUNT(timetable_id)'] === 0) {
                    console.log('hi');
                    return callback(count['COUNT(timetable_id)']);
                } else {
                    let sqlUserTimetable = `SELECT timetable_id FROM timetables WHERE user_id = "${userId}"`;
                    con.query(sqlUserTimetable, function(err, res) {
                        if (err) throw err;
                        // console.log(res);
                        let result = JSON.parse(JSON.stringify(res[0]));
                        // console.log(result);
                        return callback(result.timetable_id);
                    })
                }
            });
        }
    });
};

