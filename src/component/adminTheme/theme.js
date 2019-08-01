import React,{Component} from 'react'; 
import PropTypes from 'prop-types';
import { withStyles,createMuiTheme,makeStyles, useTheme,MuiThemeProvider} from '@material-ui/core/styles';
import {PrivateRoute} from '../../component/PrivateRoute/PrivateRoute.js';
import Project from '../../modules/projectPage/project'
import UserList from '../../modules/userPage/userlist'
import {style,theme,useStyles} from '../../css/headercss'
import Header from '../header/HeaderView'
import SideBar from '../sideBar/sideBar'
import Department from '../../modules/departmantPage/department'
import Task from '../../modules/taskPage/task'
import Report from '../../modules/reportPage/report'
import Dashboard from '../../modules/dashboard/dashboard'
import EmployeeReport from '../../modules/reportPage/empreport'
import MonthlyReport from '../../modules/reportPage/monreport'
import ForecastReport from '../../modules/reportPage/forcastreport'
import MasterReport from '../../modules/reportPage/masterreport'

class adminTheme extends Component {

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <Header />
            <SideBar />
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <PrivateRoute exact path="/project" component={Project} />
            <PrivateRoute exact path="/user" component={UserList} />
            <PrivateRoute exact path="/department" component={Department} />
            <PrivateRoute exact path="/task" component={Task} />
            <PrivateRoute exact path="/report" component={Report} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/emprpt" component={EmployeeReport} />
            <PrivateRoute exact path="/monrpt" component={MonthlyReport} />
            <PrivateRoute exact path="/forcastrpt" component={ForecastReport} />
            <PrivateRoute exact path="/mstrpt" component={MasterReport} />
            </main>
            </div>
        );
    }
}
adminTheme.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(adminTheme);