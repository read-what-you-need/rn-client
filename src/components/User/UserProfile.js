import React from "react";
import "./UserProfile.scss";
import { Row, Col } from "antd";
import UserProfileOverview from "./UserProfileOverview";
import UserProfilePerformance from "./UserProfilePerformance";

import UserProfileActivityCards from "./UserProfileActivityCards";
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-wrapper">
        <Row>
          <UserProfileOverview />
        </Row>
        <Row>
          <Col span={12} className="tags-column">
            <UserProfilePerformance />
          </Col>
          <Col span={4}></Col>
          <Col span={4}>
            <UserProfileActivityCards />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
