import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Icons";

import "./NavbarFilePageAuth.scss";

const NavbarFilePageAuth = () => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/")}>
        <Logo />
      </span>
      <div className="nav-central-action-wrapper"></div>
    </div>
  );
};
const mapStateToProps = state => ({});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(NavbarFilePageAuth);
