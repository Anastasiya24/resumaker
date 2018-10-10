import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserCard from './UserCard';
import Grid from '@material-ui/core/Grid';
import Logo from '../img/logo.png'

const menuItems = [
    {
        id: 'I1', text: 'Communal', items: [
            { id: 'P1', title: 'Employee' },
            { id: 'P2', title: 'OOO viewer' },
            { id: 'P3', title: 'Report' },
            { id: 'P4', title: 'Time approval' },
            { id: 'P5', title: 'Time journal' }
        ]
    },
    {
        id: 'I2', text: 'IT', items: [
            { id: 'P6', title: 'Events' },
            { id: 'P7', title: 'IT request' }
        ]
    },
    {
        id: 'I3', text: 'SMG2', items: [
            { id: 'P8', title: 'Builds' },
            { id: 'P9', title: 'Components' },
            { id: 'P10', title: 'Defects' },
            { id: 'P11', title: 'Documents' },
            { id: 'P12', title: 'Events' },
            { id: 'P13', title: 'Milestones' },
            { id: 'P14', title: 'Risks' },
            { id: 'P15', title: 'Tasks' },
            { id: 'P16', title: 'Time journal' }
        ]
    }
];

class Header extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
        console.log('ew:', event.currentTarget)
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    onClickToProfile = () => {
        this.props.history.push(`/employee/5`)
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div style={{ margin: 20 }}>
                <Grid container spacing={24}>
                    <Grid item xs={2}>
                        <img
                            src={Logo}
                            alt=''
                            style={{ width: 200, cursor: 'pointer' }}
                            onClick={() => this.props.history.push('/')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {menuItems.map(item =>
                            <div key={item.id} style={{ display: 'inline-block', margin: 10 }}>
                                <Button
                                    aria-owns={anchorEl ? `${item.id}` : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    {item.text}
                                </Button>
                                <Menu
                                    id={item.id}
                                    anchorEl={anchorEl}
                                    // (Nastya !!) ...Menu items
                                    open={anchorEl === `${item.id}` ? true : false}
                                    onClose={this.handleClose}
                                >
                                    {item.items.map(el =>
                                        <MenuItem key={el.id} onClick={this.handleClose}>
                                            {el.title}
                                        </MenuItem>
                                    )}
                                </Menu>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <UserCard
                            userName='Remarkable Person'
                            userRole="Developer"
                            onClickToProfile={this.onClickToProfile}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Header);
