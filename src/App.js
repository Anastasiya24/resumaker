import React, { Component } from 'react';
import { Switch, Route,Link } from 'react-router-dom';
import ListWithProject from './components/ListWithProject';
import EmployeeProfile from './components/EmployeeProfile';
import ProjectAnimated from './components/ProjectAnimated';
import ListExample from './components/AnimeJs'

class App extends Component {
  render() {
    return (
      <div>
        <Link to={'/'} style={{margin: 20}}>Without animation</Link>
        <Link to={'/flipper'} style={{margin: 20}}>flipper</Link>
        <Link to={'/animejs'} style={{margin: 20}}>Animejs</Link>
        <Link to={'/employee/5'} style={{margin: 20}}>Employee</Link>                
        <Switch>
          <Route path="/" exact component={ListWithProject} />          
          <Route path="/employee/:employeeId" exact component={EmployeeProfile} />
          <Route path="/flipper" exact component={ProjectAnimated} />
          <Route path="/animejs" exact component={ListExample} />          
        </Switch>
      </div>
    );
  }
}

export default App;