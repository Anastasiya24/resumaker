import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListWithProject from './ListWithProject';
import EmployeeProfile from './EmployeeProfile';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={ListWithProject} />          
          <Route path="/employee/:employeeId" exact component={EmployeeProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
