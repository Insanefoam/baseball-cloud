import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "routes/Login";
import Registration from "routes/Registration";
import ForgotPassword from "routes/ForgotPassword";
import Profile from "routes/Profile";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/forgotpassword">
        <ForgotPassword />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default App;
