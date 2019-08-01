import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import Person from '@material-ui/icons/AccountBoxOutlined';
import PasswordIcon from '@material-ui/icons/LockOutlined';
import EmailIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneIcon from '@material-ui/icons/PhoneOutlined';
import NickIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CssTextFieldrounded, useStyles } from '../../css/usercss';
import { withStyles,makeStyles, useTheme,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { userActions } from '../../store/actions/userActions'


class UserInsideDrawer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                password: '',
                confirmpassword: '',
                nickName: '',
                email: '',
                contact: '',
                employeeno: '',
                role: '',
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.email && user.firstName && user.employeeno && user.nickName && user.contact) {
            dispatch(userActions.register(user));
        }
    }


    render() {

        const { classes, emp,setOpenInside, action, registering, error, success } = this.props;
        const { user, submitted } = this.state;
        console.log("test",success);
        var checkpwd = true
        if (user.password != user.confirmpassword) {
            checkpwd = false
        }

        var check = false;
        if (error != undefined && error != null) {
            check = true;
        }

        return (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={setOpenInside}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.drawerHeader}>
                        <Grid container alignItems="right">

                            <Button
                                type="submit"
                                variant="outlined"
                                className={classes.button}
                                name="myform"
                            >
                                <DoneIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                                Save
                </Button>
                        </Grid>
                        <Grid container justify="flex-end" alignItems="left">
                            <IconButton >
                                <Close onClick={action} />
                            </IconButton>
                        </Grid>


                    </div>

                    <Divider classes={{ root: classes.divider }} />
                    
                        {check &&
                                <div className={classes.alertdanger}>{error}</div>
                        }
                        { success &&
                        <div className={classes.alertSucsess}>{success}</div>
                        }
                    <Grid className={classes.container + ' MuiGrid-spacing-xs-3'} spacing={3}>
                        <Grid item xs={12}>
                            <CssTextFieldrounded
                                //className={classes.datetextField}
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Email"
                                name="email"
                                type="email"
                                value={emp.Email}
                                onChange={this.handleChange}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {submitted && !user.email &&
                                <div className={classes.waringmessage}>Email is required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                // className={classes.datetextField}
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="First Name"
                                name="firstName"
                                value={emp.First_Name}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {submitted && !user.firstName &&
                                <div className={classes.waringmessage}>First is required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Last Name"
                                name="lastName"
                                value={emp.Last_Name}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Employee No"
                                name="employeeno"
                                value={emp.Emp_No}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {submitted && !user.employeeno &&
                                <div className={classes.waringmessage}>EmployessNo required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Role"
                                name="role"
                                value={emp.Emp_Role}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {submitted && !user.role &&
                                <div className={classes.waringmessage}>Role required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                // className={classes.datetextField}
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Password"
                                type="password"
                                name="password"
                                value={emp.Password}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PasswordIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {submitted && !checkpwd &&
                                <div className={classes.waringmessage}>Password missmatch</div>
                            }
                            {submitted && !user.password && checkpwd &&
                                <div className={classes.waringmessage}>Password required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                //className={classes.datetextField}
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Confirm Password"
                                name="confirmpassword"
                                value={user.confirmpassword}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {submitted && !user.confirmpassword && checkpwd &&
                                <div className={classes.waringmessage}>Password required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                // className={classes.datetextField}
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Nick Name"
                                name="nickName"
                                value={emp.Nick_Name}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <NickIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                             {submitted && !user.nickName && checkpwd &&
                                <div className={classes.waringmessage}>NickName required</div>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssTextFieldrounded
                                //className={classes.datetextField}
                                variant="outlined"
                                id="input-with-icon-textfield"
                                label="Contact No"
                                name="contact"
                                value={emp.Contact_No}
                                onChange={this.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                             {submitted && !user.contact && checkpwd &&
                                <div className={classes.waringmessage}>Contact required</div>
                            }
                        </Grid>
                    </Grid>
                </form>
            </Drawer>
        );
    }

}

const mapStateToProps = state => ({
    registering: state.registration,
    success: state.registration.user,
    error: state.registration.error
});


export default withStyles(useStyles)(connect(mapStateToProps)(UserInsideDrawer));  