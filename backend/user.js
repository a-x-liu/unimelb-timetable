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
                console.log(result);
                return callback(result.name, result.src);
            })
        }
    });
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