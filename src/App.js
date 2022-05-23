import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import RegisterPage from "./components/auth/register/RegisterPage";
import PublicRoute from "./shared/routes/routes/PublicRoute";
import ROUTES from "./shared/routes/routes";

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <ul>
            <li>
              <Link to={`${ROUTES.REGISTER}`}>Register</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <PublicRoute path={`${ROUTES.REGISTER}`}>
              <RegisterPage />
            </PublicRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
