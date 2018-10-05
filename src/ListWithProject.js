import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import EmployeeProfile from './EmployeeProfile';

const project = [
  { id: 'P1', name: 'Factory', description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default modpr text, and a search for lorem ipsum will uncover many web sites still in their infancy. ' },
  { id: 'P2', name: 'Resumaker', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' },
  { id: 'P3', name: 'Player', description: 'Contrary to popular bprief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure ' },
];

const projectEmployees = [
  { id: 'E1', name: 'Artur', lastName: 'Ivanov' },
  { id: 'E2', name: 'Artem', lastName: 'Ivanov' },
  { id: 'E3', name: 'Andrey', lastName: 'Ivanov' }
];

class ListWithProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClickToProject: false
    }
  };

  onLoadProjectEmployees(projectId) {
    this.setState({ onClickToProject: true })
    console.log(`Project ${projectId}`)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            {project.map(pr =>
              <div key={pr.id}
                style={{ margin: 30, cursor: 'pointer', padding: 10, border: '2px solid #E4F4F6' }}
                onClick={() => this.onLoadProjectEmployees(pr.id)}
              >
                <Typography variant='headline'>
                  {pr.name}
                </Typography>
                <Typography variant="subheading" >
                  {pr.description}
                </Typography>
              </div>
            )}
          </Grid>
          {this.state.onClickToProject &&
            <Grid item xs={6}>
              {projectEmployees.map(em =>
                <div key={em.id}
                  style={{ margin: 30, cursor: 'pointer', padding: 10, border: '2px solid #E4F4F6' }}
                  onClick={() => this.props.history.push(`/employee/${em.id}`)}
                >
                  <Typography variant='headline'>
                    {em.name} {em.lastName}
                  </Typography>
                </div>
              )}
            </Grid>
          }
        </Grid>
      </div>
    );
  }
}

export default withRouter(ListWithProject);
