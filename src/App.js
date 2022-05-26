import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RegisterPage from "./components/auth/register/RegisterPage";
import LoginPage from "./components/auth/login/LoginPage";
import HomePage from "./components/home/HomePage";
import PublicRoute from "./shared/routes/routes/PublicRoute";
import PrivateRoute from "./shared/routes/routes/PrivateRoute";
import ROUTES from "./shared/routes/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <PrivateRoute path={ROUTES.DASHBOARD} component={HomePage} />
            <PublicRoute exact path={ROUTES.LOGIN} component={LoginPage} />
            <PublicRoute
              exact
              path={ROUTES.REGISTER}
              component={RegisterPage}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
