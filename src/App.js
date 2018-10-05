import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListWithProject from './ListWithProject';
import EmployeeProfile from './EmployeeProfile';
import ProjectAnimated from './ProjectAnimated';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={ListWithProject} />          
          <Route path="/employee/:employeeId" exact component={EmployeeProfile} />
          <Route path="/an" exact component={ProjectAnimated} />
        </Switch>
      </div>
    );
  }
}

export default App;
