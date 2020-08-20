import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "navigation/routes/Login";
import Registration from "navigation/routes/Registration";
import ForgotPassword from "navigation/routes/ForgotPassword";
import Profile from "navigation/routes/Profile";
import { useSelector } from "react-redux";
import Leaderboard from "navigation/routes/Leaderboard";
import Network from "navigation/routes/Network";
import { validateToken } from "api";
import { initUser } from "store/actions";

const Router = () => {
  const userInfo = useSelector((state) => state.auth);
  const [isValidating, setValidating] = useState(true);
  useEffect(() => {
    validateToken().then((res) => {
      initUser(res.Uid, res.Client, res["Access-Token"]);
      setValidating(!isValidating);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isValidating && userInfo.token) {
    return (
      <Switch>
        <Route exact path="/">
          <Leaderboard />
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
        <Route path="/network">
          <Network />
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
