import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
import ListWithProject from './components/ListWithProject';
import EmployeeProfile from './components/EmployeeProfile';
import ProjectAnimated from './components/ProjectAnimated';
import ListExample from './components/AnimeJs';
import ProjectList from './components/ProjectList';
// import Menu from './components/Menu';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Grid container spacing={24}>
        <Grid item xs={2}>
            <Menu />
          </Grid>
          <Grid item xs={9}> */}
            <Header />
            <Link to={'/'} style={{ margin: 20 }}>Mini-animation</Link>
            <Link to={'/flipper'} style={{ margin: 20 }}>flipper</Link>
            <Link to={'/employee/5'} style={{ margin: 20 }}>Employee</Link>
            <Link to={'/main_anime'} style={{ margin: 20 }}>test</Link>
            <Link to={'/animejs'} style={{ margin: 20 }}>Animejs</Link>
            <Switch>
              <Route path="/" exact component={ListWithProject} />
              <Route path="/employee/:employeeId" exact component={EmployeeProfile} />
              <Route path="/flipper" exact component={ProjectAnimated} />
              <Route path="/animejs" exact component={ListExample} />
              <Route path="/main_anime" component={ProjectList} />
            </Switch>
          {/* </Grid>
        </Grid> */}
      </div>
    );
  }
}

export default App;