import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
});

const menuItems = [
    { id: 'I1', text: 'Employees' },
    { id: 'I2', text: 'Projects' },
    { id: 'I3', text: 'Time journal' }
];

function ListItemComposition(props) {
    const { classes } = props;

    return (
        <Paper style={{ width: '80%' }}>
            {menuItems.map(item =>
                <MenuList key={item.id}>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            {/* <SendIcon /> */}
                            <div></div>
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary={item.text} />
                    </MenuItem>
                </MenuList>
            )}
        </Paper>
    );
}

ListItemComposition.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
