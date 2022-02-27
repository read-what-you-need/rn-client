import React from "react";
import "./UserProfilePerformance.scss";
import { LinesReadIcon, BooksExploredIcon, PublicationCoinsIcon, TrailsCreatedIcon } from "../Icons";

const UserProfilePerformance = () => {
  return (
    <div className="user-profile-performance">
      <div className="user-profile-performance-header">
        <span className="user-profile-performance-header-text">Your performance</span>
      </div>
      <div className="user-profile-performance-metrics">
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <LinesReadIcon />
            <span className="user-profile-performance-item-info-number">10</span>
          </div>
          <div className="user-profile-performance-item-info-text">Total lines read</div>
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
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <PublicationCoinsIcon />
            <span className="user-profile-performance-item-info-number">2</span>
          </div>
          <div className="user-profile-performance-item-info-text">Publication tokens</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePerformance;
