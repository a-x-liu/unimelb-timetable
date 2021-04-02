let database = require('./database.js');

let users = database.users;
let timetables = database.users;
let events = database.users;
let user = database.user;
let timetable = database.timetable;
let event = database.event;

exports.authLogin = function(authName, authPassword) {
    console.log('auth login');
};

exports.authRegister = function(authName, authPassword) {
    console.log('auth register');
};

exports.authLogout = function(userId) {
    console.log('auth logout');
};
