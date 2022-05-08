import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SimpleBarLinesIcon, RasteroIcon, Logo } from "../Icons";
import { Badge } from "antd";

import FileSearchInput from "../File/FileSearchInput";

import "./NavbarFilePageAuth.scss";

const NavbarFilePageAuth = ({ checkedOutTrailsCount }) => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/recent")}>
        <Logo />
      </span>
      <div className="nav-central-action-wrapper">
        <div className="nav-central-action-logo">
          <RasteroIcon />
        </div>
        <FileSearchInput />
      </div>
      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button">
          <Badge count={checkedOutTrailsCount}>
            <Link to={`/trail/create`}>
              <button className="push-button-icon-only secondary shorten-width">
                <SimpleBarLinesIcon />
              </button>
            </Link>
          </Badge>
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  checkedOutTrailsCount: state.trailsWrapper.trails.length
});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(NavbarFilePageAuth);
