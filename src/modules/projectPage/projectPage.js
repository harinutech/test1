import React from 'react';
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MaterialTable from 'material-table';
import clsx from 'clsx';
import { makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library

import DateFnsUtils from '@date-io/date-fns';


const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn,
  
};



const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
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
 
}));

const getMuiTheme = () => createMuiTheme({
  overrides: {
    MuiTableRow: {
      root: {
        // backgroundColor: "#F4F4F4"
      }
    },
    MuiTableCell: {
      root: {
      display: 'table-cell',
      padding: '0px',
      fontSize: '13px',
      textAlign: 'left',
      fontWeight: '400',
      lineHeight: '1.43',
      
  }
}
  }
})

export default function ProjectPage() {
    
  const classes = useStyles();
  const theme = getMuiTheme();
  const [selectedDate, handleDateChange] = React.useState(new Date("2018-01-01T00:00:00.000Z"));
  
  const stylebutton = { backgroundImage: 'linear-gradient( 180deg,rgba(50, 176, 239,1) 1%,rgba(155, 209, 242,1) 200%)',
border: 0,
borderRadius: 3,
// boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
color: 'white',
};
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'India', 63: 'US' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran',name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        name: 'Mehmet', surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
    actions:[
        {
          icon: Edit,
          
          tooltip: 'Edit',
          onClick: (event, rowData) => handleDrawerOpen()
        }
      ],
      
  });
  const style = { 
  boxShadow: 'none',
  
 };
 const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const columns = ["Name", "Company", "City", "State"];

  const data = [
   ["Joe James", "Test Corp", "Yonkers", "NY"],
   ["John Walsh", "Test Corp", "Hartford", "CT"],
   ["Bob Herm", "Test Corp", "Tampa", "FL"],
   ["James Houston", "Test Corp", "Dallas", "TX"],
  ];
  
  const options = {
    filterType: 'multiselect',
    responsive:'stacked',
    elevation:'0',
    selectableRows:"multiple",
    print:false,
    onRowClick:handleDrawerOpen
  };
  
  return (
      
    <div className={classes.root}>
    <div position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
        <MuiThemeProvider theme={theme}>
    <MUIDataTable
      title=""
      icons={tableIcons}
      columns={columns}
      data={data}
      actions={state.actions}
    //   options={{
    //     actionsColumnIndex: -1
    //   }}
    options={options}
      style={useStyles.root}
      
    />
    </MuiThemeProvider>
    </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      
       <div className={classes.drawerHeader}>
       <IconButton onClick={handleDrawerClose}>
             <ChevronRightIcon />
          </IconButton>
          </div> 
          <Typography variant="h6" gutterBottom>
        Project Title
      </Typography>
      <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
      </div>
      <Grid className={classes.container + ' MuiGrid-spacing-xs-3'} spacing={3}>
        <Grid item xs={12} sm={6}>
        
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12}>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={stylebutton}
            >
              Save
            </Button>
            </Grid>
           
      </Grid>
     
          </Drawer>
    </div>
  );
}