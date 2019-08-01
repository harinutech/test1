import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink,Router, Route } from 'react-router-dom';
import clsx from 'clsx';
import project from '../../modules/projectPage/project'
import UserList from '../../modules/userPage/userlist'
import { withStyles,createMuiTheme,makeStyles, useTheme,MuiThemeProvider} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SettingIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from '../../images/capX-logo.png';
import {PrivateRoute} from '../../component/PrivateRoute/PrivateRoute.js';
import {history} from '../../services/helpers';
import {userActions} from '../../store/actions/userActions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {style,theme,useStyles} from '../../css/headercss'
import SideBar from '../sideBar/sideBar'
import {setcomponentaction,openinsidedrawer} from '../../store/actions/componentAction'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import Logout from '@material-ui/icons/InputOutlined';
import Cancel from '@material-ui/icons/CancelOutlined';
import decode from 'jwt-decode';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import axios from 'axios';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        open:true,
        setOpen:false,
        anchorEl:null,
        setAnchorEl:null,
        openPopup:false,
        users:[],
        files: [],
        imageUrl: null
       

    };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleDrawerInsideOpen = this.handleDrawerInsideOpen.bind(this)
        this.handleClickOpenPop =this.handleClickOpenPop.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
       
  }
  componentWillMount(){
    if(this.state.setOpen == true){
    this.props.setcomponentaction(() => { });
  }

  }
  handleDrawerInsideOpen(){
    this.props.openinsidedrawer(()=>{});
  }
   handleDrawerOpen() {
    //  setOpen(true);
      // this.setState({
      //     setOpen: true
      //   });
      
        this.props.setcomponentaction(() => { });
      
    }
  
     handleDrawerClose() {
      //setOpen(false);
      this.setState({
          setOpen: false
        });
    }
     handleClick(event) {
       // setAnchorEl(event.currentTarget);
        this.setState({
          setAnchorEl: event.currentTarget
        });
      }
       handleClose() {
       // setAnchorEl(null);
        this.setState({
          setAnchorEl: null
        });
      }

      handleClickOpenPop(){
        this.setState({
          openPopup: true,
          setAnchorEl: null
        });
      }
  
      handleCancel() {
        //setOpen(false);
        this.setState({
          openPopup: false
          });
         
      }

    uploadImage(event) {
        let files = event.target.files;
        this.setState({ files: files[0] }, () => { console.log(this.state.files) });
         console.log(files[0]);
          
        if (files) {
          let data = new FormData();
          data.append('files', files);
          axios.post('http://192.168.1.89:5000/api/v1/files', data).then((response) => {
            console.log(response); 
          });
        }
    }


      componentDidMount(){
        const usr = localStorage.getItem('user'); 
        const users = decode(usr);
        this.setState({users}) 
        console.log(users);
      }
     
  render(){ 
    const { classes ,setOpen } = this.props;
    const { users } = this.state;
    
  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
        [classes.appBarShift]: setOpen,
        })}
        style={style}
        >
        <Toolbar>
        <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={this.handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
        [classes.hide]: setOpen,
        })}
        >
        <MenuIcon  className={classes.label}/>
        </IconButton>
        <Typography variant="h6" classes={{h6:classes.h6}} noWrap>
        Project
        </Typography>

        <Grid container justify="flex-end" alignItems="left">
        <Button onClick={this.handleDrawerInsideOpen} classes={{root: classes.rootbutton,label: classes.labelbutton, }} >   
        + New
        </Button>

        <Avatar alt="Remy Sharp" src={this.state.imageUrl} className={classes.purpleAvatar} classes={{root:classes.avatarroot}} >{String(this.state.users.First_Name).charAt(0).toUpperCase()+""+String(this.state.users.Last_Name).charAt(0).toUpperCase()}</Avatar>
        <SettingIcon className={classes.colorSetting} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}/>
        <MuiThemeProvider theme={theme}>
        <Menu
        id="simple-menu"
        anchorEl={this.state.setAnchorEl}
        keepMounted
        open={Boolean(this.state.setAnchorEl)}
        onClose={this.handleClose} 
        style={{top: '40px'}}     
        >
        <MenuItem onClick={this.handleClickOpenPop}><UserIcon style={{ fontSize: 17,marginRight: 10,fill: '#848f99' }}/>My Profile</MenuItem>
        <MenuItem><NavLink to="/login"  style={{ textDecoration: 'none',color: '#151b26'}}><Logout style={{ fontSize: 17,margin: '0 11px -4px 0',fill: '#848f99'}}/>Logout</NavLink></MenuItem>
        </Menu>
        </MuiThemeProvider>
        </Grid>
        </Toolbar>
        </AppBar>
        {
       
          this.state.openPopup
            ? (
              <MuiThemeProvider theme={theme}>
              <Dialog open={open} aria-labelledby="form-dialog-title">
              
              <DialogTitle id="form-dialog-title"><b>My Profile</b><Cancel style={{float:'right', cursor: 'pointer',margin: '5px 0 0 0',}} onClick={this.handleCancel}/></DialogTitle>
              
              <DialogContent>
              <label className={classes.popupLabel}>Name</label>
              <TextField
                  variant="outlined"
                  value={users.Emp_Name}
                  onChange={this.handleChange}
              />
              </DialogContent>
              <DialogActions>
              <input accept="image/*"  onChange={this.uploadImage} className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="Upload picture"
                    component="span"
                   
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                <Button  color="primary" onClick={this.handleCancel} className={classes.button}>
                  Update Profile
                </Button>
              </DialogActions>
            </Dialog>
            </MuiThemeProvider>
     )
     : (
       null
     )
 }
    </div>
  );
      }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state =>({
  // loginDetails:state.loginDetails.datas,
   setOpen:state.setcomponentReducer.setOpen
 
 });
//export default withStyles(useStyles)(Header);
export default withStyles(useStyles)(connect(mapStateToProps,{setcomponentaction,openinsidedrawer})(Header));