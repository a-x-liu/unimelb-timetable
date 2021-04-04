
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACES
// REMEMBER INPUTS CANNOT CONTAIN SPACES

const con = require('./database');
let helpers = require('./helpers');
let tokenCheck = helpers.tokenCheck;
let generateToken = helpers.generateToken;


exports.authLogin = function(authName, authPassword, callback) {
    // console.log('auth login');
    const namePassword = `SELECT name, password FROM users WHERE name = "${authName}"`;

    // checking same password
    con.query(namePassword, function (err, res) {
        // console.log(namePassword);
        if (err) throw err;
        console.log(res);
        let result = JSON.parse(JSON.stringify(res[0]));
        // passwords not matching
        if (result['password'] !== authPassword) {
            console.log('Incorrect password');
            return;
        }   
    });

    // inserting token into sql
    let token = generateToken(32);
    let sqlUpdate = `UPDATE users SET user_token = "${token}" WHERE name = "${authName}";`;
    console.log(sqlUpdate);
    con.query(sqlUpdate, function(err, res) {
        if (err) throw err;
        return callback(token);
    })
    
};

exports.authRegister = function(authName, authPassword, callback) {
    // console.log('auth register');

    // usernames must be unique
    let sqlCountName = `SELECT COUNT(name) FROM users WHERE name = "${authName}";`;
    con.query(sqlCountName, function(err, res) {
        if (err) throw err;
        console.log(res);
        let names = JSON.parse(JSON.stringify(res[0]));
        // console.log(names['COUNT(name)']);
        if (names['COUNT(name)'] !== 0) {
            console.log('username already taken');
            return;
        }
    });

    // finding how many users there are, id will be amount of current users + 1
    let sqlLength = `SELECT COUNT(*) FROM users`;
    con.query(sqlLength, function(err, res) {
        if (err) throw err;
        console.log(res);
        let users = JSON.parse(JSON.stringify(res[0]));
        // console.log(users['COUNT(*)']);
        let currAmount = users['COUNT(*)'];

        // inserting all the info to sql database
        let sqlInsert = `INSERT INTO users (user_id, name, password) VALUES ("${currAmount + 1}", "${authName}", "${authPassword}")`;
        console.log(sqlInsert);
        con.query(sqlInsert, function (err, res) {
            if (err) throw err;
            return callback(currAmount + 1);
        });
    });
};

exports.authLogout = function(token, userId) {
    // console.log('auth logout');
    tokenCheck(token, con, userId, async function(result) {
        if (!result) {
            console.log('Invalid token');
            return;
        } else {
            // deleting token from database
            let emptyToken = '';
            let sqlUpdate = `UPDATE users SET user_token = "${emptyToken}" WHERE user_id = "${userId}"`;
            console.log(sqlUpdate);
            con.query(sqlUpdate, function(err, res) {
                if (err) throw err;
            });
        }
    });
};
