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
import {
    VictoryChart,
    VictoryAxis,
    VictoryBar,
    VictoryStack,
    VictoryPie,
    VictoryTheme   
} from 'victory';



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
  
export default function () {
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
        <div>
           <div className={classes.root}>
    
                <AppBar position="static">
                    <Toolbar>
                    <Link to="/login" style={{ color: 'black', textDecoration: 'none', flex:1 }}>
                        <Typography variant="h6" className={classes.title}>
                            Prolvan Timetabling
                        </Typography>
                    </Link>
                    <Button variant="h9" className={classes.title} style={{ maxWidth: '150px' }}>
                        <span className="menuElement">My Timetables</span>
                    </Button>
                    <Button variant="h9" className={classes.title} style={{ maxWidth: '150px' }}>
                        <span className="menuElement">About us</span>
                    </Button>

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
                            <Link to="/profile" style={{ textDecoration: 'none', color:'black' }} >
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
             </div>
            
            <div id="profileName">
                <span id="profilePic"></span> 
                <h1 id="username">Jin</h1>
            </div>
            
            <div id="statistics">  
                <div id="pieGraph" className="graphs">
                    <h3 className="graphTitle">Time Distribution</h3>
                    <VictoryPie
                        data={[
                            { x: "Cats", y: 35 },
                            { x: "Dogs", y: 40 },
                            { x: "Birds", y: 55 }
                        ]}
                        colorScale={["gold", "cyan", "navy"]}

                    />
                </div>
                <div id="barGraph" className="graphs">
                    <h3 className="graphTitle">Total Hours Spent</h3>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                    >
                        <VictoryBar
                            // style={{ data: { fill: "#c43a31" } }}
                            data={[
                                { experiment: "trial 1", expected: 3.75, actual: 3.21 },
                                { experiment: "trial 2", expected: 3.75, actual: 3.38 },
                                { experiment: "trial 3", expected: 3.75, actual: 2.05 },
                                { experiment: "trial 4", expected: 3.75, actual: 3.71 }
                            ]}
                            x="experiment"
                            y={(d) => (d.actual / d.expected) * 100}
                        />
                        <VictoryAxis
                            label="experiment"
                            style={{
                            axisLabel: { padding: 30 }
                            }}
                        />
                        <VictoryAxis dependentAxis
                            label="percent yield"
                            style={{
                            axisLabel: { padding: 40 }
                            }}
                        />
                    </VictoryChart>
                </div>         
            </div>
        </div>
    );
}