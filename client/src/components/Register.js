import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wave from 'react-wavify';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
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
    const history = useHistory();

    async function submitRego (e) {
        e.preventDefault();
    
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
    
        console.log(username, password);
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
     
        const res = await fetch('http://localhost:5000/auth/register', options);
        const resdata = await res.json();
        history.push('/login');
    }

    return (
        <div>
            <div id="RegisterPage">
                <h2 id="RegisterTitle">Register here!</h2>
                <form onSubmit={submitRego}>
                    <TextField id="registerUsername" label="Username" variant="outlined" style={username}/>
                    <TextField id="registerPassword" label="Password" variant="outlined" type="password" style={password} />
                    <TextField id="registerConfirmPassword" label="Comfirm Password" variant="outlined" type="password" style={confirmPassword} />
                    <div className="loginButton">
                        
                    <Button variant="contained" color="primary" type='submit'>
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
        </div>  
    );
}
