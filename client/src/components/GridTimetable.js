import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './EventModal';
import Event from './Event';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    timetableBox: {
        position: 'absolute',
        width: '80%',
        height: '65%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        marginLeft: '5vh',
        border: 'none'
    },
    row: {
        display: 'flex',
        backgroundColor: '#f2f5f0',
        height:'50px',
        borderBottom: 'groove',
        
    },
    cells: {
        display: 'flex',
        width: '200px',
        backgroundColor: '#f2f5f0',
        borderRight: 'groove',
        borderWidth: '1px',
        alignItems: 'flex-start',
        textAlign: 'right',
        paddingLeft: '5vh'
        //maybe set a minwidth here
    },
    label: {
        width: '100px',
        userSelect: 'none',
        borderRight: 'groove'
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));

function Label (props) {
    const { title } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <div className={classes.label}>
            {title}
        </div>
    );
}

function Cell (props) {
    const classes = useStyles();
    const { day, time, eventState, updateState } = props;
    const [colour, setBackground] = React.useState('#f2f5f0');
    const [togglestate, setState] = React.useState(false);

    function inside () {
        setBackground('#D3EAFF');
    }

    function outside () {
        setBackground('#f2f5f0');
    }

    const background = {
        backgroundColor: colour
    }

    function handleDragStart () {
        console.log("day: " + day + " time: " + time);
    }

    function handleDragEnd () {
        console.log("day: " + day + " time: " + time);
        showModal();
    }

    const showModal = () => {
        setState(true);
    };

    const hideModal = () => {
        //we have to collect the data here and check that everything is g
        //if it is g we should update the state of the events
        const title = document.getElementById('eventTitle').value;
        const start = document.getElementById('eventStart').value;
        const end = document.getElementById('eventEnd').value;
        const des = document.getElementById('eventDescription').value;
        console.log(title, start, end, des);

        setState(false);
    };

    return (
        <div 
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseEnter={inside}
        onMouseLeave={outside}
        style={background}
        time={time} day={day} className={classes.cells}
        id={day + "-" + time}>
        <Modal open={showModal} close={hideModal} v={togglestate}/>
        </div>
    );
}

function Row (props) {
    const classes = useStyles();
    const { time, eventState, addEvent } = props;

    return (
        <div>
            <div 
            time={time} className={classes.row}>
                <Label title={time}/>
                <Cell time={time} day={1} eventState={eventState} updateState={addEvent}/>
                <Cell time={time} day={2} eventState={eventState} updateState={addEvent}/>
                <Cell time={time} day={3} eventState={eventState} updateState={addEvent}/>
                <Cell time={time} day={4} eventState={eventState} updateState={addEvent}/>
                <Cell time={time} day={5} eventState={eventState} updateState={addEvent}/>
                <Cell time={time} day={6} eventState={eventState} updateState={addEvent}/>
                <Cell time={time} day={7} eventState={eventState} updateState={addEvent}/>
            </div>
        </div>
    );
}

function LabelRow () {
    const classes = useStyles();
    return (
        <div time={''} className={classes.row} style={{userSelect: 'none'}}>
            <Label title={''}/>
            <DayCell day={'Monday'} />
            <DayCell day={'Tuesday'} />
            <DayCell day={'Wednesday'} />
            <DayCell day={'Thursday'} />
            <DayCell day={'Friday'} />
            <DayCell day={'Saturday'} />
            <DayCell day={'Sunday'} />
        </div>
    );
}

function DayCell (props) {
    const { day } = props;
    const classes = useStyles();
    return (
        <div className={classes.cells}>
            {day}
        </div>
    );
}

function TimeCells (props) {
    const { eventState, addEvent } = props;

    return (
        <div>
            <Row time={0} eventState={eventState} updateState={addEvent}></Row>
            <Row time={1} eventState={eventState} updateState={addEvent}></Row>
            <Row time={2} eventState={eventState} updateState={addEvent}></Row>
            <Row time={3} eventState={eventState} updateState={addEvent}></Row>
            <Row time={4} eventState={eventState} updateState={addEvent}></Row>
            <Row time={5} eventState={eventState} updateState={addEvent}></Row>
            <Row time={6} eventState={eventState} updateState={addEvent}></Row>
            <Row time={7} eventState={eventState} updateState={addEvent}></Row>
            <Row time={8} eventState={eventState} updateState={addEvent}></Row>
            <Row time={9} eventState={eventState} updateState={addEvent}></Row>
            <Row time={10} eventState={eventState} updateState={addEvent}></Row>
            <Row time={11} eventState={eventState} updateState={addEvent}></Row>
            <Row time={12} eventState={eventState} updateState={addEvent}></Row>
            <Row time={13} eventState={eventState} updateState={addEvent}></Row>
            <Row time={14} eventState={eventState} updateState={addEvent}></Row>
            <Row time={15} eventState={eventState} updateState={addEvent}></Row>
            <Row time={16} eventState={eventState} updateState={addEvent}></Row>
            <Row time={17} eventState={eventState} updateState={addEvent}></Row>
            <Row time={18} eventState={eventState} updateState={addEvent}></Row>
            <Row time={19} eventState={eventState} updateState={addEvent}></Row>
            <Row time={20} eventState={eventState} updateState={addEvent}></Row>
            <Row time={21} eventState={eventState} updateState={addEvent}></Row>
            <Row time={22} eventState={eventState} updateState={addEvent}></Row>
            <Row time={23} eventState={eventState} updateState={addEvent}></Row>

        </div>
    );
}


export default function () {
    const classes = useStyles();
    const[eventState, setEventState] = React.useState([]);

    async function load () {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        console.log("passing in:" + localStorage.getItem('userToken'));

        const res = await fetch('http://localhost:5000/timetable?token=' + localStorage.getItem('userToken') +"&userId="+ 1 + "&timetableId=" + 38428304, options);
        const data = await res.json();
        console.log(data);
        setEventState(data);
    }

    React.useEffect(() => {
        load();
    }, []);

    function addEvent ()    {
        //we should fetch the information here
        setEventState(); // the fetched data should go here
    }

    return (
        <div className={classes.timetableBox}>
            { eventState.map((eventState) =>
                <Event key={eventState.id} id={eventState.id} title={eventState.title} day={eventState.day} start={eventState.start} end={eventState.end} description={eventState.description} type={eventState.type}/>
            )}
            <LabelRow eventState={eventState} updateState={addEvent}></LabelRow>
            <TimeCells></TimeCells>
        </div>
    );
}