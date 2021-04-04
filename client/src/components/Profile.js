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
import Avatar from '@material-ui/core/Avatar';
import { AnimatePresence,  motion } from "framer-motion";
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
    const [dataInfo, setData] = React.useState([]);
    const [lineInfo, setLine] = React.useState([]);
    const open = Boolean(anchorEl);

    async function load2() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const res = await fetch('http://localhost:5000/timetable/chart/totalTime?token=' + localStorage.getItem('userToken') + '&timetableId=' + localStorage.getItem('timetableId') + "&userId=" + localStorage.getItem("userId"), options);
        const data = await res.json();
        setLine(data)
        console.log(data);
    }

    async function load() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const res = await fetch('http://localhost:5000/timetable/chart/percentTime?token=' + localStorage.getItem('userToken') + '&timetableId=' + localStorage.getItem('timetableId') + "&userId=" + localStorage.getItem("userId"), options);
        const data = await res.json();
        setData(data)

        console.log(data);
    }

    React.useEffect(async () => {
        load();
        load2();
    }, []);
  
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
                    <Link to="/timetables" style={{color: 'black', textDecoration: 'none', flex:1 }}>
                        <Typography variant="h6" className={classes.title} style={{ fontWeight: "bold", fontFamily: 'Manjari'}}>
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
            
            <div id="profileInfo">
                <Avatar alt={localStorage.getItem("name")} src="/static/images/avatar/1.jpg" style={{ alignSelf: 'center' }} />
                <h1 id="username">{localStorage.getItem("name")}</h1>
            </div>
            
            <div id="statistics">  
                <div id="pieGraph" className="graphs">
                    <h3 className="graphTitle">Time Distribution</h3>
                    <VictoryPie
                        data={[
                            { x: "Study", y: dataInfo[0] },
                            { x: "Work", y: dataInfo[1] },
                            { x: "Leisure", y: dataInfo[2] },
                            { x: "Other", y: dataInfo[3] }
                        ]}
                        colorScale={["#E2BEF1", "#C6F8E5", "#F9DED7", "#BAC1EC"]}
                    />
                </div>
                <div id="barGraph" className="graphs">
                    <h3 className="graphTitle">Total Hours Spent</h3>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                    >
                        <VictoryBar
                            style={{ data: { fill: "#FFB480" } }}
                            data={[
                                { types: "Study", time: lineInfo[0] },
                                { types: "Work", time: lineInfo[1] },
                                { types: "Leisure", time: lineInfo[2] },
                                { types: "Other", time: lineInfo[3] }
                            ]}
                            x= "types"
                            y={(d) =>d.time}
                        />
                        <VictoryAxis
                            
                            style={{
                            axisLabel: { padding: 30 }
                            }}
                        />
                        <VictoryAxis dependentAxis
                            
                            style={{
                            axisLabel: { padding: 40 }
                            }}
                        />
                    </VictoryChart>
                </div>         
            </div>
        </motion.div>
    );
}