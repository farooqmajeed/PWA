import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({isAuthenticated, ...props }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />
  }
  return <Route {...props}/>;
};

export default PrivateRoute;
