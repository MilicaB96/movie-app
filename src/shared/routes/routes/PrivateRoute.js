import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { selectIsAuthenticated } from "../../../redux/Selectors/auth";
import ROUTES from "../routes";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.LOGIN} />
        );
      }}
    />
  );
}

export default PrivateRoute;
