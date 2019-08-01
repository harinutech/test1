import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { style, theme, useStyles } from '../../css/headercss'
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from '../../images/capX-logo.png';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { setcomponentaction } from '../../store/actions/componentAction'
import TaskIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import ProjectIcon from '@material-ui/icons/LibraryBooksOutlined';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import DepartmentIcon from '@material-ui/icons/AccountBalanceOutlined';
import Report from '@material-ui/icons/AssignmentOutlined';

import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      setOpen: false,
      lopen: false,
      lsetOpen: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this)

  }
  handleDrawerOpen() {
    this.setState({
      setOpen: true
    });
  }

  handleDrawerClose() {
    // this.setState({
    //     open: false
    //   });
    this.props.setcomponentaction(() => { });
  }

  handleClick() {
    this.setState({
      lopen: !this.state.lopen,
      lsetOpen: !this.state.lsetOpen
    });
  }


  render() {
    //  const classes = useStyles();
    //const theme = useTheme();
    //const [open, setOpen] = React.useState(true);
    const { classes, open } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,

          }, classes.paper),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <img src={logo} className={classes.logo} />
          <Typography variant="h6" classes={{ h6: classes.h6logo }} noWrap>
            pmtool
            </Typography>
          <IconButton onClick={this.handleDrawerClose} className={classes.colorPrimary} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider classes={{ root: classes.divider }} />
        <List>
          <ListItem component={Link} to="/dashboard" button className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><ProjectIcon style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="DashBoard" classes={{ primary: classes.primary }} />
          </ListItem>
          <ListItem component={Link} to="/project" button className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><ProjectIcon style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="Project" classes={{ primary: classes.primary }} />
          </ListItem>
          <ListItem component={Link} to="/task" button className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><TaskIcon style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="Task" classes={{ primary: classes.primary }} />
          </ListItem>
        </List>
        <Divider classes={{ root: classes.divider }} />
        <List>
          <ListItem component={Link} to="/user" button className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><UserIcon style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="Users" classes={{ primary: classes.primary }} />
          </ListItem>
          <ListItem component={Link} to="/department" button className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><DepartmentIcon style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="Department" classes={{ primary: classes.primary }} />
          </ListItem>
        </List>
        <Divider classes={{ root: classes.divider }} />
        <List>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><Report style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="Report" classes={{ primary: classes.primary }} />
            {this.state.lopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.lopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem component={Link} to="/emprpt" button className={classes.gutters}>
                <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><Report style={{ fontSize: 17 }} /></ListItemIcon>
                <ListItemText primary="Employee Report" classes={{ primary: classes.primary }} />
              </ListItem>
              <ListItem component={Link} to="/monrpt" button className={classes.gutters}>
                <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><Report style={{ fontSize: 17 }} /></ListItemIcon>
                <ListItemText primary="Monthly Report" classes={{ primary: classes.primary }} />
              </ListItem>
              <ListItem component={Link} to="/forcastrpt" button className={classes.gutters}>
                <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><Report style={{ fontSize: 17 }} /></ListItemIcon>
                <ListItemText primary="Forcast Report" classes={{ primary: classes.primary }} />
              </ListItem>
              <ListItem component={Link} to="/mstrpt" button className={classes.gutters}>
                <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><Report style={{ fontSize: 17 }} /></ListItemIcon>
                <ListItemText primary="Master Report" classes={{ primary: classes.primary }} />
              </ListItem>
            </List>
          </Collapse>
          {/* <ListItem component={Link} to="/report" button className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary} classes={{ root: classes.root }}><Report style={{ fontSize: 17 }} /></ListItemIcon>
            <ListItemText primary="Report" classes={{ primary: classes.primary }} />
          </ListItem> */}

          {/* {['Project', 'Task', 'Users', 'Report'].map((text, index) => (
            <ListItem button key={text} className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} classes={{ primary: classes.primary  }} />
            </ListItem>
            ))}
            </List>
            <Divider classes={{root:classes.divider}}/>
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text} className={classes.gutters}>
            <ListItemIcon className={classes.colorPrimary}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} classes={{ primary: classes.primary  }}/>
            </ListItem>
            ))} */}
        </List>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};
//export default withStyles(useStyles)(Sidebar);
const mapStateToProps = state => ({
  // loginDetails:state.loginDetails.datas,
  open: state.setcomponentReducer.open

});
//export default withStyles(useStyles)(Header);
export default withStyles(useStyles)(connect(mapStateToProps, { setcomponentaction })(Sidebar));