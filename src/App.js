import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import Registration from "pages/Registration";

const App = () => {
  return (
    <div>
      <Switch>
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
