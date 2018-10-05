import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Photo from './img/57ac27f7bcf92156787c1fde.png';
import CreateResume from './CreateResume';
import HistoryResume from './HistoryResume';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class EmployeeProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      createResume : <CreateResume />,
      historyResume: false
    };
    this.onClickNewResume = this.onClickNewResume.bind(this);
    this.onClickHistoryResume = this.onClickHistoryResume.bind(this);
  };

  onClickNewResume(){
    this.setState({
      createResume: <CreateResume />,
      historyResume: false
    })
  }

  onClickHistoryResume(){
    this.setState({
      createResume: false,
      historyResume: <HistoryResume />
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <header>
          <Paper className={classes.paper} elevation={1}>
            <div className={classes.root}>
              <Grid container spacing={16}>
                <Grid item xs={4} >
                  <img src={Photo} style={{ width: '220px'}} alt='photos' />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="display2" component="h3" style={{ display: 'inline-block' }}>
                    Remarkable Person
                  </Typography>
                  <Typography variant="subheading" component="p">
                    Department: D2; Group: G2;
                  </Typography>
                  <Typography variant="subheading" component="p">
                    Location: Minsk;
                  </Typography>
                  <Typography variant="subheading" component="p">
                    Phone: +375 29 123-45-67
                  </Typography>
                  <Typography variant="subheading" component="p">
                    Skype: super-programmer
                  </Typography>
                  <Typography variant="subheading" component="p">
                    ...other information
                  </Typography>
                  <div style={{marginTop: 20}}>
                    <Button variant="outlined" color="secondary" 
                      style={{marginRight: '20px'}} onClick={this.onClickNewResume} >
                      New resume
                    </Button>
                    <Button variant="outlined" color="primary" onClick={this.onClickHistoryResume}>
                      History
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
          {this.state.createResume}
          {this.state.historyResume}
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeProfile);