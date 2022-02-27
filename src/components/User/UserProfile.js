import React from "react";
import "./UserProfile.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { PencilEditIcon } from "../Icons";
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-wrapper">
        <Row>
          <div className="user-profile-overview-wrapper">
            <div className="user-profile-overview-header">
              <span className="user-profile-overview-header-text">Overview</span>
            </div>
            <div className="user-profile-overview-form">
              <div className="user-profile-overview-form-fields">
                <span className="user-profile-overview-form-field-label">name</span>
                <span className="user-profile-overview-form-field-value">username</span>

                <span className="user-profile-overview-form-field-label">email</span>
                <span className="user-profile-overview-form-field-value">email</span>

                <span className="user-profile-overview-form-field-label">joined</span>
                <span className="user-profile-overview-form-field-value">date</span>
              </div>
              <div className="user-profile-overview-user-image-wrapper">
                <div></div>
                <div className="user-profile-overview-user-image-button">
                  <button className="push-button not-selected">
                    <PencilEditIcon />
                    Edit profile
                  </button>
                </div>
                <div className="user-profile-overview-user-image">
                  <div className="circle">
                    <span className="user-profile-image-circle-text">Upload</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Col span={8} className="tags-column">
            Your performance
          </Col>
          <Col span={8}></Col>
          <Col span={4}>
            <div className="user-activity-cards">
              <Link  key="book" to={`/books`}>
                <div className="user-activity-card">
                  <span className="user-activity-card-text">Your books</span>
                </div>
              </Link>
              <Link  key="trail" to={`/trail/list`}>
                <div className="user-activity-card">
                  <span className="user-activity-card-text">Your trails</span>
                </div>
              </Link>
              <Link  key="bookmarks" to={`/bookmarks`}>
                <div className="user-activity-card">
                  <span className="user-activity-card-text">Bookmarks</span>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
