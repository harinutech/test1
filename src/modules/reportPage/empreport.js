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
// pick a date util library
import DateFnsUtils from '@date-io/date-fns';
import { useStyles, ColorLinearProgress } from '../../css/projectcss'

class EmployeeReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.fetchReport();
    }

    fetchReport = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            axios.get(config.api_url + "/emprpt").then(({ data }) => {
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
                name: "Name",
                label: "Employee",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "Project_Name",
                label: "Project",
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
                name: "Capex_Opex",
                label: "Capex_Opex",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "Total_Actual_Hours",
                label: "Actual Hours",
                options: {
                    filter: true,
                    sort: false,
                }
            },
        ];
        reports.map(rtr => {
            if (rtr.Capex_Opex == true) {
                rtr.Capex_Opex = 'Yes'
            }
            else {
                rtr.Capex_Opex = 'No'
            }
        })

        const headerNames = [
            {
                name: 'Employee',
                download: true,
            },
            {
                name: 'Project',
                download: true,
            },
            {
                name: 'Month',
                download: true,
            },
            {
                name: 'Capex_Opex',
                download: true,
            },
            {
                name: 'Actual Hours',
                download: true,
            }
        ];
        const footerNames = ['Employee', 'Project', 'Month', 'Capex_Opex', 'Actual Hours'];
        const data = reports;
        const options = {
            filterType: 'multiselect',
            responsive: 'stacked',
            elevation: '0',
            selectableRows: "multiple",
            print: false,
            downloadOptions: {
                filename: 'Employee-Report.csv',
                separator: ';',
                filterOptions: {
                    useDisplayedColumnsOnly: true,
                    useDisplayedRowsOnly: true
                },
            },

            // onDownload: (buildHead, buildBody, columns, data) =>
            // buildHead(headerNames) +
            // buildBody(
            //     data.concat({
            //         index: data.length,
            //         data: footerNames,
            //     }),
            // ),
            // customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => {
            //     return (
            //         page
            //     )
            // },
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
                            options={options}
                        />
                    </MuiThemeProvider>
                </div>
            </React.Fragment >
        )
    }
}

export default withStyles(useStyles)(EmployeeReport);