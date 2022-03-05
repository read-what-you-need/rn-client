import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Breadcrumb } from "antd";
import ItemTrail from "./ItemTrail";
import InputTrail from "./InputTrail";
import { Input, Row, Col } from "antd";
import trailApi from "../../api/trail";

import "./CreateTrail.scss";

const CreateTrail = () => {
  return (
    <div className="create-trail-wrapper">
      <Row>
        <Col span={6} className="tags-column"></Col>
        <Col span={12}>
          <Input
            placeholder="Basic usage"
            size="large"
            onChange={e => {
              console.log(e.target.value);
            }}
          />
          <div className="row trail-header-title">
            <h3>your trail</h3>
          </div>

          <div className="row trail-items">
            <ItemTrail />
          </div>

          <div className="row trail-input-item">
            <InputTrail />
          </div>
        </Col>
        <Col span={6} className="filter-column">
          <Button onClick={() => {}} type="primary">
            Save trail
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreateTrail;
