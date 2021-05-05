import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Profile from "./pages/profile";

import './App.css';
import api from "./utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.currentUser()
      .then((user) => {
        if (user) {
          setIsLoggedIn(true);
        }
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path ="/signup" component={SignUp} />
          <Route path = "/login" component={Login} />
          <Route path = "/profile">
            { isLoggedIn ? <Profile /> : <Redirect to="/login" /> }
          </Route>
          <Route component={SignUp} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
