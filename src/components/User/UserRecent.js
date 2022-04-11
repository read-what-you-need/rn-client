import React from "react";
import { Tabs } from "antd";
import UserRecentCarousel from "./UserRecentCarousel";
import "./UserRecent.scss";

const { TabPane } = Tabs;
const UserRecent = () => {
  return (
    <div className="user-recent container">
      <div className="row">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Continue reading" key="1">
            <UserRecentCarousel />
          </TabPane>
          <TabPane tab="Trails" key="2">
            <UserRecentCarousel />
          </TabPane>
          <TabPane tab="Your uploads" key="3">
            <UserRecentCarousel />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default UserRecent;
