import React,{Component} from 'react';
import MaterialTable from 'material-table';
import MTableToolbar from 'material-table';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import DoneIcon from '@material-ui/icons/Done';
import GroupAdd from '@material-ui/icons/GroupAdd'
import Tooltip from '@material-ui/core/Tooltip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {CssTextField,CssTextFieldrounded,BootstrapInput,Cssdatepickerrounded,MaterialTableCss} from '../../css/projectcss'
import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker,DatePicker} from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CalendarTodaySharp from '@material-ui/icons/CalendarTodaySharp'
// pick a date util library
import DateFnsUtils from '@date-io/date-fns';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

class ProjectInsideDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate:new Date("2018-01-01T00:00:00.000Z"),
            handleDateChange:new Date("2018-01-01T00:00:00.000Z"),
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Budget ($)', field: 'budget' },
               
              ],
              data: [
                { name: 'Mehmet', budget: '30' },
                {
                  name: 'Zerya Betül',
                  budget: '25',
                 
                },
                { name: 'Mehmet', budget: '30' },
                {
                  name: 'Zerya Betül',
                  budget: '25',
                 
                },
                { name: 'Mehmet', budget: '30' },
                {
                  name: 'Zerya Betül',
                  budget: '25',
                 
                },
              ],
           };
           this.handleDateChange = this.handleDateChange.bind(this);
            }
         handleDateChange(date) {
            this.setState({
                selectedDate: date
              });
                //setSelectedDate(date);
              }
            
    render(){
        const stylebutton = { backgroundImage: 'linear-gradient( 180deg,rgba(50, 176, 239,1) 1%,rgba(155, 209, 242,1) 200%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        };
       const {classes,setOpenInside,action} = this.props;
       const options = {        
        responsive:'stacked',
        elevation:'0',      
      };
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
      
     
        return(
                <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={setOpenInside}
                classes={{
                paper: classes.drawerPaper,
                }}
                >

                <div className={classes.drawerHeader}>
                <Grid container  alignItems="right">
                <Button variant="outlined" component="span" className={classes.button}>
                <DoneIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
                </Button>
                </Grid>
                <Grid container justify="flex-end" alignItems="left">
                <IconButton > 
                <Close onClick={action}/>
                </IconButton>
                </Grid>


                </div> 

                <Divider classes={{root:classes.divider}}/>
                <Grid container classes={{container:classes.gridContainer}} >
                <CssTextField 
                margin="normal"
                variant="outlined"
                id="title"
                name="firstName"
                defaultValue="Project Title"
                spellCheck='false'
                multiline
                fullWidth                        
                />              
              
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Cssdatepickerrounded
                className={classes.datetextField}
                label="Start Date"
                disableToolbar
                inputVariant="outlined"
                variant="inline"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                InputAdornmentProps={{ position: "start" }}
                format="MM/dd/yyyy"
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                <CalendarTodaySharp />
                </InputAdornment>
                ),
                }}
                />
                <Cssdatepickerrounded
                className={classes.datetextField}
                label="End Date"
                disableToolbar
                inputVariant="outlined"
                variant="inline"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                InputAdornmentProps={{ position: "start" }}
                format="MM/dd/yyyy"
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                <CalendarTodaySharp />
                </InputAdornment>
                ),
                }}
                />
                </MuiPickersUtilsProvider>
                <CssTextFieldrounded
                className={classes.datetextField}
                variant="outlined"
                id="input-with-icon-textfield"
                placeholder="Budget"
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                $
                </InputAdornment>
                ),
                }}
                />

                </Grid>


                <Divider classes={{root:classes.dividerinside}}/>
               
                <Grid className={classes.container + ' MuiGrid-spacing-xs-3'} spacing={2}>
                <Tooltip title="Assigned To" aria-label="Assigned To">
                <GroupAdd classes={{root:classes.iconroot}} />
                </Tooltip>
                   <MaterialTable
                    title={""}
                    columns={this.state.columns}
                    data={this.state.data}
                    style={{boxShadow:'none', fontSize:'1rem' ,width:'95%',left: '10px',top:'-10px'}}
                    icons={tableIcons}
                    options={{
                        actionsColumnIndex: -1,
                        rowStyle: {
                            fontSize:'12px',
                          }
                      }}
                     
                    editable={{
                    onRowAdd: newData =>
                    new Promise(resolve => {
                    setTimeout(() => {
                    resolve();
                    const data = [...this.state.data];
                    data.push(newData);
                    setState({ ...this.state, data });
                    }, 600);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                    setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data[data.indexOf(oldData)] = newData;
                    setState({ ...state, data });
                    }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                    setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.splice(data.indexOf(oldData), 1);
                    setState({ ...state, data });
                    }, 600);
                    }),
                    }}
                    />
                  
                 </Grid>
                </Drawer>
        );
    }

}
export default ProjectInsideDrawer;