import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
//import AccountCircle from '@material-ui/icons/AccountCircleOutlined'

const drawerWidth = 200;

export const useStyles = theme => ({
root: {
display: 'flex',
},
appBar: {
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,

}),


},
appBarShift: {
marginLeft: drawerWidth,
width: `calc(100% - ${drawerWidth}px)`,
transition: theme.transitions.create(['width', 'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
menuButton: {
marginRight: 36,
},
hide: {
display: 'none',
},
drawer: {
width: drawerWidth,
flexShrink: 0,
whiteSpace: 'nowrap',
},
drawerOpen: {
width: drawerWidth,
transition: theme.transitions.create('width', {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
drawerClose: {
transition: theme.transitions.create('width', {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,
}),
overflowX: 'hidden',
width: theme.spacing(6) + 1,
[theme.breakpoints.up('sm')]: {
width: theme.spacing(7) + 1,
},
},
toolbar: {
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
padding: '0 8px',
...theme.mixins.toolbar,
},
content: {
flexGrow: 1,
padding: theme.spacing(2),
},
paper:{
backgroundColor:'#414755',
color:'#d5dce0'
},
colorPrimary:{
color:'#d5dce0',
minWidth: '40px'
},
colorSetting:{
color: '#090909',
marginTop: '3px',
cursor: 'pointer',
},
label:{
color:'#000000'
},
gutters:{
paddingBottom:'0px',
paddingTop:'0px'
},
body1:{
fontSize: '14px',
lineHeight: '28px'
},
avatar: {
margin: 10,
},
orangeAvatar: {
margin: '0 10px',
color: '#fff',
backgroundColor: deepOrange[500],
align:'left'
},
purpleAvatar: {
margin: '-1px 20px',
color: '#fff',
backgroundColor: deepPurple[500],
align:'left'
},
rootbutton: {
background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
borderRadius: 3,
border: 0,
color: 'white',
height: 30,
padding: '0 20px',
boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
margin: '0 14px 0 0',
"&:hover": {
  background:'linear-gradient(to top right, #ff1f35, #ff4053 35%, #c99701)'
}
},
labelbutton: {
textTransform: 'capitalize',
},
avatarroot:{
width: '35px',
height: '35px',
display: 'flex',
overflow:' hidden',
position: 'relative',
fontSize: '1rem',
alignItems: 'center',

},
h6:{
width: '100%',
textAlign: 'left',
color: '#000',
},
h6logo:{
  width: '100%',
  textAlign: 'left',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '0 10px'
},
divider:{
backgroundColor: '#222b37'
},
primary:{
fontSize:'14px'
},
logo:{
  width:'30px'
},
navmenu:{
  top:'50px'
},
popupLabel:{
  marginRight: '12px',
  color: '#848f99',
  fontWeight: '600',
  verticalAlign: '-webkit-baseline-middle'
},
input: {
  display: 'none',
},
});
export const theme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper: {
  top:'100px'
  }
  },
  MuiMenuItem: {
    root: {
      fontSize: '13px',
      minHeight: '39px'
       },
   },
   MuiOutlinedInput: {
    input: {
      padding: '15.5px 17px'
       },
   }, 
   MuiInputBase: {
    input: {
      height: '1px'
       },
   },
   MuiButton: {
    root:{
      fontSize: '12px',
      textTransform: 'unset'
    },
    textPrimary: {
      color: '#fff',
       backgroundColor: '#14aaf5',
       "&:hover": {
        backgroundColor:'#008ce3'
      }
       },
       text:{
        padding: '4px 18px'
       }
   },
   MuiDialogTitle: {
    root:{
      fontSize: '12px',
      textTransform: 'unset',
      padding: '6px 13px'
    },
  },
  MuiDialogActions: {
    root:{
      marginRight: '17px'
    },
  }
  
}})

  export const style = {
  //  backgroundImage: 'linear-gradient( 180deg,rgba(50, 176, 239,1) 1%,rgba(30, 98, 132,1) 200%)',
backgroundColor:'#ffffff',
border: 0,
borderRadius: 3,
boxShadow: '0px 0px 0px -11px rgba(0,0,0,0.2), 0px 4px 6px 0px rgba(0,0,0,-0.86), 0px 1px 10px 0px rgba(0,0,0,0.12)',
color: 'white',
//zIndex:9999,
postion:'relative'
};
