import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchQueryRequest, getSelectedLinesCount } from "../../actions";
import { SimpleBarLinesIcon, GreenCheckIcon, RasteroIcon, Logo } from "../Icons";
import { Badge, Input } from "antd";
import "./NavbarFilePageAuth.scss";

const NavbarFilePageAuth = ({ searchRequest, selectedLinesCount }) => {
  console.log(selectedLinesCount)
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/")}>
        <Logo />
      </span>
      <div className="nav-central-action-wrapper">
        <div className="nav-central-action-logo">
          <RasteroIcon />
        </div>
        <Input
          placeholder="Ask any question. I’ll will try my best to find the answer!"
          onPressEnter={e => {
            searchRequest({ query: e.target.value });
          }}
        />
      </div>
      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button">
          <Badge count={selectedLinesCount}>
            <button className="push-button-icon-only secondary shorten-width">
              <SimpleBarLinesIcon />
            </button>
          </Badge>
        </span>
        <button className="push-button-icon-only primary">
          <GreenCheckIcon />
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  filters: state.filtersWrapper.filters,
  selectedLinesCount: getSelectedLinesCount(state)
});

const actionCreators = {
  searchRequest: searchQueryRequest
};
export default connect(mapStateToProps, actionCreators)(NavbarFilePageAuth);
