import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Video from "../assets/videos/chat.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display:'contain',
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Bebas Neue",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div>
        <Typography className={classes.title}>
          <a href='/'>
          <img
   
            src="https://document-export.canva.com/DAEH4fWzjAc/597/thumbnail/343aRW-HCyZ2yP31BpM1hQ-0001-10929828627.png"
          />
          </a>
        </Typography>
    </div>
  );
};

export default Content;
