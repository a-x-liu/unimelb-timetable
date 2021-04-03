import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wave from 'react-wavify';
import { motion } from "framer-motion";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
  
const username = {
    marginRight: '5px',
    width: '95%',
    marginBottom: '2%'
  }

  const password = {
    width: '95%',
    height: '120%',
    marginBottom: '2%'
  }

  const confirmPassword = {
    width: '95%',
    height: '120%',
  }


export default function () {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div id="RegisterPage">
                <h2 id="RegisterTitle">Register here!</h2>
                <form>
                    <TextField id="registerUsername" label="Username" variant="outlined" style={username}/>
                    <TextField id="registerPassword" label="Password" variant="outlined" type="password" style={password} />
                    <TextField id="registerConfirmPassword" label="Comfirm Password" variant="outlined" type="password" style={confirmPassword} />
                    <div className="loginButton">
                        
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            Back
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
