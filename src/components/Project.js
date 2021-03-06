import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 345
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function Project(props) {
    return (
        <Dialog
            open={true}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Project</DialogTitle>
            <DialogContent>
                <TextField
                    id="multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax="5"
                    placeholder="Description"
                />
                <br />
                <TextField
                    id="multiline-flexible"
                    label="Technology"
                    multiline
                    rowsMax="5"
                    placeholder="Technology"
                />
                <br />                
                <TextField
                    id="multiline-flexible"
                    label="Responsibility"
                    multiline
                    rowsMax="5"
                    placeholder="Responsibility"
                />
            </DialogContent>
            <DialogActions>
                <Button size="small">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /><path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </Button>
            </DialogActions>
        </Dialog>
    );
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);