import React from "react";
import "./BookPage.scss";
import BookSearch from "./BookSearch";
import FrequentBooksList from "./FrequentBooksList";

import { Row, Col } from "antd";

const BookExplore = () => {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-header-wrapper">
          <div className="book-page-header-text">Search books from library </div>
        </div>
        <div className="book-page-search">
          <Row>
            <Col span={16}>
              <BookSearch />
            </Col>
            <Col offset={1} span={6}>
              <FrequentBooksList />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookExplore;
