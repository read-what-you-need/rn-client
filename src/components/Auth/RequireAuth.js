import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, redirectTo }) => {
  return localStorage.getItem('token') ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
