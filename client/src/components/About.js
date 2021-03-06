import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { motion } from "framer-motion";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    abRoot: {
      flexGrow: 1,
      backgroundcolor: "red",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}> 
         <div className={classes.root}>
    
            <AppBar position="static" style={{boxShadow:'none'}}>
                <Toolbar>
                <Link to="/timetables" style={{ color: 'black', textDecoration: 'none', flex:1 }}>
                    <Typography variant="h6" className={classes.title} style={{ fontFamily: 'Manjari',fontWeight: "bold" }}>
                        Prolvan
                    </Typography>
                </Link>
                <Link to="/about" style={{ color: 'black', textDecoration: 'none'}}>
                  <Button variant="h9" className={classes.title} style={{ maxWidth: '150px' }}>
                      <span className="menuElement">About us</span>
                  </Button>
                </Link>
                {auth && (
                    <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="black"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link to="/profile" style={{ textDecoration: 'none', color:'black' }}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color:'red' }}>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Link>
                    </Menu>
                    
                    </div>
                )}
                </Toolbar>
            </AppBar>
            <div id="aboutDescription">
              <h1 id="aboutTitle">About Us</h1>            
              <p id="about">We are Prolvan Innovation, and our timetabling application was inspired by the issues we face while we work from home in this pandemic.</p>
            </div>
            
         </div>
    </motion.div>
  );
}