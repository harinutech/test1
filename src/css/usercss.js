import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';

const drawerWidth = 400;

export const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#45c4fb',
  },
  barColorPrimary: {
    backgroundColor: '#3c8af7', 
  },
})(LinearProgress);


export const CssTextField = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ffffff',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.25)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.25)',
      },
    },
    '&.MuiFormControl-root':{
        width: '173px'
    },
    
    
  },
  
  
 
})(TextField);


export const useStyles = theme => ({
    root: {
      // display: 'flex',
      background:'#f4f4f4' 
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      padding: '25px',
      
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
     },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: '80px',
      borderRadius: '7px',
      marginRight: '8px',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
       ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
    dividerinside: {
      width: '90%',
      height: 1,
      marginLeft: 20,
      marginRight: 20,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 173
    },
    personicon:{
        fontSize:"12px" 
    },
    // textbox: {
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(1),
    //   width: 170,
    // },
    gridContainer:{
      padding: '10px'
    },
    drawerFooter:{
      // display: 'flex',
      // minHeight: '15vh',
      // flexDirection: 'column'
    },
    waringmessage: {
      color: 'red',
      fontSize: '11px'
      },
      warningRespons:{
        margin: '10px 0',
        padding: '1px',
        borderRadius: '3px 3px 3px 3px',
        color: '#270',
        backgroundColor: '#DFF2BF',
        fontSize: '13px'
      },
      alertSucsess:{
        padding: '9px',
        borderRadius: '7px',
        backgroundColor: '#DFF2BF',
        margin: '5px 28px 0 12px',
        fontSize:'12px'
      },
      alertdanger:{
        padding: '9px',
        borderRadius: '7px',
        backgroundColor: '#FFBABA',
        margin: '5px 28px 0 12px',
        fontSize:'12px'
      }
     
  });

  export const CssTextFieldrounded = withStyles({
    root: {    
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInputLabel-formControl':{
        top: '11px',
      },
      '& .MuiFormLabel-root':{
        fontSize:'14px'
    },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(0, 0, 0, 0.25)',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ffffff',
          alignItems: 'center',
          border: '1px solid transparent',
          borderRadius: '18px',
          display: 'inline-flex',
          flex: '1 1 auto',
          minWidth: '1px',
          padding: '3px',
          paddingRight: '10px',
          top: '5px',
          bottom: '10px',
          transition: '.2s box-shadow,.2s color',
          borderColor: 'rgba(0, 0, 0, 0.25)',
        },
        // '&:hover fieldset': {
        //   borderColor: 'rgba(0, 0, 0, 0.25)',
          
        // },
        '&.Mui-focused fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.25)',
         
        },
        '& .MuiOutlinedInput-input':{
          fontSize: '12px'
        },
        '& .MuiSvgIcon-root':{
          fontSize:'1rem',
        },
        '&.MuiOutlinedInput-adornedStart':{
          paddingLeft:' 10px'
        },
      },
     
      
    },
  })(TextField);
  