// function to check if tokens match
exports.tokenCheck = function tokenCheck(token, con, id, callback) {
    const sqlGetToken = `SELECT user_token FROM users WHERE user_id = "${id}"`;
    con.query(sqlGetToken, function(err, res) {
        if (err) throw err;
        console.log(res);
        let result = JSON.parse(JSON.stringify(res[0]));
        console.log('data token ' + result.user_token);
        console.log('pass through token ' + token);
        if (result.user_token !== token) {
            console.log('Invalid Token');
            return callback(false);
        } else {
            return callback(true);
        }
    });
}

// function to generate token
exports.generateToken = function generateToken(length) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i < length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

// function to generate random id
exports.generateId = function generateId(length) {
    var a = "1234567890".split("");
    var b = [];  
    for (var i=0; i < length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}