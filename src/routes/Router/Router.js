import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "routes/Login";
import Registration from "routes/Registration";
import ForgotPassword from "routes/ForgotPassword";
import Profile from "routes/Profile";
import { useSelector } from "react-redux";
import Leaderboard from "routes/Leaderboard";

const Router = () => {
  const userInfo = useSelector((state) => state.auth);

  if (userInfo.token) {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>
        <Route path="/login">
          <Redirect to="/profile" />
        </Route>
        <Route path="/registration">
          <Redirect to="/profile" />
        </Route>
        <Route path="/forgotpassword">
          <Redirect to="/profile" />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
    );
  } else {
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
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    );
  }
};

export default Router;
