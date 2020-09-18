import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "'Oswald', sans-serif",
  },
  logo: {
    textAlign: "left",
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: "'Oswald', sans-serif",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Toolbar variant="dense">
        <Typography variant="h5" className={classes.logo}>
          <a href='/'>
          <img
            width="100"
            height="100"
            src="https://document-export.canva.com/DAEH-qy9kNI/248/thumbnail/sgdWauXphz0CpQ0aykCpbw-0001-10927126393.png"
          />
          </a>
        </Typography>
        <Typography variant="h5" className={classes.title}>
          Let's Chat
        </Typography>
      </Toolbar>

    </div>
  );
};

export default Navbar;
