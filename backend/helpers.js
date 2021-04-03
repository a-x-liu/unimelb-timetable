
exports.tokenCheck = function tokenCheck(token, con, id, callback) {
    const sqlGetToken = `SELECT user_token FROM users WHERE user_id = "${id}"`;
    con.query(sqlGetToken, function(err, res) {
        if (err) throw err;
        console.log('data token' + res[0].user_token);
        console.log('pass through token' + token);
        console.log(typeof(res[0].user_token));
        console.log(typeof(token));
        if (res[0].user_token !== token) {
            console.log('Invalid Token');
            return callback(false);
        } else {
            return callback(true);
        }
    });
}
