import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectIsAuthenticated } from "../../../redux/Selectors/auth";
import ROUTES from "../routes";

function PublicRoute({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return <>{isAuthenticated ? <Redirect to={ROUTES.DEFAULT} /> : children}</>;
}

export default PublicRoute;
