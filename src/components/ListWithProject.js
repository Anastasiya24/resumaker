import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import QueueAnim from 'rc-queue-anim';
// import Button from '@material-ui/core/Button';

const project = [
  {
    id: 'P1', name: 'Factory',
    projectEmployees: [
      { id: 'E1', name: 'Artur', lastName: 'Ivanov' },
      { id: 'E2', name: 'Artem', lastName: 'Ivanov' },
      { id: 'E3', name: 'Andrey', lastName: 'Ivanov' }
    ],
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default modpr text, and a search for lorem ipsum will uncover many web sites still in their infancy. ',
    date: '03.10.2018',
    customer: 'Lien',    
    development: 5,
    tester: 2
  },
  {
    id: 'P2', name: 'Resumaker',
    projectEmployees: [
      { id: 'E1', name: 'Valery', lastName: 'Ivanov' },
      { id: 'E2', name: 'Vitalya', lastName: 'Ivanov' },
      { id: 'E3', name: 'Victor', lastName: 'Ivanov' }
    ],
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    date: '15.03.2018',
    customer: 'Franclin',
    development: 2,
    tester: 1

  },
  {
    id: 'P3', name: 'Player',
    projectEmployees: [
      { id: 'E1', name: 'Dima', lastName: 'Ivanov' },
      { id: 'E2', name: 'Dan', lastName: 'Ivanov' },
      { id: 'E3', name: 'Denis', lastName: 'Ivanov' }
    ],
    description: 'Contrary to popular bprief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure ',
    date: '03.10.2018',
    customer: 'Igor',    
    development: 5,
    tester: 2
  },
];

class ListWithProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectNumber: null
    }
  };

  onLoadProjectEmployees(projectId) {
    if (this.state.projectNumber === projectId)
      this.setState({
        projectNumber: null
      });
    else {
      this.setState({
        projectNumber: projectId
      });
    }
  };

  onClickProject(id) {
    this.props.history.push(`/employee/${id}`);
  }

  render() {
    const employeesList = (this.state.projectNumber ? project.find(el => el.id === this.state.projectNumber).projectEmployees : false);
    const currentProject = (this.state.projectNumber ? project.find(el => el.id === this.state.projectNumber) : []);
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            {project.map(pr =>
              <div key={pr.id}
                style={{ margin: 30, cursor: 'pointer', padding: 10, border: '2px solid #E4F4F6' }}
                onClick={this.onLoadProjectEmployees.bind(this, pr.id)}
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
          {employeesList &&
            <Grid item xs={6}>
              <QueueAnim>
                <Typography variant="headline" >
                  {currentProject.name}
                </Typography>
                <Typography variant="subheading" >
                  Description: {currentProject.description}
                </Typography>
                <Typography variant="subheading" >
                  Date: {currentProject.date}
                </Typography>
                <Typography variant="subheading" >
                  Developers: {currentProject.development}
                </Typography>
                <Typography variant="subheading" >
                  Testers: {currentProject.tester}
                </Typography>
                {employeesList.map(em =>
                  <div key={em.id}
                    style={{ margin: 30, cursor: 'pointer', padding: 10, border: '2px solid #E4F4F6' }}
                    onClick={this.onClickProject.bind(this, em.id)}
                  >
                    <Typography variant='headline'>
                      {em.name} {em.lastName}
                    </Typography>
                  </div>
                )}
              </QueueAnim>
            </Grid>
          }
        </Grid>
      </div>
    );
  }
}

export default withRouter(ListWithProject);