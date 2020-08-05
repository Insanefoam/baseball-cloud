import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "routes/Login";
import Registration from "routes/Registration";

const App = () => {
  return (
    <div>
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
      </Switch>
    </div>
  );
};

export default App;
