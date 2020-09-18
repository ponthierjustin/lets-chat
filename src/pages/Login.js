import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { signin } from "../utils/auth";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/Navbar.js";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "contain",
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "'Oswald', sans-serif",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password).catch((err) => {
      setError(err.message);
    });
  };

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <Box component="span" m={2} p={2}>
            <Typography className={classes.title} variant="h3">
              Welcome back!
            </Typography>
            <Typography className={classes.title} variant="h5">
              Log in to access Let's Chat
            </Typography>
          </Box>
          <Box component="span" m={1} p={2}>
            <div className={classes.title}>
              <TextField
                label="Email"
                placeholder="Email"
                fullWidth
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
                id="standard-required"
              />
            </div>
          </Box>
          <div className={classes.title}>
            <TextField
              fullWidth
              label="Password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              required
              id="standard-required"
            />
          </div>
          <Box component="span" m={1}>
            <div className={classes.title}>
              {error ? (
                <Typography
                  className={classes.title}
                  variant="h6"
                  style={{ color: "red" }}
                >
                  {error}
                </Typography>
              ) : null}
              <Button size="large" className={classes.title} type="submit">
                Login
              </Button>
            </div>
          </Box>
          <Typography className={classes.title}>
            Not signed up yet? <Link to="/signup">Signup</Link>
          </Typography>
        </form>
      </Grid>
    </div>
  );
};

export default Login;
