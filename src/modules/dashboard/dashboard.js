import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
import Chart from 'react-google-charts';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import config from '../../config.json';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Select from 'react-select';
const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 170,
    },
    root: {
        width: '100%',
        height: '91%',
        backgroundColor: 'white',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
    },
    subroot: {
        paddingTop: theme.spacing(7),

    },
    paper1: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: '#46E79E',
    },
    paper2: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: '#46C2E7',
    },
    paper3: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: '#BE46E7'
    },
    paper4: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: '#E74666'
    }
});

const chartoptions = [
    { value: 'Bar-Chart', label: 'Bar-Chart' },
    { value: 'Pie-Chart', label: 'Pie-Chart' }
]

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan_hours: [],
            actual_hours: [],
            cpxplanhr: [],
            opxplanhr: [],
            ptitle: null,
            project: [],
            isLoading: false,
            charttype: { value: 'Bar-Chart', label: 'Bar-Chart' },
        }
    }

    handleChange1 = event => {
        console.log(event.value)
        this.setState({
            ptitle:event
        });

    }

    handleChange2 = event => {
        console.log(event);
        this.setState({ charttype: event});
    }

    componentDidMount() {
        this.fetchResult();
    }

    fetchResult = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            axios.get(config.api_url + "/getproject").then(({ data }) => {
                this.setState({
                    project: data.result,
                    isLoading: false
                });
            });
        }, 600);
    }

    render() {
        const { classes } = this.props;
        const { project, charttype } = this.state;
        let projectVal = project.map((team) => {
            return {
                value: team.Project_Id, label: team.Project_Name
            }
        });
        

        var chartvalue = true;
        if (String(this.state.charttype.value) === "Bar-Chart") {
            chartvalue = true;
        }
        else {
            chartvalue = false;
        }
        return (

            <React.Fragment>
                <Container maxWidth="false" className={classes.root}>
                    <form autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Select Project</InputLabel>
                            {/* <Select
                                value={this.state.ptitle}
                                onChange={this.handleChange1}>
                                {project.map((value, label) => {
                                    return (<MenuItem value={value.Project_Id}>{value.Project_Name}</MenuItem>)
                                })}
                            </Select> */}
                            <Select
                            //isSearchable
                                value={this.state.ptitle}
                                onChange={this.handleChange1}
                                options={projectVal}
                            />

                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Select Chart Type</InputLabel>
                            <Select
                                value={this.state.charttype}
                                onChange={this.handleChange2}
                                options ={chartoptions}
                            />
                        </FormControl>
                    </form >
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid container className={classes.subroot} spacing={4}>
                                <Grid item xs={5}>
                                    <Paper className={classes.paper1}>Tasks</Paper>
                                </Grid>
                                <Grid item xs={5}>
                                    <Paper className={classes.paper2}>Employees</Paper>
                                </Grid>
                                <Grid item xs={5}>
                                    <Paper className={classes.paper3}>Planned Hours</Paper>
                                </Grid>
                                <Grid item xs={5}>
                                    <Paper className={classes.paper4}>Actual Hours</Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        {chartvalue &&
                            <Grid item xs={12} sm={12} md={6}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses', 'Profit'],
                                        ['2014', 1000, 400, 200],
                                        ['2015', 1170, 460, 250],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                    ]}
                                    options={{
                                        // Material design options
                                        chart: {
                                            title: 'Company Performance',
                                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </Grid>
                        }
                        {chartvalue &&
                            <Grid item xs={12} sm={12} md={6}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses', 'Profit'],
                                        ['2014', 1000, 400, 200],
                                        ['2015', 1170, 460, 250],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                    ]}
                                    options={{
                                        // Material design options
                                        chart: {
                                            title: 'Company Performance',
                                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </Grid>
                        }
                        {chartvalue &&
                            <Grid item xs={12} sm={12} md={6}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Year', 'Sales', 'Expenses', 'Profit'],
                                        ['2014', 1000, 400, 200],
                                        ['2015', 1170, 460, 250],
                                        ['2016', 660, 1120, 300],
                                        ['2017', 1030, 540, 350],
                                    ]}
                                    options={{
                                        // Material design options
                                        chart: {
                                            title: 'Company Performance',
                                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </Grid>
                        }
                        {!chartvalue &&
                            <Grid item xs={12} sm={12} md={6}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </Grid>
                        }
                        {!chartvalue &&
                            <Grid item xs={12} sm={12} md={6}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </Grid>
                        }
                        {!chartvalue &&
                            <Grid item xs={12} sm={12} md={6}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </Grid>
                        }
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }

}

//export default Dashboard;
export default withStyles(styles)(Dashboard);