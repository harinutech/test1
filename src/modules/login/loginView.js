import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import imgbg from '../../images/loginbg.jpg'
import { fetchlogondetails } from '../../store/actions/loginAction'
import { userActions } from '../../store/actions/userActions'

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(' + imgbg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    backgroundColor: '#ffdce0',
    color: '#86181d',
    borderRadius: '4px',
    borderStyle: 'solid',
    borderWidth: '1px',
    fontSize: '13px',
    borderColor: 'rgba(27,31,35,.15)',
    boxSizing: 'border-box',
  },
  warnblock: {
    color: 'red',
    textAlign: '-webkit-auto'
  }
});




class Login extends Component {
  // export default function SignInSide() {
  //const classes = useStyles();

  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }


  render() {
    const { classes, loginDetails, loggingIn, error } = this.props;
    const { email, password, submitted } = this.state;

    var check = false;
    if (error != undefined && error != null) {
      check = true;
    }

    const style = {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      border: 0,
      borderRadius: 3,
      //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',

    };
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar style={style} className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>
            <form name="form" onSubmit={this.handleSubmit} className={classes.form}>
              <div className='flash flash-full flash-error'>
                {check &&
                  <div className={classes.error}><p>{error}</p></div>
                }
              </div>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                // value={loginDetails.Email}
                autoFocus
                value={email}
                onChange={this.handleChange}
              />
              {submitted && !email && !check &&
                <div className={classes.warnblock}>Email is required</div>
              }
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handleChange}
              />
              {submitted && !password && !check &&
                <div className={classes.warnblock}>Password is required</div>
              }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={style}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  fetchlogondetails: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  // loginDetails:state.loginDetails.datas,
  loggingIn: state.authentication,
  error: state.authentication.error
});
export default withStyles(styles)(connect(mapStateToProps, null)(Login));

