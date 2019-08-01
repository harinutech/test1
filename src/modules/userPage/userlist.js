import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import clsx from 'clsx';
import MUIDataTable from "mui-datatables";
import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import {useStyles,ColorLinearProgress} from '../../css/projectcss'
import axios from 'axios';
import config from '../../config.json';
import UserInsideDrawer from '../../component/insideDrawer/userDrawer';
import {setcomponentaction,openinsidedrawer,closeinsidedrawer} from '../../store/actions/componentAction'
import {getUserAction} from '../../store/actions/sideDrawerAction';
class UserList extends Component {
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
}
    constructor(props) {
        super(props);
        this.state = { open:false,
            setOpen:false,
            selectedDate:new Date("2018-01-01T00:00:00.000Z"),
            handleDateChange:new Date("2018-01-01T00:00:00.000Z"),
            users:[],
            isLoading: false,

        };
            this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
            this.handleDrawerClose = this.handleDrawerClose.bind(this)
            this.contentfix = this.contentfix.bind(this)
      }
            handleDrawerOpen(rowData) {
              console.log(rowData);
              this.props.getUserAction(rowData[0]);
                    this.props.openinsidedrawer(()=>{});
            }

            handleDrawerClose() {
                    this.props.closeinsidedrawer(()=>{});
            }

            contentfix(){
            this.setState(prevState => ({
                open: !prevState.open
              }));
            }

        contentfix(){
            this.setState(prevState => ({
                open: !prevState.open
              }));

        }
 
        componentDidMount() {
          this.fetchAllUser();
        }
      
        fetchAllUser = () => {
          this.setState({ isLoading: true });
          setTimeout( () => {
            axios.get(config.api_url+"/getAllEmp").then(({ data }) => {
              this.setState({ users: data.allemp, isLoading: false});
            });
          }, 600);
        }
     
    render(){
        const { classes,setOpenInside,emp} = this.props;
        const { users,isLoading} = this.state;
     
        if (isLoading) {
        return (
         <div>
           <ColorLinearProgress className={classes.margin} />
         </div>
        )
        }
        
        const columns = [
          {
            name: "Eid",
            label: "Eid",
           
            options: {
             filter: true,
             sort: false,
             display:false,
             download:false,
            }
           },
          {
            name: "Emp_No",
            label: "ID",
           
            options: {
             filter: true,
             sort: false,
            //  display:false,
            //  download:false,
            }
           },
          {
           name: "First_Name",
           label: "Name",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Email",
           label: "Email",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Emp_Role",
           label: "Role",
           options: {
            filter: true,
            sort: false,
           } 
          },
         ];
        const data = users;
        const actions= [
            {
              //icon: Edit,
              
              tooltip: 'Edit',
              onClick: (event, rowData) => this.handleDrawerOpen(rowData)
            }
          ];
        
        const options = {
          filterType: 'multiselect',
          responsive:'stacked',
          elevation:'0',
          selectableRows:"multiple",
          print:false,
          //onRowClick:this.handleDrawerOpen
         // onRowClick: (event, rowData) => this.handleDrawerOpen(rowData)
          onRowClick: rowData => this.handleDrawerOpen(rowData),
          
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
                    [classes.appBarShift]: setOpenInside,
                    })}
                    >
                    <MuiThemeProvider theme={theme}>                     
                    <MUIDataTable
                    title=""
                    columns={columns}
                    data={data}
                    actions={actions}
                    options={options}           
                    />
                    </MuiThemeProvider>
                    </div>
                    <UserInsideDrawer emp={emp} classes={classes} setOpenInside={setOpenInside} action={this.handleDrawerClose}/>
                    </div>
          </React.Fragment>
        );
}
}
UserList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapStateToProps = state =>({    
    setOpenInside:state.setcomponentReducer.setOpenInside,
    emp:state.getuser.emp,   
 });

export default withStyles(useStyles)
(connect
  (mapStateToProps,
  {setcomponentaction,openinsidedrawer,closeinsidedrawer,getUserAction})
  (UserList));