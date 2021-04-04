import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    event: {

        borderStyle: 'solid',

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
    const {eventState, id, title, day, start, end, description, type, load} = props

    const [dimensions, setDimensions] = React.useState({
    });

    // function handleResize () {
    //     console.log(document.getElementById(day+"-"+start));
    //     console.log(day+"-"+start, document.getElementById(day+"-"+start), "translate(" + document.getElementById(day+"-"+start) + "px, " + document.getElementById(day+"-"+start) + "px)");
    //     setDimensions({
    //         transform: "translate(" + document.getElementById(day+"-"+start).offsetLeft + "px, " + document.getElementById(day+"-"+start).offsetTop + "px)",
    //         width: document.getElementById(day+"-"+start).clientWidth,
    //         height: (document.getElementById(day+"-"+start).clientHeight * (end - start)) + (end - start) + "px",
    //     });
    //     console.log(dimensions);
    // }
    

    // React.useEffect(() => {
    //     console.log('we are entering use event effect: ', id, title, day, start, end, description, type);
    //     console.log(document.getElementById(day+"-"+start));
    //     window.addEventListener('resize', handleResize);
    //     setTimeout(handleResize(), 10000);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);
        

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