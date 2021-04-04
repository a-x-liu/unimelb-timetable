const express = require('express');
const cors = require('cors');
const path = require('path');

let authFunctions = require('./backend/auth');
let authLogin = authFunctions.authLogin;
let authRegister = authFunctions.authRegister;
let authLogout = authFunctions.authLogout;

let userFunctions = require('./backend/user');
let userProfile = userFunctions.userProfile;
let userUpdate = userFunctions.userUpdate;

let timetableFunctions = require('./backend/timetable');
let timetableCreate = timetableFunctions.timetableCreate;
let timetableInfo = timetableFunctions.timetableInfo;
let timetableUpdate = timetableFunctions.timetableUpdate;
let timetableDelete = timetableFunctions.timetableDelete;
let timetableAddEvent = timetableFunctions.timetableAddEvent;
let timetableEvents = timetableFunctions.timetableEvents;
let timetablePercentTime = timetableFunctions.timetablePercentTime;
let timetableTotalTime = timetableFunctions.timetableTotalTime;

let eventFunctions = require('./backend/event');
let eventCreate = eventFunctions.eventCreate;
let eventInfo = eventFunctions.eventInfo;
let eventUpdate = eventFunctions.eventUpdate;
let eventDelete = eventFunctions.eventDelete;

// let helperFunctions = require('./backend/helpers');
// let tokenToId = helperFunctions.convertTokenToId;

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/test', (req, res) => {
  res.json("hello im from the backend");
  const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
  }
  console.log("hello2");
  const jsonString = JSON.stringify(customer)
  console.log(jsonString);
  // fs.appendFile('./database.json', jsonString, err => {
  //     if (err) {
  //         console.log('Error writing file', err)
  //     } else {
  //         console.log('Successfully wrote file')
  //     }
  // });
});

// // helper function
// app.get('/tokenToId', (req, res) => {
//   tokenToId
// });

//////////////////////////////////
// auth functions
//////////////////////////////////
app.post('/auth/login', (req, res) => {
  authLogin(req.body.username, req.body.password, async function(result) {
    res.json(result);
  });
});

app.post('/auth/logout', (req, res) => {
  authLogout(req.body.token, req.body.userId);
});

app.post('/auth/register', (req, res) => {
  authRegister(req.body.username, req.body.password, async function(result) {
    res.json(result);
  });
});

//////////////////////////////////
// timetable functions
//////////////////////////////////

app.post('/timetable', (req, res) => {
  timetableCreate(req.body.token, req.body.userId, req.body.timetableTitle, async function(result) {
    res.json(result);
  });
});

app.get('/timetable', (req, res) => {
  // console.log(req);
  timetableInfo(req.query.token, req.query.userId, req.query.timetableId);
});

app.put('/timetable', (req, res) => {
  timetableUpdate(req.body.token, req.body.userId, req.body.timetableId, req.body.newTitle);
});

app.delete('/timetable', (req, res) => {
  timetableDelete(req.query.token, req.query.userId, req.query.timetableId);
});

app.post('/timetable/addEvent', (req, res) => {
  timetableAddEvent(req.body.token, req.body.userId, req.body.timetableId, req.body.eventId);
});

app.get('/timetable/events', (req, res) => {
  timetableEvents(req.query.token, req.query.userId, req.query.timetableId, async function (result) {
    res.json(result);
  });
});

app.get('/timetable/chart/percentTime', (req, res) => {
  timetablePercentTime(req.query.token, req.query.userId, req.query.timetableId, async function (result) {
    res.json(result);
  });
});

app.get('/timetable/chart/totalTime', (req,res) => {
  timetableTotalTime(req.query.token, req.query.userId, req.query.timetableId, async function (result) {
    res.json(result);
  });
});


//////////////////////////////////
// event functions
//////////////////////////////////
app.post('/event', (req, res) => {
  eventCreate(req.body.token, req.body.userId, req.body.eventTitle, req.body.eventDay, req.body.eventStartTime, req.body.eventEndTime, req.body.eventType, req.body.description, async function(result) {
    res.json(result);
  });
});

app.get('/event', (req, res) => {
  // console.log(req);
  eventInfo(req.query.token, req.query.userId, req.query.eventId, async function(result) {
    res.json(result);
  });
});

app.put('/event', (req, res) => {
  eventUpdate(req.body.token, req.body.userId, req.body.eventId, req.body.eventTitle, req.body.eventDay, req.body.eventStartTime, req.body.eventEndTime, req.body.eventType, req.body.eventDescription);
})

app.delete('/event', (req, res) => {
  eventDelete(req.query.token, req.query.userId, req.query.eventId);
})

//////////////////////////////////
// user functions
//////////////////////////////////
app.get('/user', (req,res) => {
  userProfile(req.query.token, req.query.userId, async function(result) {
    res.json(result);
  });
});

app.put('/user', (req, res) => {
  userUpdate(req.body.token, req.body.userId, req.body.userName, req.body.userPassword, req.body.src);
});

// authRegister('third', 'third');
// authLogin('third', 'third');
// authRegister('fifth', 'fifth');
// authLogin('fifth', 'fifth');
// timetableInfo('f9l6YIjWk8ZDTr0xEmzmYkgbwfZ8IYfi', '1', '38428304');
// userProfile('FXRdZLMEt7ljPtVDjLWIBn76NWFfZXpG', '2)');
// timetableCreate('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', 'WOWOWOW');
// eventCreate('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', 'event5', '2', '16', '22', '2', 'commerce');
// timetableAddEvent('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', '91679784', '55488246');
// timetableDelete('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', )
// userUpdate('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', null, 'newFifthpasstwo', 'newFifthSrctwo');
// timetableEvents('UgoIQ9dYpAiYlNQ2B3hZ3vb9j2N8VeLo', '1', '38428304');
// userChartTotalTime('gd3YIhQlJkETtW5PzxUlW6iLiVyMnVhd', '1', '38428304');

// timetableUpdate('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', '9318884', 'newTimetable');
// timetableDelete('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', '56045661');
// timetableDeleteEvent('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', '71636513');

// eventUpdate('2jZPNqCsGpZsJKo62Q423Sxnv6uTMhEJ', '6', '82548946', 'new Title', '4', '7', null, '1', 'new desc');









const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);