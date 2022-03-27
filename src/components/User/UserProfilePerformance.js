import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import userApi from "../../api/user";

import "./UserProfilePerformance.scss";
import { LinesReadIcon, BooksExploredIcon, TrailsCreatedIcon } from "../Icons";

const UserProfilePerformance = ({ userId }) => {
  const [likedLinesCount, setLikedLinesCount] = useState([]);
  const [trailsCreatedCount, setTrailsCreatedCount] = useState([]);
  const [booksUploaedCount, setBooksUploaedCount] = useState([]);

  useEffect(() => {
    userApi.getUserLikedCount({ userId }).then(({ count }) => {
      setLikedLinesCount (count );
    });
    userApi.getUserBookUploadCount({ userId }).then(({ count }) => {
      setBooksUploaedCount(count);
    });
    userApi.getUserTrailCount({ userId }).then(({ count }) => {
      setTrailsCreatedCount(count);
    });
  }, []);
  return (
    <div className="user-profile-performance">
      <div className="user-profile-performance-header">
        <span className="user-profile-performance-header-text">Reading stats</span>
      </div>
      <div className="user-profile-performance-metrics">
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <LinesReadIcon />
            <span className="user-profile-performance-item-info-number">{likedLinesCount}</span>
          </div>
          <div className="user-profile-performance-item-info-text push-below">Total lines liked</div>
        </div>
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <TrailsCreatedIcon />
            <span className="user-profile-performance-item-info-number">{trailsCreatedCount}</span>
          </div>
          <div className="user-profile-performance-item-info-text">Trails created</div>
        </div>
        <div className="user-profile-performance-item">
          <div className="user-profile-performance-item-info">
            <BooksExploredIcon />
            <span className="user-profile-performance-item-info-number">{booksUploaedCount}</span>
          </div>
          <div className="user-profile-performance-item-info-text">Books explored</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.userWrapper.user.id
});
const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(UserProfilePerformance);
