
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACE
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACES

const con = require('./database');

// function to generate token
function generateToken(length) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i < length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

exports.authLogin = function(authName, authPassword, callback) {
    console.log('auth login');
    const namePassword = `SELECT name, password FROM users WHERE name = "${authName}"`;

    con.query(namePassword, function (err, res) {
        console.log(namePassword);
        if (err) throw err;
        let result = JSON.parse(JSON.stringify(res[0]));
        console.log(res)
        console.log(result);
        if (result['password'] !== authPassword) {
            console.log('Incorrect password');
            return;
        } else {
            return callback(generateToken(32));
        }        
    });
};

exports.authRegister = function(authName, authPassword) {
    console.log('auth register');

    // usernames must be unique
    let sqlFind = `SELECT COUNT(name) FROM users WHERE name = "${authName}"`;
    con.query(sqlFind, function(err, res) {
        if (err) throw err;
        let names = JSON.parse(JSON.stringify(res[0]));
        console.log(names['COUNT(name)']);
        if (names['COUNT(name)'] !== 0) {
            console.log('username already taken');
            return;
        }
    });

    let sqlInsert = `INSERT INTO users (name, password) VALUES ("${authName}", "${authPassword}")`;
    console.log(sqlInsert);
    con.query(sqlInsert, function (err, res) {
        if (err) throw err;
        console.log(res)
    });

};

exports.authLogout = function(userId) {
    // console.log('auth logout');
};
