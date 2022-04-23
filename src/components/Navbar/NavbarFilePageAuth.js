import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchQueryRequest, searchQueryType } from "../../actions";
import { SimpleBarLinesIcon, RasteroIcon, Logo } from "../Icons";
import { Badge, Input } from "antd";

import "./NavbarFilePageAuth.scss";

const NavbarFilePageAuth = ({ searchRequest, searchQueryType, checkedOutTrailsCount, query }) => {
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
        <Input
          placeholder="Ask any question. I’ll will try my best to find the answer!"
          onChange={e => searchQueryType({ query: e.target.value })}
          onPressEnter={e => {
            searchRequest({ query: e.target.value });
          }}
        />
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
  filters: state.filtersWrapper.filters,
  query: state.filtersWrapper.filters.query,
  checkedOutTrailsCount: state.trailsWrapper.trails.length
});

const actionCreators = {
  searchRequest: searchQueryRequest,
  searchQueryType
};
export default connect(mapStateToProps, actionCreators)(NavbarFilePageAuth);
