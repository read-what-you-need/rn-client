import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import UserRecentCarousel from "./UserRecentCarousel";
import "./UserRecent.scss";
import fileApi from "../../api/file";
import trailsApi from "../../api/trail";

const { TabPane } = Tabs;

function normalizeFilesForCarousel(files) {
  return files.map(file => {
    return { id: file.fileId, link: `/file/${file.fileId}`, description: file.name };
  });
}

function normalizeTrailsForCarousel(trails) {
  return trails.map(trail => {
    return { id: trail.trail_id, link: `/trail/${trail.trail_id}`, description: trail.title };
  });
}

const UserRecent = () => {
  const [userRecentFiles, setUserRecentFiles] = useState([]);
  const [userTrails, setUserTrails] = useState([]);
  useEffect(() => {
    fileApi.getRecentUserFiles().then(files => {
      setUserRecentFiles(files);
    });

    trailsApi.listUserTrails({ offset: 0, limit: 10 }).then(trails => {
      setUserTrails(trails);
    });
  }, []);
  return (
    <div className="user-recent container">
      <div className="row">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Continue reading" key="1">
            <UserRecentCarousel data={normalizeFilesForCarousel(userRecentFiles)} />
          </TabPane>
          <TabPane tab="Trails" key="2">
            <UserRecentCarousel data={normalizeTrailsForCarousel(userTrails)} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default UserRecent;
