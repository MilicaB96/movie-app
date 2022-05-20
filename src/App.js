import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <PublicRoute path='/register'>
              <RegisterPage />
            </PublicRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
