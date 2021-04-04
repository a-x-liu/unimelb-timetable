import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    event: {
        position: 'absolute',
        zIndex: '1000',
        borderStyle: 'groove',
        borderRadius: '10px',
        borderWidth: '1px',
        backgroundColor: '#E6D7F0',


        height: '300px',
        width: '200px',
        // marginLeft: '100px',
        // marginTop: '100px',

    },
    eventHeader: {
        borderBottom: 'groove',
        borderWidth: '1px'
    }, 
    eventTitle: {

    }
}));

export default function (props) {
    const classes = useStyles();
    const {id, title, day, start, end, description, type} = props

    const [dimensions, setDimensions] = React.useState({ 
    });

    function handleResize () {
        console.log(day+"-"+start, document.getElementById(day+"-"+start).clientWidth, "translate(" + document.getElementById(day+"-"+start).offsetLeft + "px, " + document.getElementById(day+"-"+start).offsetTop + "px)");
        setDimensions({
            transform: "translate(" + document.getElementById(day+"-"+start).offsetLeft + "px, " + document.getElementById(day+"-"+start).offsetTop + "px)",
            width: document.getElementById(day+"-"+start).clientWidth,
            height: (document.getElementById(day+"-"+start).clientHeight * (end - start)) + (end - start) + "px",
        });
        console.log(dimensions);
    }

    React.useEffect(() => {
        console.log('we are entering use effect')
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
        

    return (
        <div id={id} className={classes.event} style={dimensions}>
            <div className={classes.eventHeader}>
                <h5>{title}</h5>
                <p>{day}: {start} - {end}</p>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
            <div>{description}</div>
        </div>
    );
}