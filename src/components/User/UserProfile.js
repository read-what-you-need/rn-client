import React from "react";
import "./UserProfile.scss";
import { Row, Col } from "antd";
import UserProfileOverview from "./UserProfileOverview";
import UserProfileActivityCards from "./UserProfileActivityCards";
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-wrapper">
        <Row>
          <UserProfileOverview/>
        </Row>
        <Row>
          <Col span={8} className="tags-column">
            Your performance
          </Col>
          <Col span={8}></Col>
          <Col span={4}>
            <UserProfileActivityCards/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
