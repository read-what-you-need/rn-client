import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import trailApi from "../../api/trail";
const dateFormatOptions = { hour: "2-digit", minute: "2-digit", weekday: "long", year: "numeric", month: "long", day: "numeric" };
const ListTrail = () => {
  const [trails, setTrails] = useState([]);
  useEffect(() => {
    trailApi.listUserTrails({ offset: 0, limit: 15 }).then(res => {
      setTrails(res);
    });
  }, []);
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-list">
          {trails.map(trail => {
            const trailCreatedAt = new Date(trail.created_at).toLocaleDateString("en-US", dateFormatOptions);
            return (
              <Link className="book-list-item" key={trail.trail_id} to={`/trail/${trail.trail_id}`}>
                <Row className="book-list-item-wrapper">
                  <Col md={{ span: 24 }} lg={{ span: 4 }} className="book-list-picture-wrapper ">
                    <div className="book-list-picture"></div>
                  </Col>
                  <Col md={{ span: 24 }} lg={{ offset: 2, span: 18 }} className="book-list-info-wrapper">
                    <Row className>
                      <div className="book-list-title "> {trail.title}</div>
                    </Row>
                    <Row className="book-list-info-header-wrapper ">
                      <div className="book-list-date">{trailCreatedAt}</div>
                    </Row>
                  </Col>
                </Row>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListTrail;
