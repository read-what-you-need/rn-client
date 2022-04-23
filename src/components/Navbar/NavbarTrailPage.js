import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Icons";

import "./NavbarHomePageAuth.scss";

const NavbarFilePageAuth = () => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/recent")}>
        <Logo />
      </span>
      <div className="hero-title">Your trails</div>
      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button" onClick={() => navigate("/recent")}>
          <button className="push-button primary">
            <span className="button-text-primary">Home</span>
          </button>
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(NavbarFilePageAuth);
