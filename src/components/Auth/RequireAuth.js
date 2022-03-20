import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, redirectTo, isAuthUser }) => {
  return isAuthUser ? children : <Navigate to={redirectTo} />;
};

const mapStateToProps = state => ({
  isAuthUser: state.userWrapper.isAuthUser
});

export default connect(mapStateToProps)(RequireAuth);