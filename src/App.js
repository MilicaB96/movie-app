import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RegisterPage from "./components/auth/register/RegisterPage";
import PublicRoute from "./shared/routes/routes/PublicRoute";
import ROUTES from "./shared/routes/routes";
import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/auth/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <PublicRoute>
              <Route path={ROUTES.REGISTER} component={RegisterPage} />
              <Route path={ROUTES.LOGIN} component={LoginPage} />
            </PublicRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
