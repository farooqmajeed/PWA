import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Next from '@material-ui/icons/NavigateNext';
import TextLoop from "react-text-loop";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import lunch from '../../images/Houseit-logo/its-all-about-people.png'
import { connect } from "react-redux"
import firebase,{database} from'../../config'
import { from } from 'rxjs';
import { AuthMiddleware } from '../../store/middlewares';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '75vw',
    marginLeft: '15vw',
    marginTop: '13vh',
    height: 'auto',
    background: 'NONE',
    textAlign: 'center',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: '60vw',
      marginLeft: '20vw',
      marginTop: '13vh',
    },
  },
  text: {
    padding: 25
  },
  info: {
    padding: 25,
    color: 'white'
  },
  margin: {
    padding: 5,
    height: 80,
    width: '90%'
  },
  button: {
    background: 'rgb(20, 29, 113)',
    height: 50,
    color:'white'
  },
  singUpTitle: {
    width: '50%',
    height: '72vh ',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    },
  },
  action: {
    width: '100%',
    height: ' 100%',
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  }
});
const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
class UserRegistry extends Component {
  constructor() {
    super()
    this.state = {
      value: 'one',
      email:'',
      password:'',
      Name:''
    };
  }

  handleChange = (event) => {
    const {name,value}  = event.target
    this.setState({ [name]:value });
  };
  handleChangeTab = (event, value) => {
    this.setState({ value });
  };
  callSignUp=()=>{
    const {Name,password,email} = this.state
  this.props.DoSignUp({Name,password,email})
  }
  callSignIn=()=>{
    const {Name,password,email} = this.state
  this.props.DoSignIn({password,email})
  }
  render() {
    const { classes, history, theme } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.singUpTitle}>
            {/* <Typography variant="h5" className={classes.info} >
              Plan your activities and control your  progress online
      </Typography> */}
            <img src={lunch} />
          </div>
          <div className={classes.action}>
            <AppBar position="static" color="default">

              <Tabs value={value} onChange={this.handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth">

                <Tab value="one" label="Sign In" style={{ background: 'rgb(20, 29, 113)', color: 'white' }} />
                <Typography style={{ fontSize: '35px', background: 'rgb(20, 29, 113)', color: 'white' }} >
                  &
            </Typography>
                <Tab value="two" label="Sigin Up" style={{ background: 'rgb(20, 29, 113)', color: 'white' }} />

              </Tabs>
            </AppBar>

            {value === 'one'
              && <TabContainer>

                <Card >
                  <Typography variant="h5" className={classes.text} >
                    <TextLoop>
                      <Typography variant="h5" className={classes.text} >Welcome</Typography>
                      <Typography variant="h5" className={classes.text} >Why are You</Typography>
                      <Typography variant="h5" className={classes.text} >Waiting For</Typography>
                      <Typography variant="h5" className={classes.text} >Get Sign in</Typography>
                    </TextLoop>
                  </Typography>
                  <div style={{height:'70px'}} ></div>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Enter User Name/Email</InputLabel>
                    <Input
                      fullWidth
                      name='email'
                      onChange={this.handleChange}
                      type="email"
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Enter Password</InputLabel>
                    <Input
                      type={'password'}
                      name='password'
                      onChange={this.handleChange}
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <Visibility />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div>
                    <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={() => this.callSignIn()}>
                      Sign IN
        <Next />
                    </Button>
                  </div>
                </Card>
              </TabContainer>}

            {value === 'two' && <TabContainer>

              <Card>
                <Typography variant="h5" className={classes.text} >
                  <TextLoop>
                    <Typography variant="h5" className={classes.text} >Welcome</Typography>
                    <Typography variant="h5" className={classes.text} >To Enjoy</Typography>
                    <Typography variant="h5" className={classes.text} >Your Dream</Typography>
                    <Typography variant="h5" className={classes.text} > SignUp Now</Typography>
                  </TextLoop>
                </Typography>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">Enter User Name</InputLabel>
                  <Input
                    fullWidth
                    name='Name'
                      onChange={this.handleChange}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">Enter Email</InputLabel>
                  <Input
                    fullWidth
                    id="input-with-icon-adornment"
                    name='email'
                    type='email'
                      onChange={this.handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">Enter Password</InputLabel>
                  <Input
                  name='password'
                  onChange={this.handleChange}
                    type={'password'}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <Visibility />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div>
                  <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={() =>this.callSignUp()}>
                    Sign Up
        <Next />
                  </Button>
                </div>
              </Card>

            </TabContainer>}

          </div>
        </Paper>
      </div>
    );
  }
}

UserRegistry.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state.Auth)
    return {
      state: state.Auth,
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      DoSignUp: (payload) =>{dispatch( AuthMiddleware.SignUp(payload))},
      DoSignIn: (payload) =>{dispatch( AuthMiddleware.SignIn(payload))},
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserRegistry));