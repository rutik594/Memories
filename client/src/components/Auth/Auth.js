import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AUTH } from "../../constants/actionTypes";
import {
  Avatar,
  Button,
  Typography,
  Grid,
  Paper,
  Container,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import {signUp,signIn} from '../../actions/auth'
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
   const [form, setForm] = useState(initialState);
  const classes = useStyles();
  const history = useHistory();
  const state = null;
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
     dispatch(signUp(form,history))
    }
    else {
      dispatch(signIn(form,history))
    }
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleShowPassword =  () => setShowPassword(!showPassword);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = (err) => {
    console.log(err);
  };
  return (
    <Container component="main" className={classes.container} maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.Avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1">
          {isSignup ? "Signup" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2} xs={6} md={12}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="firstname"
                  handleChange={handleChange}
                  autoFocus
                  half
                />{" "}
                <Input
                  name="lastName"
                  label="lastname"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}

            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              autoFocus
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              autoFocus
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="confirmPassword"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.submit}
          >
            {isSignup ? "Signup" : "Signin"}
          </Button>
          <GoogleLogin
            clientId="859489481080-2nhtoi32p6mvmpjnueergfsgi0i3cmbv.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
