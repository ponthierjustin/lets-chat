import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/Navbar.js";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100%",
    maxWidth: 400,
  },
  paperUser: {
    height: "100%",
    maxWidth: 400,
    alignContent: "right",
  },
  textUser: {
    padding: theme.spacing(1),
    textAlign: "right",
    fontFamily: "'Oswald', sans-serif",
  },
  text: {
    padding: theme.spacing(1),
    fontFamily: "'Oswald', sans-serif",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");

  function writeChat() {
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);

    db.ref("chats").push({
      content: content,
      timestamp: timestamp,
      uid: user.uid,
    });
  }

  function getChatData() {
    db.ref("chats").on("value", (snapshot) => {
      let currentChat = [];
      snapshot.forEach((snap) => {
        currentChat.push(snap.val());
      });
      setChats(currentChat);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    writeChat();
    setContent("");
  };

  useEffect(() => {
    getChatData();
  }, []);

  return (
    <div>
      <NavBar />
      <Grid
        container /* justify="center" alignItems="center"  
         direction="column"  */
      >
        <Grid item xs={12} sm={4}>
          {/* <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container> */}
          <div>
            <strong>{user.email}</strong>
          </div>
          <button onClick={() => auth().signOut()}>Sign Out</button>
        </Grid>
        <Grid item xs={12} sm={8}>
          {chats.map((chat) => (
            <div>
              {user.uid === chat.uid ? (
                <List className={classes.textUser} style={{maxHeight: '100%', overflow: 'auto'}}>
                  <Typography variant="h5" className={classes.textUser}>
                    {chat.content}
                  </Typography>
                  <Typography variant="caption" className={classes.textUser}>
                    {user.email}
                  </Typography>

                  <Typography className={classes.textUser} variant="caption">
                    <Moment format="YYYY/MM/DD HH:mm" unix>
                      {chat.timestamp}
                    </Moment>
                  </Typography>
                </List>
              ) : (
                <div>
                  <Typography variant="h5" className={classes.text}>
                    {chat.content}
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    {user.uid === chat.uid}{chat.uid}
                  </Typography>
                  <Typography variant="caption">
                    <Moment
                      className={classes.text}
                      format="YYYY/MM/DD HH:mm"
                      unix
                    >
                      {chat.timestamp}
                    </Moment>
                  </Typography>
                </div>
              )}
            </div>
          ))}
             <Container>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              ></TextField>
              <button type="submit">Send</button>
            </form>
            <AppBar position="fixed" color="inherint" className={classes.appBar}>
        <Toolbar>
        <Container>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              ></TextField>
              <button type="submit">Send</button>
            </form>
        </Container>
        </Toolbar>
      </AppBar>
      </Container>
          <Grid
            container
            /* direction="column" */
            /* justify="center"
            alignItems="center" */
          >
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              ></TextField>
              <button type="submit">Send</button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
