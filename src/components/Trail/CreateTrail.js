import React from "react";
import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Breadcrumb } from "antd";
import ItemTrail from "./ItemTrail";
import { Input, Row, Col } from "antd";

import "./CreateTrail.scss";

const CreateTrail = ({ trails }) => {
  const navigate = useNavigate();
  return (
    <div className="create-trail-wrapper">
      <Row>
        <Col span={6} className="trail-column-back">
          <button className="push-button not-selected">
            <span
              className="save-button-text"
              onClick={() => {
                navigate(-1);
              }}>
              Back
            </span>
          </button>
        </Col>
        <Col span={12} className="trail-column-center">
          <div className="trail-title-header">
            <Input
              placeholder="Give a title to your Trail..."
              size="large"
              onChange={e => {
                console.log(e.target.value);
              }}
            />
          </div>

          <div className="trail-list-wrapper">
            {trails.map(trail => (
              <ItemTrail trail={trail} />
            ))}
          </div>
        </Col>
        <Col span={6} className="trail-column-save">
          <button className="push-button primary">
            <span className="save-button-text">Save</span>
          </button>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  trails: state.trailsWrapper.trails
});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(CreateTrail);
