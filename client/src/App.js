import React from 'react';
import './App.css';
import Register from './components/Register';

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

  const theme = makeStyles({
    root: {
      background: lightBlue,

    }
    
  });


  async function submitLogin (e) {
    console.log("we are submitting");
  }

  const classes = theme();
  return (
    <div id="wrapper">
      <div id="wave">
        <div>
          <div id="info"> 
            <h2> Prolvan Timetabling</h2>
            <div> This is a timetabling service brought to you by Prolvan and co!</div>
        </div>

          <div className="loginPage" id="section">
            <h2>Login</h2>
            <form onSubmit={submitLogin}>
              <TextField id="loginUsername" label="Username" variant="outlined" style={username}/>
              <TextField id="loginPassword" label="Password" variant="outlined" type="password" style={password} />
              <div className="loginButton">
                <Button variant="contained" color="primary"type="submit" className={classes.root}>
                  Login
                </Button>
                <Link to="/register">
                  <Button variant="contained" color="secondary">
                    Register
                  </Button>
                </Link>
              </div>
            </form>
          </div>
          <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                This is a success message!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
}

function App () {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <LoginSection />
        </Route>
        <Route path="/dashboard">
          <LoginSection />
        </Route>
        <Route path="/">
          <LoginSection />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;