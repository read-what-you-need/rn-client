import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemTrail from "./ItemTrail";
import { Input, Row, Col, notification } from "antd";
import { List, arrayMove } from "react-movable";
import { updateReorderedListOfTrails, updateTrailTitle, saveTrail } from "../../actions";

import "./CreateTrail.scss";

const CreateTrail = ({ trails, updateReorderedListOfTrails, updateTrailTitle, saveTrail }) => {
  const navigate = useNavigate();
  return (
    <div className="create-trail-wrapper">
      <Row>
        <Col span={6} className="trail-column-back">
          <button
            className="push-button not-selected"
            onClick={() => {
              navigate(-1);
            }}>
            <span className="save-button-text">Back</span>
          </button>
        </Col>
        <Col span={12} className="trail-column-center">
          <div className="trail-title-header">
            <Input placeholder="Give a title to your Trail..." size="large" onChange={e => updateTrailTitle({ trailTitle: e.target.value })} />
          </div>

          <List
            values={trails}
            lockVertically={true}
            onChange={({ oldIndex, newIndex }) => updateReorderedListOfTrails({ trails: arrayMove(trails, oldIndex, newIndex) })}
            renderList={({ children, props }) => {
              return (
                <div className="trail-list-wrapper" {...props}>
                  {children}
                </div>
              );
            }}
            renderItem={({ value, props, isDragged, isSelected }) => {
              return (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    padding: "12px",
                    cursor: isDragged ? "grabbing" : "grab",
                    borderRadius: "5px",
                    backgroundColor: isDragged || isSelected ? "#EEE" : "#FFF"
                  }}>
                  <ItemTrail trail={value} />
                </div>
              );
            }}
          />
        </Col>
        <Col span={6} className="trail-column-save">
          <button
            className="push-button primary"
            onClick={() =>
              saveTrail()
                .then(trail => {
                  openNotificationWithIcon("success", "Trail creation successful!");
                  navigate(`/trail/${trail.trailId}`);
                })
                .catch(err => {
                  openNotificationWithIcon("error", "Trail creation warning!", err.message);
                })
            }>
            <span className="save-button-text">Save</span>
          </button>
        </Col>
      </Row>
    </div>
  );
};
const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description
  });
};
const mapStateToProps = state => ({
  trails: state.trailsWrapper.trails
});

const actionCreators = { updateReorderedListOfTrails, updateTrailTitle, saveTrail };
export default connect(mapStateToProps, actionCreators)(CreateTrail);
