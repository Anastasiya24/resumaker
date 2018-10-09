import React, { Component } from 'react';
import { Switch, Route,Link } from 'react-router-dom';
import ListWithProject from './components/ListWithProject';
import EmployeeProfile from './components/EmployeeProfile';
import ProjectAnimated from './components/ProjectAnimated';
import ListExample from './components/AnimeJs';
import ProjectList from './components/ProjectList'

class App extends Component {
  render() {
    return (
      <div>
        <Link to={'/'} style={{margin: 20}}>Mini-animation</Link>
        <Link to={'/flipper'} style={{margin: 20}}>flipper</Link>
        <Link to={'/animejs'} style={{margin: 20}}>Animejs</Link>
        <Link to={'/employee/5'} style={{margin: 20}}>Employee</Link> 
        <Link to={'/main_anime'} style={{margin: 20}}>test</Link>              
        <Switch>
          <Route path="/" exact component={ListWithProject} />          
          <Route path="/employee/:employeeId" exact component={EmployeeProfile} />
          <Route path="/flipper" exact component={ProjectAnimated} />
          <Route path="/animejs" exact component={ListExample} />   
          <Route path="/main_anime" component={ProjectList} />       
        </Switch>
      </div>
    );
  }
}

export default App;