import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { filePageInit } from "../../actions";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";


import { Row, Col } from "antd";
import "./File.scss";

const File = ({ filePageInit }) => {
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    filePageInit({ fileId: id });
  });

  return (
    <div className="file-wrapper">
      <Row>
        <Col span={6} className="tags-column">
          <FileTags />
        </Col>
        <Col span={12}>
          <div className="lines-list-wrapper">
            <LinesList />
          </div>
        </Col>
        <Col span={6} className="filter-column">
          <LineFilters />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({});

const actionCreators = {
  filePageInit
};
export default connect(mapStateToProps, actionCreators)(File);
