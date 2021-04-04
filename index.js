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
let userChartPercentTime = userFunctions.userChartPercentTime;
let userChartTotalTime = userFunctions.userChartTotalTime;

let timetableFunctions = require('./backend/timetable');
let timetableCreate = timetableFunctions.timetableCreate;
let timetableInfo = timetableFunctions.timetableInfo;
let timetableUpdate = timetableFunctions.timetableUpdate;
let timetableDelete = timetableFunctions.timetableDelete;
let timetableAddEvent = timetableFunctions.timetableAddEvent;
let timetableDeleteEvent = timetableFunctions.timetableDeleteEvent;

let eventFunctions = require('./backend/event');
let eventCreate = eventFunctions.eventCreate;
let eventInfo = eventFunctions.eventInfo;
let eventUpdate = eventFunctions.eventUpdate;
let eventDelete = eventFunctions.eventDelete;

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

// auth functions
app.post('/auth/login', (req, res) => {
  let token;
  authLogin(req.body.username, req.body.password, async function(result) {
    token = result;
    res.json(token);
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

// timetable functions
app.post('/timetable', (req, res) => {
  timetableCreate(req.body.token, req.body.userId, req.body.timetableTitle, async function(result) {
    res.json(result);
  });
});

app.get('/timetable', (req, res) => {
  // console.log(req);
  timetableInfo(req.query.token, req.query.userId, req.query.timetableId, async function(result) {
    res.json(result);
  });
});


// event functions
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


// user functions
app.get('/user', (req,res) => {
  userProfile(req.query.token, req.query.userId, async function(result) {
    res.json(result);
  })
})

// authRegister('second', 'second');
// authLogin('second', 'second');
// userProfile('FXRdZLMEt7ljPtVDjLWIBn76NWFfZXpG', '2)');
// timetableCreate('KhORiIVOo7nucPpnLLpfZhFtA7BK2Xle', '1', 'testTimetable');


// user functions
// userProfile();
// userUpdate();
// userChartPercentTime();
// userChartTotalTime();


// timetable functions
// timetableCreate();
// timetableInfo();
// timetableUpdate();
// timetableDelete();
// timetableAddEvent();
// timetableDeleteEvent();


// event functions
// eventCreate();
// eventInfo();
// eventUpdate();
// eventDelete();











const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);