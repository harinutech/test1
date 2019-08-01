import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import clsx from 'clsx';
import MUIDataTable from "mui-datatables";
import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import {setcomponentaction,openinsidedrawer,closeinsidedrawer} from '../../store/actions/componentAction'
import {useStyles,ColorLinearProgress} from '../../css/projectcss'
import axios from 'axios';
import config from '../../config.json';
import ProjectInsideDrawer from '../../component/insideDrawer/projectDrawer'

 
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { open:false,
            setOpen:false,
            selectedDate:new Date("2018-01-01T00:00:00.000Z"),
            handleDateChange:new Date("2018-01-01T00:00:00.000Z"),
            projects:[],
            isLoading: false,
        };
            this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
            this.handleDrawerClose = this.handleDrawerClose.bind(this);
            this.contentfix = this.contentfix.bind(this);
            
       }
     
       handleDrawerOpen() {
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
        
        componentDidMount() {
          this.fetchAllProject();
        }
      
        fetchAllProject = () => {
          this.setState({ isLoading: true });
          setTimeout( () => {
            axios.get(config.api_url+"/getproject").then(({ data }) => {
              this.setState({ projects: data.result, isLoading: false});
            });
          }, 600);
        }
      
    render(){
        const { classes,datas,setOpenInside } = this.props;
        const { projects,isLoading} = this.state;
      if (isLoading) {
        return (
         <div>
           <ColorLinearProgress className={classes.margin} />
         </div>
        )
        }
        const columns = [
          {
            name: "Client_Name",
            label: "Client Name",
            options: {
             filter: true,
             sort: false,
            }
           },
          {
           name: "Project_Name",
           label: "Project Name",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
            name: "Project_Start_Date",
            label: "Start Date",
            options: {
             filter: true,
             sort: false,
            }
           },
           {
            name: "Project_End_Date",
            label: "End Date",
            options: {
             filter: true,
             sort: false,
            }
           },
           {
            name: "Budget",
            label: "Budget",
            options: {
             filter: false,
             sort: false,
            }
           },
         ];
        const data = projects;
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
          onRowClick:this.handleDrawerOpen,
          textLabels: {
            selectedRows: {
              text: "Projects selected",
              delete: "Delete",
              deleteAria: "Delete Selected Projets",
            },
            toolbar: {
              search: "Search",
              downloadCsv: "Download Project",
              print: "Print",
              viewColumns: "View Columns",
              filterTable: "Filter Table",
            },
          },
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
            },
           
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
                    //   options={{
                    //     actionsColumnIndex: -1
                    //   }}
                    options={options}           
                    />
                    </MuiThemeProvider>
                    </div>
                    <ProjectInsideDrawer classes={classes} setOpenInside={setOpenInside} action={this.handleDrawerClose}/>
                    </div>
          </React.Fragment>
        );
}
}
Project.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapStateToProps = state =>({    
      setOpenInside:state.setcomponentReducer.setOpenInside   
   });
   
  export default withStyles(useStyles)(connect
  (mapStateToProps,
  {setcomponentaction,openinsidedrawer,closeinsidedrawer}
  )
  (Project));
