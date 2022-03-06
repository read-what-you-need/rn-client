import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import trailApi from "../../api/trail";
import { BackTop, Row, Col } from "antd";
import "./LinesTrail.scss";

import BookInfoCard from "../Book/BookInfoCard";

const LinesTrail = () => {
  const [trailDetails, setTrailDetails] = useState([]);
  const [trailLines, setTrailLines] = useState([]);
  let params = useParams();

  useEffect(() => {
    trailApi.getTrailDetails({ trailId: params.id }).then(res => setTrailDetails(res));
    trailApi.listUserTrailLines({ trailId: params.id, offset: 0, limit: 15 }).then(res => {
      setTrailLines(res);
    });
  }, []);

  return (
    <div className="lines-trail">
      <Row>
        <BackTop duration={200} visibilityHeight={50} />
        <Col span={15}>
          <div className="lines-trail-wrapper">
            <div className="lines-trail-title-header">{trailDetails.title}</div>
            <ul className="lines-trail-items">
              {trailLines.map(trailLines => {
                return (
                  <li className="lines-trail-item" key={trailLines.user_line_id || trailLines.file_line_id}>
                    {trailLines.file_line || trailLines.user_line}
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col span={7} className="lines-trail-info-column">
          <div className="lines-trail-book-info-wrapper">
            <BookInfoCard />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LinesTrail;
