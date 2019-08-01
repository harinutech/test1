import React, { Component } from 'react';
import { Route, Switch ,Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderViewContainer from '../component/header/HeaderView';
import HomeViewContainer from './home/HomeViewContainer';
import AboutView from './about/AboutView';
import Login from './login/loginView';
import project from './projectPage/project';
import {history} from '../services/helpers';
import {PrivateRoute} from '../component/PrivateRoute/PrivateRoute';
import adminTheme from '../component/adminTheme/theme';

class App extends Component {
  
  render() {
  
    return (
      <div className="App">
        <MuiThemeProvider>
          <main >
          {/* <HeaderViewContainer /> */}
          <Router history={history} >
          <div>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={HomeViewContainer} />
          <Route exact path="/about" component={AboutView} />
          <PrivateRoute exact path="/project" component={adminTheme} />   
          <PrivateRoute exact path="/user" component={adminTheme} />    
          <PrivateRoute exact path="/department" component={adminTheme} />    
          <PrivateRoute exact path="/task" component={adminTheme} />         
          <PrivateRoute exact path="/report" component={adminTheme} /> 
          <PrivateRoute exact path="/dashboard" component={adminTheme} />    
          <PrivateRoute exact path="/emprpt" component={adminTheme} />   
          <PrivateRoute exact path="/monrpt" component={adminTheme} />  
          <PrivateRoute exact path="/forcastrpt" component={adminTheme} />
          <PrivateRoute exact path="/mstrpt" component={adminTheme} />
          </div>
          </Router>
          </main>
        </MuiThemeProvider>
      </div> 
    );
  }
}

export default App;

