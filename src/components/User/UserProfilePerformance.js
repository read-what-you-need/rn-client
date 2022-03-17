import React from "react";
import "./UserProfilePerformance.scss";
import { LinesReadIcon, BooksExploredIcon, TrailsCreatedIcon } from "../Icons";

const UserProfilePerformance = () => {
  return (
    <div className="user-profile-performance">
      <div className="user-profile-performance-header">
        <span className="user-profile-performance-header-text">Reading stats</span>
      </div>
      <div className="user-profile-performance-metrics">
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <LinesReadIcon />
            <span className="user-profile-performance-item-info-number">10.4k</span>
          </div>
          <div className="user-profile-performance-item-info-text push-below">Total lines liked</div>
        </div>
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <TrailsCreatedIcon />
            <span className="user-profile-performance-item-info-number">16</span>
          </div>
          <div className="user-profile-performance-item-info-text">Trails created</div>
        </div>
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <BooksExploredIcon />
            <span className="user-profile-performance-item-info-number">24</span>
          </div>
          <div className="user-profile-performance-item-info-text">Books explored</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePerformance;
