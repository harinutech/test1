import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MUIDataTable from "mui-datatables";
//import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles, useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import config from '../../config.json';
import DateFnsUtils from '@date-io/date-fns';
import { useStyles, ColorLinearProgress } from '../../css/projectcss'

class ForcastReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports : [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.fetchReport();
    }

    fetchReport = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            axios.get(config.api_url + "/forcastrpt").then(({ data }) => {
                this.setState({ reports: data.result, isLoading: false });
            });
        }, 600);
    }

    render() {
        const { classes } = this.props;
        const { reports, isLoading } = this.state;
        if (isLoading) { return (<ColorLinearProgress className={classes.margin} />) }
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
                name: "Month",
                label: "Month",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "Capex_Plannedhr",
                label: "Capex_Planned",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "Capex_Actualhr",
                label: "Capex_Actual",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "Opex_Plannedhr",
                label: "Opex_Planned",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "Opex_Actualhr",
                label: "Opex_Actual",
                options: {
                    filter: true,
                    sort: false,
                }
            },
        ];

        reports.map(rtr=>{
            if(rtr.Capex_Opex == true){
                rtr.Capex_Opex = 'Yes';
                rtr.Capex_Plannedhr = rtr.Planned_Hours;
                rtr.Capex_Actualhr = rtr.Total_Actual_Hours;
                rtr.Opex_Plannedhr = 0;
                rtr.Opex_Actualhr = 0;
            }
            else {
                rtr.Capex_Opex = 'No';
                rtr.Capex_Plannedhr = 0;
                rtr.Capex_Actualhr = 0;
                rtr.Opex_Plannedhr = rtr.Planned_Hours;
                rtr.Opex_Actualhr = rtr.Total_Actual_Hours;
            }
        })
        const data = reports;
        const options = {
            filterType: 'multiselect',
            responsive: 'stacked',
            elevation: '0',
            selectableRows: "multiple",
            print: false,
            //onRowClick:this.handleDrawerOpen
            downloadOptions: {
                filename: 'Forecast-Report.csv',
                separator: ';',
                filterOptions: {
                    useDisplayedColumnsOnly: true,
                    useDisplayedRowsOnly: true
                },
            },
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

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <MuiThemeProvider theme={theme}>
                        <MUIDataTable
                            title=""
                            columns={columns}
                            data={data}
                            //actions={actions}
                            //   options={{
                            //     actionsColumnIndex: -1
                            //   }}
                            options={options}
                        />
                    </MuiThemeProvider>
                </div>
            </React.Fragment>
        )
    }
}

// Report.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(useStyles)(ForcastReport);