import React from "react";
import "./BookPage.scss";
import BookSearch from "./BookSearch";
import FrequentBooksList from "./FrequentBooksList";

import { Row, Col } from "antd";
import useWindowDimensions from "../../libs/useWindowDimensions";

const BookExplore = () => {
  const { height, width } = useWindowDimensions();
  let isScreenSmall = width < 700;
  const sidePanel = isScreenSmall ? 24 : 16;
  const infoPanel = isScreenSmall ? 24 : 6;
  
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-explore">
          <Row>
            <Col span={sidePanel}>
              <div className="book-page-explore-section">
                <div>
                  <div className="book-page-header-wrapper">
                    <div className="book-page-header-text">Request books in library </div>
                  </div>
                  <BookSearch />
                </div>
              </div>
            </Col>
            <Col offset={1} span={infoPanel}>
              {" "}
              <FrequentBooksList />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookExplore;
