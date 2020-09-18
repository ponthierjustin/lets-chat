import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../utils/auth";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import NavBar from "../components/Navbar.js";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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

const Signup = () => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password).catch((err) => {
      setError(err.message);
    });
  };

  return (
    <div>
      <NavBar />
      <Grid container direction="column" justify="center" alignItems="center">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Box component="span" m={1} p={2}>
            <Typography className={classes.title} variant="h3">
              Welcome to Let's Chat!
            </Typography>
            <Typography className={classes.title} variant="h4">
              Fill in the form below
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
                Create Account
              </Button>
            </div>
          </Box>

          <Typography className={classes.title}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Grid>
    </div>
  );
};

export default Signup;
