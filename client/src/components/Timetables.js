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
import LogoBlue from '../assets/LogoBlue.png';
import Slide from '@material-ui/core/Slide';
import { AnimatePresence,  motion } from "framer-motion";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Timetable from './GridTimetable';

const drawerWidth = 240;
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


 

  const useStyles2 = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));



  export default function MenuAppBar() {
    const classes = useStyles();
    const classes2 = useStyles2();
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
                    <Typography variant="h6" className={classes.title} style={{ fontWeight: "bold"}}>
                        Prolvan Timetabling
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

            <Drawer
              className={classes2.drawer}
              variant="permanent"
              classes={{
                paper: classes2.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes2.drawerContainer}>
                <List>
                  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
            <div id="timetable">
              <h1>Timetables</h1>            
              <p>These are your timetables!</p>
              <GridTimetable></GridTimetable>
            </div>
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