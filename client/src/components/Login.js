import React from 'react';
import '../App.css';
import Wave from 'react-wavify';
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

export default function () {
    return (
        <div> 
            <div id="banner">
                <span class="menuButton">Profile</span>
                <span>My Timetables</span>
                <span>About us</span>
                <span>Logout</span>

            </div>
        </div>
    );   
}