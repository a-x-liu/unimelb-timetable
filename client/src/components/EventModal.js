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
        const token = window.localStorage.getItem("userToken");
        



    }

    return (
            <Dialog open={v} onClose={close} aria-labelledby="form-dialog-title">
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
            value="Study"
            control={<Radio color="primary" />}
            label="Study"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value="Work"
            control={<Radio color="primary" />}
            label="Work"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value="Leisure"
            control={<Radio color="primary" />}
            label="Leisure"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value="Other"
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