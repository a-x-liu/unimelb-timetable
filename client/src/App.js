import React from 'react';
import './App.css';
import Register from './components/Register';
import Profile from './components/Profile';
import Timetables from './components/Timetables';
import About from './components/About';
import LogoBlue from './assets/LogoBlue.png';
import { AnimatePresence,  motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
  }

  return (
    <motion.div id="container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div id="info"> 
      
        <h2> Prolvan Timetabling</h2>
        <div> This is a timetabling service brought to you by Prolvan and co!</div>
      </div>
      <div className="loginPage">
        <h2>Login</h2>
        <form onSubmit={submitLogin}>
          <TextField id="loginUsername" label="Username" variant="outlined" style={username}/>
          <TextField id="loginPassword" label="Password" variant="outlined" type="password" style={password} />
          <div className="loginButton">
            <Link to="/timetables" style={{ textDecoration: 'none' }}>
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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/timetables">
          <Timetables />
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