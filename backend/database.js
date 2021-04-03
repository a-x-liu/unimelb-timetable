// exports.users = [];
// exports.timetables = [];
// exports.events = [];

const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b0565d146d2ba7',
    password: 'bab97822',
    database: 'heroku_fdf10f503ea7419'
});