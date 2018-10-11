import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import blue from '@material-ui/core/colors/blue';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

class PopupHistoryProject extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    open={true}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                    <DialogContent>
                        <List>
                            {emails.map(email => (
                                <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            <PersonIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={email} />
                                </ListItem>
                            ))}
                            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="add account" />
                            </ListItem>
                        </List>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PopupHistoryProject)