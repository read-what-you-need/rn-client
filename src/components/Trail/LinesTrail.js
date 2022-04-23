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
    trailApi.listUserTrailLines({ trailId: params.id, offset: 0, limit: 150 }).then(res => {
      setTrailLines(res);
    });
  }, []);

  return (
    <div className="lines-trail">
      <Row>
        <BackTop duration={200} visibilityHeight={50} />
        <Col span={16} >
          <div className="lines-trail-wrapper">
            <div className="lines-trail-title-header">{trailDetails.title}</div>
            <div className="lines-trail-items">
              {trailLines.map(trailLines => {
                console.log();
                if (trailLines.file_line_id) {
                  return (
                    <div className="lines-trail-item-book" key={trailLines.file_line_id}>
                      {trailLines.file_line}
                    </div>
                  );
                } else if (trailLines.user_line_id) {
                  return (
                    <div className="lines-trail-item-user" key={trailLines.user_line_id}>
                      {trailLines.user_line}
                    </div>
                  );
                } else return <></>;
              })}
            </div>
          </div>
        </Col>
        <Col span={7} className="lines-trail-info-column">
          <div className="lines-trail-book-info-wrapper">
            <BookInfoCard trailId={params.id} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LinesTrail;
