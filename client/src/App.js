import React from 'react';
import './App.css';
import Register from './components/Register';
import Profile from './components/Profile';
import Timetables from './components/Timetables';
import About from './components/About';
import { AnimatePresence,  motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { lightBlue } from '@material-ui/core/colors';
import {  makeStyles } from'@material-ui/core/styles';
import Wave from 'react-wavify';

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function LoginSection () {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const username = {
    marginRight: '5px',
    width: '90%',
    marginBottom: '2.5%'
  }

  const password = {
    width: '90%',
    height: '120%'
  }


  async function submitLogin (e) {
    console.log("we are submitting");
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    console.log(username, password);
    window.localStorage.setItem("name", username);
    const data = {
      username: username,
      password: password
    }

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
 
    const res = await fetch('https://apple-surprise-39339.herokuapp.com/auth/login', options);
    const resdata = await res.json();
    console.log("hello there " + resdata);
    window.localStorage.setItem("userToken", resdata);

    const options3 = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
 
    const res3 = await fetch(`https://apple-surprise-39339.herokuapp.com/tokenToId?token=${localStorage.getItem("userToken")}`, options3);
    const resdata3 = await res3.json();
    window.localStorage.setItem("userId", resdata3);

    const options4 = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
 
    const res4 = await fetch(`https://apple-surprise-39339.herokuapp.com/user/timetable?token=${localStorage.getItem("userToken")}&userId=${localStorage.getItem("userId")}`, options4);
    const resdata4 = await res4.json();

    if (resdata4 == 0) {// we create new timetable
      const data2 = {
        'token': window.localStorage.getItem("userToken"),
        'userId': localStorage.getItem("userId"),
        'timetableTitle': 'Test',
        
      }
      const options2 = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
      }
      const res2 = await fetch('https://apple-surprise-39339.herokuapp.com/timetable', options2);
      const resdata2 = await res2.json();
      window.localStorage.setItem("timetableId", resdata2);
    } else { // we return an existing table
      window.localStorage.setItem("timetableId", resdata4);
    }
    
    //add error checks
    // setOpen(false);
    //if thing works we use the history to travel
    history.push('/timetables');
  }
  // async function test() {
  //   console.log('hi');
  //   const username = document.getElementById('loginUsername').value;
  //   const password = document.getElementById('loginPassword').value;
  //   const data = {
  //     username: username,
  //     password: password
  //   }
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }
  //   const res = await fetch('http://localhost:5000/auth/login', options);
  //   const resdata = await res.json();
  //   console.log("Token: ", resdata);
  // }
  
  return (
    <motion.div id="container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div id="info"> 
        <h2> Prolvan Timetabling</h2>
        <div> This is a timetabling service brought to you by Prolvan and co!</div>
      </div>
      <div className="loginPage">
        <h2>Login</h2>
        <form>
          <TextField id="loginUsername" label="Username" variant="outlined" style={username}/>
          <TextField id="loginPassword" label="Password" variant="outlined" type="password" style={password} />
          <div className="loginButton">

            <Link to="/timetables" style={{ textDecoration: 'none' }} onClick={submitLogin}>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <div id="wave">
        <Wave fill='#D3EAFF'
          paused={false}
          options={{
            position: 'fixed',
            bottom: '0px',
            height: 20,
            amplitude: 35,
            speed: 0.2,
            points: 4
          }}
        />
      </div>
    </motion.div>
  );
}

function App () {
  return (
    <div>
      <Router>
      <AnimatePresence>
      <Switch>
        <Route path="/timetables">
          <Timetables />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <LoginSection />
        </Route>
      </Switch>
      </AnimatePresence>
    </Router>
    </div>
  );
}

export default App;