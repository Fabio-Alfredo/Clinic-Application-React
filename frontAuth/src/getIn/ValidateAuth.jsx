import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Route {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
