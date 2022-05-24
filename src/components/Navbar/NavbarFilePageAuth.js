import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SimpleBarLinesIcon, RasteroIcon, Logo } from "../Icons";
import { Badge } from "antd";
import useWindowDimensions from "../../libs/useWindowDimensions";
import FileSearchInput from "../File/FileSearchInput";

import "./NavbarFilePageAuth.scss";

const NavbarFilePageAuth = ({ checkedOutTrailsCount, isAuth }) => {
  let navigate = useNavigate();

  const { height, width } = useWindowDimensions();
  const isSmallScreen = width < 700;
  return (
    <div className={`nav-bar-auth-wrapper ${isSmallScreen ? "small-screen" : ""}`}>
      {!isSmallScreen && (
        <span className={`nav-logo `} onClick={() => navigate("/recent")}>
          <Logo />
        </span>
      )}
      <div className={`nav-central-action-wrapper ${isSmallScreen ? "nav-central-action-small" : ""}`}>
        <div className="nav-central-action-logo" onClick={() => navigate("/books/explore")}>
          <RasteroIcon />
        </div>
        <FileSearchInput />
      </div>
      <div className="nav-corner-action-wrapper">
        {isAuth && !isSmallScreen && (
          <span className="nav-primary-action-button">
            <Badge count={checkedOutTrailsCount}>
              <Link to={`/trail/create`}>
                <button className="push-button-icon-only secondary shorten-width">
                  <SimpleBarLinesIcon />
                </button>
              </Link>
            </Badge>
          </span>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  checkedOutTrailsCount: state.trailsWrapper.trails.length,
  isAuth: state.userWrapper?.isAuthUser
});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(NavbarFilePageAuth);
