import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';


export default function (props) {
    
    const {v, open, close} = props;

    async function submit() {
        console.log('we are submitting the event');
        const token = window.localStorage.getItem("userToken");
        const title = document.getElementById("eventTitle").value;
        const day = document.getElementById("eventDay").value;
        const start = document.getElementById("eventStart").value;
        const end = document.getElementById("eventEnd").value;
        const type = document.getElementsByName("position")[0].value;
        const desc = document.getElementById("eventDescription").value;

        const data = {
            'token': token,
            'userId': 1,
            'eventTitle': title,
            'eventDay': day,
            'eventStartTime': start,
            'eventEndTime': end,
            'eventType': 1,
            'description': desc
        }
        console.log(data, JSON.stringify(data));

        // const data = {
        //     'token': token,
        //     'userId': 1,
        //     'eventTitle': "NEW EVENT PLEASE WORK",
        //     'eventDay': 3,
        //     'eventStart': 4,
        //     'eventEnd': 5,
        //     'eventType': "Study",
        //     'eventDescription': "PLEASENOSKUNKERY"
        // }

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const res = await fetch('http://localhost:5000/event', options);
        const resdata = await res.json();
        console.log(resdata);
        window.localStorage.setItem("eventId", resdata);

        const data2 = {
            'token': token,
            'userId': 1,
            'timetableId': window.localStorage.getItem('timetableId'),
            'eventId': window.localStorage.getItem("eventId"),
        }

        console.log( window.localStorage.getItem("timetableId"), window.localStorage.getItem("eventId"));

        const options2 = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        }
        fetch('http://localhost:5000/timetable/addEvent', options2);
        console.log(v);
        setTimeout(v, 50000);
        close();
    }

    return (
            <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a New Event</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="eventTitle"
                label="Title"
                type="email"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="eventDay"
                label="Day"
                type="email"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="eventStart"
                label="Start time"
                type="email"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="eventEnd"
                label="End time"
                type="email"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="eventDescription"
                label="Description"
                type="email"
                fullWidth
                />
                <div>
                <FormControl component="fieldset">
        <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
            value={0}
            control={<Radio color="primary" />}
            label="Study"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value={1}
            control={<Radio color="primary" />}
            label="Work"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value={2}
            control={<Radio color="primary" />}
            label="Leisure"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value={3}
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="bottom"
            />
        </RadioGroup>
        </FormControl>
        </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={close} variant="contained" color="secondary">
                Cancel
            </Button>

            <Button onClick={submit} variant="contained" color="primary">
                Create Timetable
            </Button>
            </DialogActions>
        </Dialog>
    );
}