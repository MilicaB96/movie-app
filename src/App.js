import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RegisterPage from "./components/auth/register/RegisterPage";
import LoginPage from "./components/auth/login/LoginPage";
import MoviePage from "./components/auth/movie/MoviePage";
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
            <PrivateRoute exact path={ROUTES.DASHBOARD} component={MoviePage} />
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
