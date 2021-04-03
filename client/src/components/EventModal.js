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
            value="top"
            control={<Radio color="primary" />}
            label="Top"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Start"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value="bottom"
            control={<Radio color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
            />
            <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
            />
        </RadioGroup>
        </FormControl>
        </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={close} color="primary">
                Cancel
            </Button>
            <Button onClick={close} color="primary">
                Subscribe
            </Button>
            </DialogActions>
        </Dialog>
    );
}