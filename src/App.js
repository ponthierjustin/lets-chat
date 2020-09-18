import React, { useState, useEffect, Component } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { auth } from "./services/firebase";

function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login"/* , state: { from: location }  */}}
          />
        )
      }
    />
  );
}
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  );
}

function App() {
  const [user, setUser] = useState({ authenticated: false });
  /* const [authenticated, setAuthenticated] = useState(false); */
  const [loading, setLoading] = useState(true);

  function onAuthStateChange() {
    return auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
        setUser({ authenticated: true });
        setLoading({ loading: false });
      } else {
        console.log("user is not logged in");
        setUser({ authenticated: false });
        setLoading({ loading: false });
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return loading === true ? (
    <h2>Loading...</h2>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <AuthenticatedRoute
          path="/chat"
          authenticated={user.authenticated}
          component={Chat}
        ></AuthenticatedRoute>
        <PublicRoute
          path="/signup"
          authenticated={user.authenticated}
          component={Signup}
        ></PublicRoute>
        <PublicRoute
          path="/login"
          authenticated={user.authenticated}
          component={Login}
        ></PublicRoute>
      </Switch>
    </Router>
  );
}

export default App;
