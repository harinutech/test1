import React,{Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MUIDataTable from "mui-datatables";
//import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import config from '../../config.json'; 
import {useStyles,ColorLinearProgress} from '../../css/projectcss'

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { open:false,
            setOpen:false,
            selectedDate:new Date("2018-01-01T00:00:00.000Z"),
            handleDateChange:new Date("2018-01-01T00:00:00.000Z"),
            tasks:[],
            isLoading: false,

        };
            this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
            this.handleDrawerClose = this.handleDrawerClose.bind(this)
            this.contentfix = this.contentfix.bind(this)
      }
       handleDrawerOpen() {
        //  setOpen(true);
          this.setState({
              setOpen: true
            });
        }
      
         handleDrawerClose() {
          //setOpen(false);
          this.setState({
              setOpen: false
            });
        }

        contentfix(){
            this.setState(prevState => ({
                open: !prevState.open
              }));

        }
 
        componentDidMount() {
          this.fetchAllTask();
        }
      
        fetchAllTask = () => {
          this.setState({ isLoading: true });
          setTimeout( () => {
          axios.get(config.api_url+"/getprojtask").then(({ data }) => {
            this.setState({ tasks: data.result, isLoading: false});
          });
        }, 600);     
        }
     
    render(){
        const { classes } = this.props;
        const { tasks,isLoading} = this.state;

        if (isLoading) {return (<ColorLinearProgress className={classes.margin} />)}

        const columns = [
          {
            name: "Project_Name",
            label: "Project",
            options: {
             filter: true,
             sort: false,
            }
           },
          {
           name: "Dept_Name",
           label: "Department",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "MileStone_Name",
           label: "Milestone",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Emp_Name",
           label: "Employee",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
            name: "Planned_Hours",
            label: "Planned Hours",
            options: {
             filter: true,
             sort: false,
            }
           },
           {
            name: "Task_Start_Date",
            label: "Start Date",
            options: {
             filter: true,
             sort: false,
            }
           },
           {
            name: "Task_End_Date",
            label: "End Date",
            options: {
             filter: true,
             sort: false,
            }
           },
         ];
        const data = tasks;
        const actions= [
            {
              //icon: Edit,
              
              tooltip: 'Edit',
              onClick: (event, rowData) => this.handleDrawerOpen
            }
          ];
        
        const options = {
          filterType: 'multiselect',
          responsive:'stacked',
          elevation:'0',
          selectableRows:"multiple",
          print:false,
          onRowClick:this.handleDrawerOpen
        };
        
            const stylebutton = { backgroundImage: 'linear-gradient( 180deg,rgba(50, 176, 239,1) 1%,rgba(155, 209, 242,1) 200%)',
            border: 0,
            borderRadius: 3,
            // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            };

            const theme = createMuiTheme({
            overrides: {
            MuiTableRow: {
            root: {
             //backgroundColor: "#F4F4F4"
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

            
        return(
                <React.Fragment> 
                    <div className={classes.root}>
                    <div position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: this.state.setOpen,
                    })}
                    >
                    <MuiThemeProvider theme={theme}>                     
                    <MUIDataTable
                    title=""
                    columns={columns}
                    data={data}
                    actions={actions}
                    //   options={{
                    //     actionsColumnIndex: -1
                    //   }}
                    options={options}           
                    />
                    </MuiThemeProvider>
                    </div>
                    <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={this.state.setOpen}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    >

                    <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
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
                    value={this.state.selectedDate}
                    onChange={this.state.handleDateChange}
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
          </React.Fragment>
        );
}
}
Task.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(useStyles)(Task)  ;