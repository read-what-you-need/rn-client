import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserDetails } from "../../actions";

import "./UserProfileActivityCards.scss";
import "./UserProfileOverview.scss";
const dateFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

const UserProfileOverview = ({ getUserDetails, userDetails }) => {
  useEffect(() => {
    getUserDetails();
  }, []);
  const userJoinedAt = new Date(userDetails.created_at).toLocaleDateString("en-US", dateFormatOptions);
  return (
    <div className="user-profile-overview-wrapper">
      <div className="user-profile-overview-header">
        <span className="user-profile-overview-header-text">Overview</span>
      </div>
      <div className="user-profile-overview-form">
        <div className="user-profile-overview-form-fields">
          <span className="user-profile-overview-form-field-label">name</span>
          <span className="user-profile-overview-form-field-value">{userDetails.username}</span>

          <span className="user-profile-overview-form-field-label">email</span>
          <span className="user-profile-overview-form-field-value">{userDetails.email}</span>

          <span className="user-profile-overview-form-field-label">joined</span>
          <span className="user-profile-overview-form-field-value">{userJoinedAt}</span>
        </div>
        <div className="user-profile-overview-user-image-wrapper">
          <div className="user-profile-overview-user-image">
            <div className="circle">
              <span className="user-profile-image-circle-text">{userDetails.username?.charAt(0)}</span>
            </div>
          </div>
          <div className="user-profile-overview-user-image-button"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userDetails: state.userWrapper.user
});

const actionCreators = {
  getUserDetails
};
export default connect(mapStateToProps, actionCreators)(UserProfileOverview);
