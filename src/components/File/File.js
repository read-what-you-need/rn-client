import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { filePageInit } from "../../actions";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";
import LineActionBar from "../Line/LineActionBar";

import QuestionsRecentAsked from "../Questions/QuestionsRecentAsked";
import { BackTop, Row, Col } from "antd";
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
        <BackTop duration={200} visibilityHeight={50}/>
        <Col span={6} className="tags-column">
          <FileTags />
          <QuestionsRecentAsked />
        </Col>
        <Col span={12}>
          <Col className="lines-action-bar-wrapper" span={12} offset={6}>
            <LineActionBar />
          </Col>
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
