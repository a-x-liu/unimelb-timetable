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
import GridTimetable from './GridTimetable';
import Drawer from './Drawer'
import Slide from '@material-ui/core/Slide';
import { motion } from "framer-motion";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Timetable from './GridTimetable';
import { Grid } from '@material-ui/core';

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
    const [age, setAge] = React.useState('');
    const [drawerOpen, setdrawerOpen] = React.useState(false);
  
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
         <Drawer></Drawer>

            <h1>Timetables</h1>            
            <p>These are your timetables!</p>
            <GridTimetable></GridTimetable>
         </div>
         <Fab color="secondary" aria-label="add" id="addTableButton" 
                style={{
                margin: '50px',
                position:'absolute', 
                bottom: '0',
                right: '0'
                 }}
            >

            <AddIcon />
        </Fab>
    </motion.div>
  );
}