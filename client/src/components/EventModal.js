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
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        console.log("we are changing the radio " + event.target.value);
        setValue(event.target.value);
        console.log(value);
    };
    const {v, open, close} = props;

    async function submit() {
        console.log('we are submitting the event');
        const token = window.localStorage.getItem("userToken");
        const title = document.getElementById("eventTitle").value;
        const day = document.getElementById("eventDay").value;
        const start = document.getElementById("eventStart").value;
        const end = document.getElementById("eventEnd").value;
        const type = value;
        const desc = document.getElementById("eventDescription").value;

        const data = {
            'token': token,
            'userId': localStorage.getItem("userId"),
            'eventTitle': title,
            'eventDay': day,
            'eventStartTime': start,
            'eventEndTime': end,
            'eventType': type,
            'description': desc
        }
        console.log(data, JSON.stringify(data));

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const res = await fetch('https://apple-surprise-39339.herokuapp.com/event', options);
        const resdata = await res.json();
        console.log(resdata);
        window.localStorage.setItem("eventId", resdata);

        const data2 = {
            'token': token,
            'userId': localStorage.getItem("userId"),
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
        fetch('https://apple-surprise-39339.herokuapp.com/timetable/addEvent', options2);
        console.log(v);
        alert("Please wait at least one minute for your data to appear. Please note that your data is rendered below the timetable.");
        setTimeout(v, 10000);
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
                label="Day (Monday - Sunday : 1 - 7)"
                type="email"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="eventStart"
                label="Start time (0 - 23, integers only)"
                type="email"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="eventEnd"
                label="End time (0 - 23, integers only)"
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
        <RadioGroup row aria-label="position" name="position" value={value} onChange={handleChange}>
            <FormControlLabel
            value='0'
            control={<Radio color="primary" />}
            label="Study"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value='1'
            control={<Radio color="primary" />}
            label="Work"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value='2'
            control={<Radio color="primary" />}
            label="Leisure"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value='3'
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