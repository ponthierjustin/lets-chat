import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { Typography } from "@material-ui/core";
import Signup from "../pages/Signup.js";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  text: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "'Oswald', sans-serif",
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: "'Oswald', sans-serif",
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Navbar />
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          sm={4}
        >
          <Button href="/login">
            <Typography variant="h6" className={classes.button}>
              Login
            </Typography>
          </Button>

          <Typography variant="h6" className={classes.button}>
            or
          </Typography>
          <Button color="default" href="/signup">
            <Typography variant="h6" className={classes.button}>
              Get Started
            </Typography>
          </Button>
        </Grid>
      {/*   <Grid item xs={12} sm={12}>
        <Content />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Home;
